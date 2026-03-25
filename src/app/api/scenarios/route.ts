import { NextRequest, NextResponse } from "next/server";
import { cafeScenario } from "@/lib/prompts/scenario-cafe";
import { cafeScenario2 } from "@/lib/prompts/scenario-cafe-2";
import { cafeScenario3 } from "@/lib/prompts/scenario-cafe-3";
import { restaurantScenario } from "@/lib/prompts/scenario-restaurant";
import { restaurantScenario2 } from "@/lib/prompts/scenario-restaurant-2";
import { restaurantScenario3 } from "@/lib/prompts/scenario-restaurant-3";
import { directionsScenario } from "@/lib/prompts/scenario-directions";
import { directionsScenario2 } from "@/lib/prompts/scenario-directions-2";
import { directionsScenario3 } from "@/lib/prompts/scenario-directions-3";
import { hotelScenario } from "@/lib/prompts/scenario-hotel";
import { hotelScenario2 } from "@/lib/prompts/scenario-hotel-2";
import { hotelScenario3 } from "@/lib/prompts/scenario-hotel-3";
import { shoppingScenario } from "@/lib/prompts/scenario-shopping";
import { shoppingScenario2 } from "@/lib/prompts/scenario-shopping-2";
import { shoppingScenario3 } from "@/lib/prompts/scenario-shopping-3";
import { officeScenario } from "@/lib/prompts/scenario-office";
import { cafeScenarioFr } from "@/lib/prompts/scenario-cafe-fr";
import { directionsFrScenario } from "@/lib/prompts/scenario-directions-fr";
import { cafeScenarioZh } from "@/lib/prompts/scenario-cafe-zh";
import { directionsZhScenario } from "@/lib/prompts/scenario-directions-zh";
// Ofcom — Spanish
import { ofcomIntroScenario } from "@/lib/prompts/scenario-ofcom-intro";
import { ofcomOsaScenario } from "@/lib/prompts/scenario-ofcom-osa";
import { ofcomRoadmapScenario } from "@/lib/prompts/scenario-ofcom-roadmap";
import { ofcomStakeholderScenario } from "@/lib/prompts/scenario-ofcom-stakeholder";
import { ofcomPanelScenario } from "@/lib/prompts/scenario-ofcom-panel";
// Ofcom — French
import { ofcomIntroFrScenario } from "@/lib/prompts/scenario-ofcom-intro-fr";
import { ofcomOsaFrScenario } from "@/lib/prompts/scenario-ofcom-osa-fr";
import { ofcomRoadmapFrScenario } from "@/lib/prompts/scenario-ofcom-roadmap-fr";
import { ofcomStakeholderFrScenario } from "@/lib/prompts/scenario-ofcom-stakeholder-fr";
import { ofcomPanelFrScenario } from "@/lib/prompts/scenario-ofcom-panel-fr";
// Ofcom — Chinese
import { ofcomIntroZhScenario } from "@/lib/prompts/scenario-ofcom-intro-zh";
import { ofcomOsaZhScenario } from "@/lib/prompts/scenario-ofcom-osa-zh";
import { ofcomRoadmapZhScenario } from "@/lib/prompts/scenario-ofcom-roadmap-zh";
import { ofcomStakeholderZhScenario } from "@/lib/prompts/scenario-ofcom-stakeholder-zh";
import { ofcomPanelZhScenario } from "@/lib/prompts/scenario-ofcom-panel-zh";
import type { Scenario } from "@/lib/types";

const scenarios: Record<string, Scenario> = {
  "cafe-ordering": cafeScenario,
  "cafe-ordering-2": cafeScenario2,
  "cafe-ordering-3": cafeScenario3,
  "restaurant-ordering": restaurantScenario,
  "restaurant-ordering-2": restaurantScenario2,
  "restaurant-ordering-3": restaurantScenario3,
  "asking-directions": directionsScenario,
  "asking-directions-2": directionsScenario2,
  "asking-directions-3": directionsScenario3,
  "hotel-checkin": hotelScenario,
  "hotel-checkin-2": hotelScenario2,
  "hotel-checkin-3": hotelScenario3,
  "shopping": shoppingScenario,
  "shopping-2": shoppingScenario2,
  "shopping-3": shoppingScenario3,
  "office-workplace": officeScenario,
  // French
  "cafe-ordering-fr": cafeScenarioFr,
  "asking-directions-fr": directionsFrScenario,
  // Chinese
  "cafe-ordering-zh": cafeScenarioZh,
  "asking-directions-zh": directionsZhScenario,
  // Ofcom — Spanish
  "ofcom-intro": ofcomIntroScenario,
  "ofcom-osa": ofcomOsaScenario,
  "ofcom-roadmap": ofcomRoadmapScenario,
  "ofcom-stakeholder": ofcomStakeholderScenario,
  "ofcom-panel": ofcomPanelScenario,
  // Ofcom — French
  "ofcom-intro-fr": ofcomIntroFrScenario,
  "ofcom-osa-fr": ofcomOsaFrScenario,
  "ofcom-roadmap-fr": ofcomRoadmapFrScenario,
  "ofcom-stakeholder-fr": ofcomStakeholderFrScenario,
  "ofcom-panel-fr": ofcomPanelFrScenario,
  // Ofcom — Chinese
  "ofcom-intro-zh": ofcomIntroZhScenario,
  "ofcom-osa-zh": ofcomOsaZhScenario,
  "ofcom-roadmap-zh": ofcomRoadmapZhScenario,
  "ofcom-stakeholder-zh": ofcomStakeholderZhScenario,
  "ofcom-panel-zh": ofcomPanelZhScenario,
};

// GET /api/scenarios — return all scenarios (summary) or a specific one by id
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const scenario = scenarios[id];
    if (!scenario) {
      return NextResponse.json({ error: "Scenario not found" }, { status: 404 });
    }
    return NextResponse.json(scenario);
  }

  // Return summaries of all scenarios (without full turn data)
  const summaries = Object.values(scenarios).map((s) => ({
    id: s.id,
    title: s.title,
    titleEs: s.titleEs,
    description: s.description,
    setting: s.setting,
    turnCount: s.turns.length,
  }));

  return NextResponse.json(summaries);
}
