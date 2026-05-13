import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white">
                T
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ToolBox<span className="text-indigo-500">.online</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Bộ công cụ online miễn phí giúp bạn làm việc hiệu quả hơn mỗi ngày.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Công cụ văn bản</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/tools/word-counter" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Đếm từ</Link></li>
              <li><Link href="/tools/case-converter" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Chuyển đổi chữ hoa/thường</Link></li>
              <li><Link href="/tools/lorem-ipsum" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Lorem Ipsum Generator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Công cụ lập trình</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/tools/json-formatter" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">JSON Formatter</Link></li>
              <li><Link href="/tools/base64" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Base64 Encode/Decode</Link></li>
              <li><Link href="/tools/hash-generator" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Hash Generator</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Công cụ tạo</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/tools/qr-code" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">QR Code Generator</Link></li>
              <li><Link href="/tools/password-generator" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Tạo mật khẩu</Link></li>
              <li><Link href="/tools/color-converter" className="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400">Chuyển đổi màu sắc</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2026 ToolBox.online — Công cụ miễn phí cho mọi người
          </p>
        </div>
      </div>
    </footer>
  );
}
