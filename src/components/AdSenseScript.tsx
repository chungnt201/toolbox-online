"use client";

import { useEffect } from "react";

const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

export default function AdSenseScript() {
  useEffect(() => {
    if (!adsenseId) return;

    const existing = document.querySelector(`script[src*="adsbygoogle"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return null;
}
