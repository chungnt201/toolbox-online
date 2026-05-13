import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown to HTML — Chuyển đổi Markdown sang HTML",
  description:
    "Chuyển đổi Markdown sang HTML miễn phí với xem trước trực tiếp. Hỗ trợ heading, bold, italic, link, list.",
  keywords: ["markdown to html", "markdown converter", "markdown preview", "chuyển đổi markdown"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
