import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "CafeLingo — Learn Spanish by Speaking",
  description:
    "Practice conversational Spanish with an AI tutor in real-world scenarios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="importmap" type="importmap" strategy="beforeInteractive">
          {JSON.stringify({
            imports: {
              "three": "https://cdn.jsdelivr.net/npm/three@0.183.2/build/three.module.js",
              "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.183.2/examples/jsm/",
              "three/": "https://cdn.jsdelivr.net/npm/three@0.183.2/",
            },
          })}
        </Script>
      </head>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
