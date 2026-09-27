import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteLink({
  to,
  className,
  children,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link to={to as never} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
