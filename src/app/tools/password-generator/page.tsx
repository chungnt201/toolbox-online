"use client";

import { useState, useCallback } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const generate = useCallback(() => {
    let chars = "";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (!chars) {
      alert("Vui lòng chọn ít nhất một loại ký tự!");
      return;
    }

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    const pw = Array.from(array, (v) => chars[v % chars.length]).join("");
    setPassword(pw);
    setHistory((prev) => [pw, ...prev.slice(0, 9)]);
    setCopied(false);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    let score = 0;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (uppercase) score++;
    if (lowercase) score++;
    if (numbers) score++;
    if (symbols) score++;

    if (score <= 2) return { label: "Yếu", color: "bg-red-500", width: "25%" };
    if (score <= 4) return { label: "Trung bình", color: "bg-yellow-500", width: "50%" };
    if (score <= 5) return { label: "Mạnh", color: "bg-blue-500", width: "75%" };
    return { label: "Rất mạnh", color: "bg-green-500", width: "100%" };
  };

  const strength = getStrength();

  return (
    <ToolLayout
      title="Tạo mật khẩu mạnh"
      description="Công cụ tạo mật khẩu ngẫu nhiên, an toàn với các tùy chọn tùy chỉnh. Mật khẩu được tạo hoàn toàn trên thiết bị của bạn."
    >
      <div className="space-y-6">
        {/* Result */}
        {password && (
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <code className="flex-1 break-all text-lg font-semibold text-gray-900 dark:text-white">
              {password}
            </code>
            <button className="btn-secondary shrink-0" onClick={copyToClipboard}>
              {copied ? "✓ Đã sao chép" : "📋 Sao chép"}
            </button>
          </div>
        )}

        {/* Strength bar */}
        {password && (
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-gray-500">Độ mạnh:</span>
              <span className="font-medium">{strength.label}</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={`h-2 rounded-full transition-all ${strength.color}`}
                style={{ width: strength.width }}
              />
            </div>
          </div>
        )}

        {/* Options */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Độ dài: {length} ký tự
          </label>
          <input
            type="range"
            min={4}
            max={128}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>4</span>
            <span>128</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <CheckOption label="Chữ hoa (A-Z)" checked={uppercase} onChange={setUppercase} />
          <CheckOption label="Chữ thường (a-z)" checked={lowercase} onChange={setLowercase} />
          <CheckOption label="Số (0-9)" checked={numbers} onChange={setNumbers} />
          <CheckOption label="Ký tự đặc biệt (!@#...)" checked={symbols} onChange={setSymbols} />
        </div>

        <button className="btn-primary w-full" onClick={generate}>
          🔄 Tạo mật khẩu
        </button>

        {/* History */}
        {history.length > 0 && (
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Lịch sử ({history.length})
            </h3>
            <div className="space-y-2">
              {history.map((pw, i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-800">
                  <code className="flex-1 truncate text-gray-600 dark:text-gray-400">{pw}</code>
                  <button
                    className="text-xs text-indigo-600 hover:underline"
                    onClick={() => navigator.clipboard.writeText(pw)}
                  >
                    Sao chép
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}

function CheckOption({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded accent-indigo-600"
      />
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
    </label>
  );
}
