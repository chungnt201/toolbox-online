import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR Code Generator — Tạo mã QR miễn phí online",
  description:
    "Tạo mã QR miễn phí từ URL, văn bản, số điện thoại. Tùy chỉnh màu sắc, kích thước. Tải về PNG. Không cần đăng ký.",
  keywords: ["qr code generator", "tạo mã qr", "qr code online", "qr code maker"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
