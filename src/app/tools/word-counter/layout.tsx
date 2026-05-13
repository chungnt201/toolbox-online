import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đếm từ & ký tự online — Word Counter",
  description:
    "Công cụ đếm từ, ký tự, câu, đoạn văn miễn phí. Ước tính thời gian đọc. Hỗ trợ tiếng Việt. Sử dụng ngay trên trình duyệt.",
  keywords: ["đếm từ", "word counter", "character counter", "đếm ký tự online"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
