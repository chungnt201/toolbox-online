import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hash Generator — Tạo MD5 SHA-1 SHA-256 SHA-512 online",
  description:
    "Tạo hash MD5, SHA-1, SHA-256, SHA-512, SHA-3, RIPEMD-160 miễn phí. Xử lý hoàn toàn trên trình duyệt, an toàn riêng tư.",
  keywords: ["hash generator", "md5 online", "sha256 online", "sha1 hash", "tạo hash"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
