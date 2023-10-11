import Link from "next/link";
import classes from "@/components/Header/Header.module.css";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/posts", label: "Posts" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link href={item.href} key={item.href} className={classes.anchor}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
