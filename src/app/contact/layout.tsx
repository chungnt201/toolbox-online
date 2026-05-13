import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ToolBox Online. Questions, suggestions, or feedback — we'd love to hear from you.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
