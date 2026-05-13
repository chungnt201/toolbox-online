"use client";

import { useState, useEffect } from "react";
import ToolLayout from "@/components/ToolLayout";

function hexToRgb(hex: string): [number, number, number] | null {
  const m = hex.replace("#", "").match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360; s /= 100; l /= 100;
  if (s === 0) { const v = Math.round(l * 255); return [v, v, v]; }
  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ];
}

export default function ColorConverterPage() {
  const [hex, setHex] = useState("#6366f1");
  const [rgb, setRgb] = useState({ r: 99, g: 102, b: 241 });
  const [hsl, setHsl] = useState({ h: 239, s: 84, l: 67 });

  const updateFromHex = (value: string) => {
    setHex(value);
    const result = hexToRgb(value);
    if (result) {
      const [r, g, b] = result;
      setRgb({ r, g, b });
      const [h, s, l] = rgbToHsl(r, g, b);
      setHsl({ h, s, l });
    }
  };

  const updateFromRgb = (r: number, g: number, b: number) => {
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
    const [h, s, l] = rgbToHsl(r, g, b);
    setHsl({ h, s, l });
  };

  const updateFromHsl = (h: number, s: number, l: number) => {
    setHsl({ h, s, l });
    const [r, g, b] = hslToRgb(h, s, l);
    setRgb({ r, g, b });
    setHex(rgbToHex(r, g, b));
  };

  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <ToolLayout
      title="Chuyển đổi màu sắc"
      description="Chuyển đổi giữa HEX, RGB, HSL với color picker trực quan. Hỗ trợ sao chép CSS."
    >
      <div className="space-y-6">
        {/* Color Preview */}
        <div className="flex items-center gap-6">
          <div
            className="h-32 w-32 shrink-0 rounded-2xl border-2 border-gray-200 shadow-inner dark:border-gray-700"
            style={{ backgroundColor: hex }}
          />
          <div className="flex-1">
            <input
              type="color"
              value={hex}
              onChange={(e) => updateFromHex(e.target.value)}
              className="mb-3 h-12 w-full cursor-pointer rounded-lg"
            />
            <p className="text-sm text-gray-500">Chọn màu hoặc nhập giá trị bên dưới</p>
          </div>
        </div>

        {/* HEX */}
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">HEX</label>
            <button onClick={() => copy(hex)} className="text-xs text-indigo-600 hover:underline">Sao chép</button>
          </div>
          <input
            className="tool-input font-mono"
            value={hex}
            onChange={(e) => updateFromHex(e.target.value)}
          />
        </div>

        {/* RGB */}
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">RGB</label>
            <button onClick={() => copy(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)} className="text-xs text-indigo-600 hover:underline">Sao chép CSS</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="mb-1 block text-xs text-gray-500">R</label>
              <input type="number" className="tool-input font-mono" min={0} max={255} value={rgb.r} onChange={(e) => updateFromRgb(Number(e.target.value), rgb.g, rgb.b)} />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-500">G</label>
              <input type="number" className="tool-input font-mono" min={0} max={255} value={rgb.g} onChange={(e) => updateFromRgb(rgb.r, Number(e.target.value), rgb.b)} />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-500">B</label>
              <input type="number" className="tool-input font-mono" min={0} max={255} value={rgb.b} onChange={(e) => updateFromRgb(rgb.r, rgb.g, Number(e.target.value))} />
            </div>
          </div>
        </div>

        {/* HSL */}
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">HSL</label>
            <button onClick={() => copy(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} className="text-xs text-indigo-600 hover:underline">Sao chép CSS</button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="mb-1 block text-xs text-gray-500">H (0-360)</label>
              <input type="number" className="tool-input font-mono" min={0} max={360} value={hsl.h} onChange={(e) => updateFromHsl(Number(e.target.value), hsl.s, hsl.l)} />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-500">S (0-100)</label>
              <input type="number" className="tool-input font-mono" min={0} max={100} value={hsl.s} onChange={(e) => updateFromHsl(hsl.h, Number(e.target.value), hsl.l)} />
            </div>
            <div>
              <label className="mb-1 block text-xs text-gray-500">L (0-100)</label>
              <input type="number" className="tool-input font-mono" min={0} max={100} value={hsl.l} onChange={(e) => updateFromHsl(hsl.h, hsl.s, Number(e.target.value))} />
            </div>
          </div>
        </div>

        {/* CSS Output */}
        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">CSS Values</label>
          <div className="space-y-1 font-mono text-sm text-gray-600 dark:text-gray-400">
            <p>color: {hex};</p>
            <p>color: rgb({rgb.r}, {rgb.g}, {rgb.b});</p>
            <p>color: hsl({hsl.h}, {hsl.s}%, {hsl.l}%);</p>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
