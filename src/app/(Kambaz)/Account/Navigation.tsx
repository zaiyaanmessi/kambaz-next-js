"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AccountNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Signin", path: "/Account/Signin" },
    { label: "Signup", path: "/Account/Signup" },
    { label: "Profile", path: "/Account/Profile" }
  ];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <div key={link.label}>
          <Link
            href={link.path}
            id={`wd-account-${link.label.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              pathname.includes(link.label)
                ? "text-black border-start border-dark border-3"
                : "text-danger"
            }`}
          >
            {link.label}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}