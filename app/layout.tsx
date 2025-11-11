import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "거성 국제 결혼 - 베트남, 몽골 국제결혼 전문 | 20년 전통",
  description: "2004년 설립, 20년 경력의 국제결혼 전문 업체. 사전 매칭 시스템으로 신중한 만남. 베트남·몽골 현지 직영 사무소 운영. 400+ 성혼 실적.",
  keywords: ["거성국제결혼", "국제결혼", "베트남결혼", "몽골결혼", "사전매칭", "국제결혼업체", "결혼중개"],
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
