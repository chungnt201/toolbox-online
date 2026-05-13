import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chuyển đổi chữ hoa thường — Case Converter",
  description:
    "Chuyển đổi văn bản sang UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case miễn phí online.",
  keywords: ["case converter", "chuyển đổi chữ hoa thường", "uppercase lowercase", "title case"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
