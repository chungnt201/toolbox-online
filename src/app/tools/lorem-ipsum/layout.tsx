import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Tạo văn bản giả online",
  description:
    "Tạo văn bản Lorem Ipsum cho thiết kế và phát triển web. Tùy chỉnh số đoạn, câu hoặc từ. Miễn phí, nhanh chóng.",
  keywords: ["lorem ipsum generator", "lorem ipsum", "dummy text", "placeholder text"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
