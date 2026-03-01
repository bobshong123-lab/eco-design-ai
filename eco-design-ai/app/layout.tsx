import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "生态设计AI助手 - 自然建筑智能顾问",
  description: "基于自然建筑技术的AI咨询助手，为您提供泥土建筑、木构建筑、火与热能系统等生态设计方案",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
