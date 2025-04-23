import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

/**
 * tailwind
 * antialiased: 폰트에 대해 안티앨리어싱 기능을 제공하는 CSS Property
 * 텍스트에 회색조 안티앨리어싱 적용. 텍스트의 가장자리를 부드럽게 만들어 화면에서 글자가 더 매끄럽고 덜 거칠게 보임
 * 
 * subpixel-antialiased: 일부 환경에서 더 선명하게 보일 수 있음
 */

/**
 * 모든 페이지에 적용되는 root layout
 * 일반적으로 html, body 태그 등의 구조 명시. head, meta 태그 등을 모든 페이지에 일괄적으로 적용해주고 싶을 때
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
