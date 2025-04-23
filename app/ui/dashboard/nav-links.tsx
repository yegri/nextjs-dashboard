'use client'
import clsx from 'clsx';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

/**
 * 전체 페이지를 리렌더링하지 않고, 필요한 부분에 한해서 페이지 전환 시에 리렌더링 하도록 하는 것이 <Link />
 * 페이지 초기 로딩 시에 모든 코드를 로드하는 전통적인 React와는 다르게, Next는 라우터별로 코드를 쪼개 필요할 때 로드
 * 페이지에 <Link/> 컴포넌트가 존재할 경우 접근 가능한 다른 페이지들에 대한 코드 로드를 미리 수행하도록 하여 페이지가 리렌더링되지 않는 것처럼 보이는 페이지 전환을 수행.
 */

/**
 * 현재 진입되어있는 path 정보를 받아와서 link 버튼이 현재 진입된 path와 같은 path를 가리키고 있는지 확인한 뒤, 스타일을 반영시켜주는 구문 추가 가능
 */
export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray', {'bg-sky-100 text-blue-600': pathname === link.href})}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
