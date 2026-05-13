"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function CaseConverterPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [activeCase, setActiveCase] = useState("");

  const conversions = [
    {
      label: "UPPERCASE",
      id: "upper",
      fn: (t: string) => t.toUpperCase(),
    },
    {
      label: "lowercase",
      id: "lower",
      fn: (t: string) => t.toLowerCase(),
    },
    {
      label: "Title Case",
      id: "title",
      fn: (t: string) => t.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
    },
    {
      label: "Sentence case",
      id: "sentence",
      fn: (t: string) => {
        return t.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, (c) => c.toUpperCase());
      },
    },
    {
      label: "camelCase",
      id: "camel",
      fn: (t: string) => {
        return t
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
      },
    },
    {
      label: "PascalCase",
      id: "pascal",
      fn: (t: string) => {
        return t
          .toLowerCase()
          .replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, __, c) => c.toUpperCase());
      },
    },
    {
      label: "snake_case",
      id: "snake",
      fn: (t: string) => t.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, ""),
    },
    {
      label: "kebab-case",
      id: "kebab",
      fn: (t: string) => t.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
    },
    {
      label: "aLtErNaTiNg",
      id: "alternating",
      fn: (t: string) => t.split("").map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase())).join(""),
    },
    {
      label: "NGƯỢC",
      id: "reverse",
      fn: (t: string) => t.split("").reverse().join(""),
    },
  ];

  const apply = (id: string, fn: (t: string) => string) => {
    setResult(fn(text));
    setActiveCase(id);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(result);
  };

  return (
    <ToolLayout
      title="Chuyển đổi chữ hoa/thường"
      description="Chuyển đổi văn bản giữa UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case và nhiều kiểu khác."
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nhập văn bản
          </label>
          <textarea
            className="tool-input tool-textarea"
            placeholder="Nhập văn bản cần chuyển đổi..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {conversions.map((c) => (
            <button
              key={c.id}
              onClick={() => apply(c.id, c.fn)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
                activeCase === c.id
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {result && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Kết quả</label>
              <button onClick={copy} className="text-sm text-indigo-600 hover:underline">
                📋 Sao chép
              </button>
            </div>
            <div className="result-box whitespace-pre-wrap">{result}</div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
