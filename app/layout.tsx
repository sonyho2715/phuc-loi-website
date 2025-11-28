import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Công ty TNHH Phúc Lợi - Phân phối Xi Măng Rời Hải Phòng",
  description:
    "Nhà phân phối xi măng rời hàng đầu miền Bắc Việt Nam. Cung cấp PCB40, PCB30, PC50 cho trạm trộn bê tông tại Hải Phòng và các tỉnh lân cận. Hotline: 0969 988 888",
  keywords: [
    "xi măng rời",
    "xi măng Hải Phòng",
    "PCB40",
    "PCB30",
    "PC50",
    "trạm trộn bê tông",
    "phân phối xi măng",
    "bulk cement",
    "Phúc Lợi",
  ],
  openGraph: {
    title: "Công ty TNHH Phúc Lợi - Phân phối Xi Măng Rời",
    description:
      "Nhà phân phối xi măng rời hàng đầu miền Bắc. Hơn 20 năm kinh nghiệm. Hotline: 0969 988 888",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
