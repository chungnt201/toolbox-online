import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encode/Decode — Mã hóa giải mã Base64 online",
  description:
    "Mã hóa và giải mã Base64 miễn phí online. Hỗ trợ Unicode và tiếng Việt. Không cần cài đặt phần mềm.",
  keywords: ["base64 encode", "base64 decode", "base64 online", "mã hóa base64"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
