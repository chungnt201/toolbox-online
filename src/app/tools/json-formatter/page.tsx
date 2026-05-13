"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);

  const format = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "JSON không hợp lệ");
      setOutput("");
    }
  };

  const minify = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "JSON không hợp lệ");
      setOutput("");
    }
  };

  const validate = () => {
    try {
      JSON.parse(input);
      setError("");
      setOutput("✅ JSON hợp lệ!");
    } catch (e) {
      setError(e instanceof Error ? e.message : "JSON không hợp lệ");
      setOutput("");
    }
  };

  const copy = () => navigator.clipboard.writeText(output);

  const sample = () => {
    const sampleJson = {
      name: "ToolBox Online",
      version: "1.0.0",
      features: ["QR Code", "JSON Formatter", "Password Generator"],
      config: {
        theme: "dark",
        language: "vi",
        enabled: true,
      },
    };
    setInput(JSON.stringify(sampleJson));
  };

  return (
    <ToolLayout
      title="JSON Formatter & Validator"
      description="Định dạng, xác thực và làm đẹp JSON. Hỗ trợ minify, format với tùy chỉnh indent."
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <button className="btn-primary" onClick={format}>
            Định dạng (Format)
          </button>
          <button className="btn-secondary" onClick={minify}>
            Nén (Minify)
          </button>
          <button className="btn-secondary" onClick={validate}>
            Kiểm tra (Validate)
          </button>
          <button className="btn-secondary" onClick={sample}>
            Mẫu JSON
          </button>
          <div className="ml-auto flex items-center gap-2">
            <label className="text-sm text-gray-500">Indent:</label>
            <select
              className="tool-input w-20"
              value={indent}
              onChange={(e) => setIndent(Number(e.target.value))}
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={8}>8</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nhập JSON
            </label>
            <textarea
              className="tool-input font-mono text-sm"
              style={{ minHeight: "300px" }}
              placeholder='{"key": "value"}'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Kết quả
              </label>
              {output && !error && (
                <button onClick={copy} className="text-sm text-indigo-600 hover:underline">
                  📋 Sao chép
                </button>
              )}
            </div>
            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                ❌ {error}
              </div>
            ) : (
              <pre className="result-box overflow-auto text-sm" style={{ minHeight: "300px" }}>
                {output || "Kết quả sẽ hiển thị ở đây..."}
              </pre>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
