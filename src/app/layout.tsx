import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolBox Online — Bộ công cụ miễn phí hàng đầu",
    template: "%s | ToolBox Online",
  },
  description:
    "Hơn 10 công cụ online miễn phí: Tạo QR Code, đếm từ, tạo mật khẩu, chuyển đổi JSON, Base64, Hash, màu sắc và nhiều hơn nữa. Không cần cài đặt, sử dụng ngay trên trình duyệt.",
  keywords: [
    "công cụ online",
    "free online tools",
    "qr code generator",
    "word counter",
    "password generator",
    "json formatter",
    "base64 encoder",
    "hash generator",
    "color converter",
    "lorem ipsum generator",
  ],
  openGraph: {
    title: "ToolBox Online — Bộ công cụ miễn phí hàng đầu",
    description:
      "Hơn 10 công cụ online miễn phí. Không cần cài đặt, sử dụng ngay trên trình duyệt.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense — Thay YOUR_ADSENSE_ID bằng ID thật */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
