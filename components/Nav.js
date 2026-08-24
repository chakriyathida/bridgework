"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession, signOut, subscribe } from "@/lib/store";

function initials(name) {
  return String(name || "?")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Nav() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const sync = () => setUser(getSession());
    sync();
    setReady(true);
    return subscribe(sync);
  }, []);

  const is = (p) => (path === p || path.startsWith(p + "/") ? "navlink active" : "navlink");

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <svg className="logo-mark" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 17h20" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M4 17V9m16 8V9" stroke="var(--brand)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M4 11c4-4 12-4 16 0" stroke="var(--brand)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M9 17v-3.4M15 17v-3.4" stroke="var(--brand)" strokeWidth="1.7" strokeLinecap="round" fill="none" />
          </svg>
          Bridgework
        </Link>

        <Link href="/student" className={is("/student")}>
          Learn
        </Link>
        <Link href="/careers" className={is("/careers")}>
          Careers
        </Link>
        {user?.role === "instructor" && (
          <Link href="/instructor" className={is("/instructor")}>
            Publish
          </Link>
        )}

        {ready && user ? (
          <div className="whoami">
            <span className="avatar">{initials(user.name)}</span>
            <span>{user.name}</span>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                signOut();
                router.push("/");
              }}
            >
              Sign out
            </button>
          </div>
        ) : ready ? (
          <Link href="/login" className="btn btn-primary btn-sm">
            Sign in
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
