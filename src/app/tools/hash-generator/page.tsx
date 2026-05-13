"use client";

import { useState } from "react";
import CryptoJS from "crypto-js";
import ToolLayout from "@/components/ToolLayout";

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<{ algorithm: string; hash: string }[]>([]);

  const generateHashes = () => {
    if (!input) return;
    setHashes([
      { algorithm: "MD5", hash: CryptoJS.MD5(input).toString() },
      { algorithm: "SHA-1", hash: CryptoJS.SHA1(input).toString() },
      { algorithm: "SHA-256", hash: CryptoJS.SHA256(input).toString() },
      { algorithm: "SHA-512", hash: CryptoJS.SHA512(input).toString() },
      { algorithm: "SHA-3 (256)", hash: CryptoJS.SHA3(input, { outputLength: 256 }).toString() },
      { algorithm: "RIPEMD-160", hash: CryptoJS.RIPEMD160(input).toString() },
    ]);
  };

  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <ToolLayout
      title="Hash Generator"
      description="Tạo hash MD5, SHA-1, SHA-256, SHA-512, SHA-3 và RIPEMD-160 từ văn bản. Miễn phí, xử lý trên trình duyệt."
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nhập văn bản
          </label>
          <textarea
            className="tool-input tool-textarea"
            placeholder="Nhập văn bản cần tạo hash..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button className="btn-primary" onClick={generateHashes}>
          #️⃣ Tạo Hash
        </button>

        {hashes.length > 0 && (
          <div className="space-y-3">
            {hashes.map((h) => (
              <div key={h.algorithm} className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {h.algorithm}
                  </span>
                  <button
                    onClick={() => copy(h.hash)}
                    className="text-xs text-indigo-600 hover:underline"
                  >
                    📋 Sao chép
                  </button>
                </div>
                <code className="block break-all text-sm text-gray-600 dark:text-gray-400">
                  {h.hash}
                </code>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
