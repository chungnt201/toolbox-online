"use client";

import { useState, useRef } from "react";
import QRCode from "qrcode";
import ToolLayout from "@/components/ToolLayout";

export default function QRCodePage() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [size, setSize] = useState(300);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async () => {
    if (!text.trim()) return;
    try {
      const url = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        color: { dark: fgColor, light: bgColor },
      });
      setQrUrl(url);
    } catch {
      alert("Không thể tạo QR Code. Vui lòng kiểm tra lại nội dung.");
    }
  };

  const downloadQR = () => {
    if (!qrUrl) return;
    const link = document.createElement("a");
    link.download = `qrcode-${Date.now()}.png`;
    link.href = qrUrl;
    link.click();
  };

  return (
    <ToolLayout
      title="QR Code Generator"
      description="Tạo mã QR miễn phí từ văn bản, URL, số điện thoại hoặc bất kỳ nội dung nào. Tải về dưới dạng PNG."
    >
      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nội dung
          </label>
          <textarea
            className="tool-input tool-textarea"
            placeholder="Nhập URL, văn bản, số điện thoại..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Kích thước (px)
            </label>
            <input
              type="number"
              className="tool-input"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={100}
              max={1000}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Màu QR
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded border"
              />
              <input
                type="text"
                className="tool-input"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Màu nền
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-10 w-10 cursor-pointer rounded border"
              />
              <input
                type="text"
                className="tool-input"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="btn-primary" onClick={generateQR}>
            Tạo QR Code
          </button>
          {qrUrl && (
            <button className="btn-secondary" onClick={downloadQR}>
              ⬇ Tải về PNG
            </button>
          )}
        </div>

        {qrUrl && (
          <div className="flex flex-col items-center gap-4 rounded-xl bg-gray-50 p-8 dark:bg-gray-800">
            <img src={qrUrl} alt="QR Code" className="rounded-lg shadow-md" />
            <canvas ref={canvasRef} className="hidden" />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
