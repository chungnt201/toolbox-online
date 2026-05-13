"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

export default function WordCounterPage() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const sentences = trimmed ? (trimmed.match(/[.!?]+/g) || []).length || (trimmed.length > 0 ? 1 : 0) : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0;
    const readingTime = Math.ceil(words / 200);
    const speakingTime = Math.ceil(words / 130);

    return { characters, charactersNoSpaces, words, sentences, paragraphs, readingTime, speakingTime };
  }, [text]);

  return (
    <ToolLayout
      title="Đếm từ & ký tự"
      description="Công cụ đếm số từ, ký tự, câu, đoạn văn và ước tính thời gian đọc. Hỗ trợ tiếng Việt."
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nhập hoặc dán văn bản
          </label>
          <textarea
            className="tool-input tool-textarea"
            style={{ minHeight: "200px" }}
            placeholder="Dán văn bản của bạn vào đây..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard label="Từ" value={stats.words} />
          <StatCard label="Ký tự" value={stats.characters} />
          <StatCard label="Ký tự (không dấu cách)" value={stats.charactersNoSpaces} />
          <StatCard label="Câu" value={stats.sentences} />
          <StatCard label="Đoạn văn" value={stats.paragraphs} />
          <StatCard label="Thời gian đọc" value={`${stats.readingTime} phút`} />
          <StatCard label="Thời gian nói" value={`${stats.speakingTime} phút`} />
        </div>

        <div className="flex gap-3">
          <button className="btn-secondary" onClick={() => setText("")}>
            Xóa tất cả
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigator.clipboard.readText().then(setText)}
          >
            📋 Dán từ clipboard
          </button>
        </div>
      </div>
    </ToolLayout>
  );
}

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-800">
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{value}</div>
      <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">{label}</div>
    </div>
  );
}
