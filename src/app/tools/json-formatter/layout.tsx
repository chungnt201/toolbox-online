import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator — Định dạng JSON online",
  description:
    "Định dạng, xác thực và nén JSON miễn phí online. Hỗ trợ format, minify, validate với tùy chỉnh indent.",
  keywords: ["json formatter", "json validator", "json beautifier", "json minifier", "format json online"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
