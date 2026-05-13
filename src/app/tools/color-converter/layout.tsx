import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chuyển đổi màu sắc — Color Converter HEX RGB HSL",
  description:
    "Chuyển đổi giữa HEX, RGB, HSL miễn phí. Color picker trực quan. Sao chép CSS nhanh chóng.",
  keywords: ["color converter", "hex to rgb", "rgb to hsl", "chuyển đổi màu sắc", "color picker"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
