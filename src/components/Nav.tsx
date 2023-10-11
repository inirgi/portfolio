import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import React from "react";

export type NavItem = {
  id: string;
  name: string;
  href: string;
  static?: boolean;
};

export type NavProps = {
  items: NavItem[];
};

export default function Nav({ items }: NavProps) {
  const location = useLocation();

  const itemActive = React.useMemo(() => {
    return items.find((item) => item.href === location.pathname);
  }, [items, location.pathname]);

  return (
    <nav className="px-12 py-3 xl:px-32 flex justify-center bg-blackLight">
      <ul className="flex items-center list-none gap-12 xl:gap-16">
        {items.map((item) => (
          <li key={item.id} className="text-center p-1">
            {item.static ? (
              <a href={item.href} target="_blank" className="text-white p-2">
                {item.name}
              </a>
            ) : (
              <Link
                to={item.href}
                className={clsx(
                  "text-white p-2",
                  itemActive &&
                    item.id === itemActive.id &&
                    "underline decoration-orangePink underline-offset-4"
                )}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
