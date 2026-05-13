"use client";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}

export default function AdBanner({ slot = "YOUR_AD_SLOT_ID", format = "auto", className = "" }: AdBannerProps) {
  return (
    <div className={`ad-container my-6 flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900 ${className}`}>
      <div className="text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
        <p className="mt-2 text-xs text-gray-400">
          Quảng cáo — Thay thế bằng mã AdSense thật của bạn
        </p>
      </div>
    </div>
  );
}
