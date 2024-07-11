"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/Nav/NavLink";
import { Button, LinkButton } from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";

interface GNBNavLinkProps {
  href: string;
  children: React.ReactNode;
}

const GNBLinkStyles = {
  activeStyle: "text-blue",
  inactiveStyle: "text-cool-gray-600",
  baseStyle: "font-bold text-16 tablet:w-109 tablet:text-18 tablet:text-center",
};

const GNBNavLink = ({ href, children }: GNBNavLinkProps) => {
  return (
    <NavLink
      href={href}
      activeClassName={GNBLinkStyles.activeStyle}
      inactiveClassName={GNBLinkStyles.inactiveStyle}
      className={GNBLinkStyles.baseStyle}>
      {children}
    </NavLink>
  );
};

function UserSection({
  user = null,
  logout,
}: {
  user: { image: string | null } | null;
  logout?: () => void;
}) {
  if (!user)
    return (
      <LinkButton.Secondary size="sm" href="/login" className="ml-auto h-42">
        로그인
      </LinkButton.Secondary>
    );

  return (
    <div className="flex-center ml-auto gap-16">
      <Dropdown.Primary
        buttonContent={
          <Image
            src={user.image || "/images/img_default-profile.svg"}
            width={40}
            height={40}
            alt="profile-image"
          />
        }
        position="right">
        <LinkButton href="/me">마이페이지</LinkButton>
        <Button onClick={logout}>로그아웃</Button>
      </Dropdown.Primary>
    </div>
  );
}

const HEADER_CATEGORY = [
  { name: "자유게시판", link: "/boards" },
  { name: "중고마켓", link: "/items" },
];

function Header({
  user,
  logout,
}: {
  user: { image: string | null } | null;
  logout?: () => void;
}) {
  return (
    <nav className="fixed top-0 z-20 flex h-70 w-full items-center gap-8 border-b border-gray-200 bg-white px-16 md:px-24 xl:px-200">
      <Link href="/">
        <div className="hidden md:block lg:mr-20">
          <Image
            src="/images/img_panda-logo.svg"
            alt="판다마켓"
            width={150}
            height={41}
            priority={true}
          />
        </div>
      </Link>
      <div className="mr-8 md:hidden">
        <Image
          src="/images/img_panda-logo-typo.svg"
          alt="판다마켓"
          width={81}
          height={40}
          priority={true}
        />
      </div>

      {HEADER_CATEGORY.map(({ name, link }) => (
        <GNBNavLink href={link}>{name}</GNBNavLink>
      ))}

      <UserSection user={user} logout={logout} />
    </nav>
  );
}

export default Header;
