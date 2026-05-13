import Link from "next/link";
import AdBanner from "@/components/AdBanner";

const tools = [
  {
    category: "Công cụ tạo nội dung",
    id: "generator-tools",
    items: [
      {
        name: "QR Code Generator",
        description: "Tạo mã QR từ văn bản, URL, số điện thoại hoặc bất kỳ nội dung nào",
        href: "/tools/qr-code",
        icon: "📱",
        color: "from-violet-500 to-purple-600",
      },
      {
        name: "Tạo mật khẩu mạnh",
        description: "Tạo mật khẩu ngẫu nhiên, an toàn với độ dài và ký tự tùy chỉnh",
        href: "/tools/password-generator",
        icon: "🔐",
        color: "from-emerald-500 to-teal-600",
      },
      {
        name: "Lorem Ipsum Generator",
        description: "Tạo văn bản giả Lorem Ipsum cho thiết kế và phát triển web",
        href: "/tools/lorem-ipsum",
        icon: "📝",
        color: "from-amber-500 to-orange-600",
      },
    ],
  },
  {
    category: "Công cụ văn bản",
    id: "text-tools",
    items: [
      {
        name: "Đếm từ & ký tự",
        description: "Đếm số từ, ký tự, câu, đoạn văn và thời gian đọc",
        href: "/tools/word-counter",
        icon: "🔤",
        color: "from-blue-500 to-cyan-600",
      },
      {
        name: "Chuyển đổi chữ hoa/thường",
        description: "Chuyển văn bản sang UPPERCASE, lowercase, Title Case, camelCase...",
        href: "/tools/case-converter",
        icon: "🔠",
        color: "from-pink-500 to-rose-600",
      },
      {
        name: "Markdown → HTML",
        description: "Chuyển đổi Markdown sang HTML với xem trước trực tiếp",
        href: "/tools/markdown-to-html",
        icon: "📄",
        color: "from-slate-500 to-gray-600",
      },
    ],
  },
  {
    category: "Công cụ lập trình",
    id: "dev-tools",
    items: [
      {
        name: "JSON Formatter",
        description: "Định dạng, xác thực và làm đẹp JSON với highlight cú pháp",
        href: "/tools/json-formatter",
        icon: "{ }",
        color: "from-yellow-500 to-amber-600",
      },
      {
        name: "Base64 Encode/Decode",
        description: "Mã hóa và giải mã Base64 cho văn bản và dữ liệu",
        href: "/tools/base64",
        icon: "🔄",
        color: "from-indigo-500 to-blue-600",
      },
      {
        name: "Hash Generator",
        description: "Tạo hash MD5, SHA-1, SHA-256, SHA-512 từ văn bản",
        href: "/tools/hash-generator",
        icon: "#️⃣",
        color: "from-red-500 to-rose-600",
      },
      {
        name: "Chuyển đổi màu sắc",
        description: "Chuyển đổi giữa HEX, RGB, HSL với color picker trực quan",
        href: "/tools/color-converter",
        icon: "🎨",
        color: "from-fuchsia-500 to-pink-600",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          Bộ công cụ online{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            miễn phí
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
          Hơn 10 công cụ hữu ích giúp bạn làm việc hiệu quả hơn.
          Không cần cài đặt, sử dụng ngay trên trình duyệt.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#generator-tools"
            className="btn-primary"
          >
            Khám phá ngay
          </a>
        </div>
      </div>

      <AdBanner format="horizontal" />

      {/* Tool Categories */}
      {tools.map((category) => (
        <section key={category.id} id={category.id} className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            {category.category}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.items.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} text-xl text-white shadow-sm`}
                >
                  {tool.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {tool.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Sử dụng ngay
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <AdBanner format="rectangle" />

      {/* SEO Content */}
      <section className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:from-indigo-950/20 dark:to-purple-950/20 sm:p-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Tại sao chọn ToolBox Online?
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <div className="mb-2 text-3xl">⚡</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Nhanh & Miễn phí</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Tất cả công cụ hoàn toàn miễn phí, chạy trực tiếp trên trình duyệt — không cần đăng ký tài khoản.
            </p>
          </div>
          <div>
            <div className="mb-2 text-3xl">🔒</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">An toàn & Riêng tư</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Dữ liệu được xử lý hoàn toàn trên thiết bị của bạn. Chúng tôi không lưu trữ bất kỳ thông tin nào.
            </p>
          </div>
          <div>
            <div className="mb-2 text-3xl">📱</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Mọi thiết bị</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Giao diện responsive hoạt động hoàn hảo trên máy tính, tablet và điện thoại.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
