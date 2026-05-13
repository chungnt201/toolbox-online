"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");

  const process = () => {
    try {
      setError("");
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input.trim()))));
      }
    } catch {
      setError(mode === "encode" ? "Không thể mã hóa văn bản này" : "Chuỗi Base64 không hợp lệ");
      setOutput("");
    }
  };

  const swap = () => {
    setMode(mode === "encode" ? "decode" : "encode");
    setInput(output);
    setOutput("");
    setError("");
  };

  const copy = () => navigator.clipboard.writeText(output);

  return (
    <ToolLayout
      title="Base64 Encode / Decode"
      description="Mã hóa và giải mã Base64 online miễn phí. Hỗ trợ Unicode và tiếng Việt."
    >
      <div className="space-y-6">
        {/* Mode Toggle */}
        <div className="flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
          <button
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
              mode === "encode"
                ? "bg-white text-indigo-600 shadow dark:bg-gray-700 dark:text-indigo-400"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => { setMode("encode"); setOutput(""); setError(""); }}
          >
            Mã hóa (Encode)
          </button>
          <button
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
              mode === "decode"
                ? "bg-white text-indigo-600 shadow dark:bg-gray-700 dark:text-indigo-400"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => { setMode("decode"); setOutput(""); setError(""); }}
          >
            Giải mã (Decode)
          </button>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            {mode === "encode" ? "Văn bản gốc" : "Chuỗi Base64"}
          </label>
          <textarea
            className="tool-input tool-textarea font-mono text-sm"
            style={{ minHeight: "150px" }}
            placeholder={mode === "encode" ? "Nhập văn bản cần mã hóa..." : "Nhập chuỗi Base64 cần giải mã..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <button className="btn-primary" onClick={process}>
            {mode === "encode" ? "🔒 Mã hóa" : "🔓 Giải mã"}
          </button>
          <button className="btn-secondary" onClick={swap}>
            🔄 Hoán đổi
          </button>
        </div>

        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
            ❌ {error}
          </div>
        )}

        {output && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {mode === "encode" ? "Kết quả Base64" : "Văn bản gốc"}
              </label>
              <button onClick={copy} className="text-sm text-indigo-600 hover:underline">
                📋 Sao chép
              </button>
            </div>
            <div className="result-box whitespace-pre-wrap break-all text-sm">{output}</div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
