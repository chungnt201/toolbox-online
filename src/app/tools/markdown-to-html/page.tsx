"use client";

import { useState, useMemo } from "react";
import ToolLayout from "@/components/ToolLayout";

function markdownToHtml(md: string): string {
  let html = md;

  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");
  html = html.replace(/`(.+?)`/g, "<code>$1</code>");

  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/!\[(.+?)\]\((.+?)\)/g, '<img alt="$1" src="$2" />');

  html = html.replace(/^\* (.+)$/gm, "<li>$1</li>");
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, "<ul>\n$&</ul>\n");

  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  html = html.replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>");
  html = html.replace(/^---$/gm, "<hr />");

  const lines = html.split("\n");
  const result: string[] = [];
  let inParagraph = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inParagraph) {
        result.push("</p>");
        inParagraph = false;
      }
    } else if (/^<(h[1-6]|ul|ol|li|blockquote|hr|pre|table)/.test(trimmed)) {
      if (inParagraph) {
        result.push("</p>");
        inParagraph = false;
      }
      result.push(trimmed);
    } else {
      if (!inParagraph) {
        result.push("<p>");
        inParagraph = true;
      }
      result.push(trimmed);
    }
  }
  if (inParagraph) result.push("</p>");

  return result.join("\n");
}

export default function MarkdownToHtmlPage() {
  const [input, setInput] = useState("");
  const [view, setView] = useState<"html" | "preview">("html");

  const output = useMemo(() => markdownToHtml(input), [input]);

  const copy = () => navigator.clipboard.writeText(output);

  const sampleMd = `# Tiêu đề chính

## Tiêu đề phụ

Đây là một đoạn văn bản với **chữ đậm** và *chữ nghiêng*.

### Danh sách

- Mục 1
- Mục 2
- Mục 3

> Đây là trích dẫn

Truy cập [ToolBox Online](https://toolbox.online) để sử dụng thêm nhiều công cụ miễn phí.

---

Kết thúc.`;

  return (
    <ToolLayout
      title="Markdown → HTML"
      description="Chuyển đổi Markdown sang HTML với xem trước trực tiếp. Hỗ trợ heading, bold, italic, link, list."
    >
      <div className="space-y-6">
        <div className="flex gap-3">
          <button className="btn-secondary" onClick={() => setInput(sampleMd)}>
            Văn bản mẫu
          </button>
          <button className="btn-secondary" onClick={() => { setInput(""); }}>
            Xóa
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Markdown
            </label>
            <textarea
              className="tool-input font-mono text-sm"
              style={{ minHeight: "350px" }}
              placeholder="Nhập Markdown..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  className={`rounded-lg px-3 py-1 text-xs font-medium ${view === "html" ? "bg-indigo-100 text-indigo-700" : "text-gray-500"}`}
                  onClick={() => setView("html")}
                >
                  HTML
                </button>
                <button
                  className={`rounded-lg px-3 py-1 text-xs font-medium ${view === "preview" ? "bg-indigo-100 text-indigo-700" : "text-gray-500"}`}
                  onClick={() => setView("preview")}
                >
                  Xem trước
                </button>
              </div>
              <button onClick={copy} className="text-sm text-indigo-600 hover:underline">
                📋 Sao chép HTML
              </button>
            </div>
            {view === "html" ? (
              <pre className="result-box overflow-auto text-sm" style={{ minHeight: "350px" }}>
                {output || "HTML sẽ hiển thị ở đây..."}
              </pre>
            ) : (
              <div
                className="prose prose-sm dark:prose-invert result-box overflow-auto"
                style={{ minHeight: "350px" }}
                dangerouslySetInnerHTML={{ __html: output }}
              />
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
