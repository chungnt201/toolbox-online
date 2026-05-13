"use client";

import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum", "at", "vero", "eos",
  "accusamus", "iusto", "odio", "dignissimos", "ducimus", "blanditiis",
  "praesentium", "voluptatum", "deleniti", "atque", "corrupti", "quos", "dolores",
  "quas", "molestias", "recusandae", "itaque", "earum", "rerum", "hic", "tenetur",
  "sapiente", "delectus", "aut", "reiciendis", "voluptatibus", "maiores", "alias",
  "perferendis", "doloribus", "asperiores", "repellat",
];

function randomWord() {
  return LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];
}

function generateSentence(minWords = 5, maxWords = 15): string {
  const len = minWords + Math.floor(Math.random() * (maxWords - minWords));
  const words = Array.from({ length: len }, () => randomWord());
  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph(minSentences = 3, maxSentences = 7): string {
  const len = minSentences + Math.floor(Math.random() * (maxSentences - minSentences));
  return Array.from({ length: len }, () => generateSentence()).join(" ");
}

export default function LoremIpsumPage() {
  const [count, setCount] = useState(3);
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [result, setResult] = useState("");

  const generate = () => {
    let text = "";
    if (type === "paragraphs") {
      const paragraphs = Array.from({ length: count }, () => generateParagraph());
      if (startWithLorem) {
        paragraphs[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + paragraphs[0];
      }
      text = paragraphs.join("\n\n");
    } else if (type === "sentences") {
      const sentences = Array.from({ length: count }, () => generateSentence());
      if (startWithLorem) {
        sentences[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
      }
      text = sentences.join(" ");
    } else {
      const words = Array.from({ length: count }, () => randomWord());
      if (startWithLorem && count >= 2) {
        words[0] = "lorem";
        words[1] = "ipsum";
      }
      text = words.join(" ");
    }
    setResult(text);
  };

  const copy = () => navigator.clipboard.writeText(result);

  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Tạo văn bản Lorem Ipsum cho thiết kế và phát triển web. Tùy chỉnh số đoạn, câu hoặc từ."
    >
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Số lượng
            </label>
            <input
              type="number"
              className="tool-input"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Loại
            </label>
            <select
              className="tool-input"
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
            >
              <option value="paragraphs">Đoạn văn</option>
              <option value="sentences">Câu</option>
              <option value="words">Từ</option>
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={startWithLorem}
                onChange={(e) => setStartWithLorem(e.target.checked)}
                className="h-4 w-4 accent-indigo-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Bắt đầu với &quot;Lorem ipsum&quot;</span>
            </label>
          </div>
        </div>

        <button className="btn-primary" onClick={generate}>
          📝 Tạo Lorem Ipsum
        </button>

        {result && (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Kết quả</label>
              <button onClick={copy} className="text-sm text-indigo-600 hover:underline">📋 Sao chép</button>
            </div>
            <div className="result-box max-h-96 overflow-auto whitespace-pre-wrap font-sans text-sm leading-relaxed">
              {result}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
