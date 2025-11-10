import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "국제결혼정보센터 - 베트남, 몽골 국제결혼 전문",
  description: "13년 경력의 국제결혼 전문 업체. 베트남, 몽골 현지 직영 사무소 운영. 투명한 비용, 체계적인 진행, 철저한 사후관리",
  keywords: ["국제결혼", "베트남결혼", "몽골결혼", "국제결혼업체", "결혼중개"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
