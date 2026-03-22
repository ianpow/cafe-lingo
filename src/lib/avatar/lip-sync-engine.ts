import { charToViseme, VISEME_NAMES, type VisemeName } from "./viseme-map";
import type { AlignmentData } from "@/lib/hooks/useConversationFlow";

interface VisemeKeyframe {
  viseme: VisemeName;
  startTime: number;
  endTime: number;
}

export class LipSyncEngine {
  private keyframes: VisemeKeyframe[] = [];
  private isActive = false;
  private startTimestamp = 0;

  loadAlignment(alignment: AlignmentData | null): void {
    this.keyframes = [];

    if (!alignment?.characters) {
      return;
    }

    const { characters, character_start_times_seconds, character_end_times_seconds } = alignment;

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      const startTime = character_start_times_seconds[i];
      const endTime = character_end_times_seconds[i];

      if (startTime === undefined || endTime === undefined) continue;

      const viseme = charToViseme(char);
      this.keyframes.push({ viseme, startTime, endTime });
    }
  }

  start(): void {
    this.isActive = true;
    this.startTimestamp = performance.now() / 1000;
  }

  stop(): void {
    this.isActive = false;
    this.keyframes = [];
  }

  /**
   * Returns morph target weights for all visemes at the current time.
   * Call this every frame in useFrame.
   */
  getVisemeWeights(): Record<VisemeName, number> {
    const weights: Record<string, number> = {};
    for (const name of VISEME_NAMES) {
      weights[name] = 0;
    }

    if (!this.isActive || this.keyframes.length === 0) {
      weights.viseme_sil = 1;
      return weights as Record<VisemeName, number>;
    }

    const currentTime = performance.now() / 1000 - this.startTimestamp;

    // Find the active keyframe
    let activeKeyframe: VisemeKeyframe | null = null;
    let nextKeyframe: VisemeKeyframe | null = null;

    for (let i = 0; i < this.keyframes.length; i++) {
      const kf = this.keyframes[i];
      if (currentTime >= kf.startTime && currentTime < kf.endTime) {
        activeKeyframe = kf;
        nextKeyframe = this.keyframes[i + 1] ?? null;
        break;
      }
    }

    if (!activeKeyframe) {
      // Past the last keyframe
      if (this.keyframes.length > 0 && currentTime >= this.keyframes[this.keyframes.length - 1].endTime) {
        this.isActive = false;
      }
      weights.viseme_sil = 1;
      return weights as Record<VisemeName, number>;
    }

    // Calculate weight with smooth transition
    const duration = activeKeyframe.endTime - activeKeyframe.startTime;
    const elapsed = currentTime - activeKeyframe.startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease in-out for smoother transitions
    const eased = smoothstep(progress);

    // Blend between current viseme and silence at the edges
    const fadeIn = Math.min(progress * 4, 1); // Quick fade in over 25% of duration
    const fadeOut = Math.min((1 - progress) * 4, 1); // Quick fade out over last 25%
    const intensity = Math.min(fadeIn, fadeOut);

    weights[activeKeyframe.viseme] = intensity * 0.8; // Cap at 0.8 for more natural look

    // Blend toward next viseme near the end
    if (nextKeyframe && progress > 0.7) {
      const blendProgress = (progress - 0.7) / 0.3;
      weights[nextKeyframe.viseme] = smoothstep(blendProgress) * 0.3;
    }

    return weights as Record<VisemeName, number>;
  }

  getIsActive(): boolean {
    return this.isActive;
  }
}

function smoothstep(x: number): number {
  x = Math.max(0, Math.min(1, x));
  return x * x * (3 - 2 * x);
}
