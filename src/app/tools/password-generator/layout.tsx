import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tạo mật khẩu mạnh — Password Generator",
  description:
    "Tạo mật khẩu ngẫu nhiên, an toàn miễn phí. Tùy chỉnh độ dài, ký tự. Mật khẩu được tạo hoàn toàn trên thiết bị của bạn.",
  keywords: ["tạo mật khẩu", "password generator", "strong password", "random password"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
