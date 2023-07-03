import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function ThemeButton() {
    const handleToggleTheme = () => {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        onClick={handleToggleTheme}
      >
        {resolvedTheme === "dark" ? (
          <Image src="/light-on.png" width={35} height={35} alt="Dark mode" />
        ) : (
          <Image src="/light-off.png" width={35} height={35} alt="Light mode" />
        )}
      </button>
    );
  }

  return (
    <header className="border-b dark:border-darkBlue bg-white  dark:bg-darkBlue">
      <nav className="flex justify-between px-10 items-center ">
        <Link href="/" className="py-5 pl-8">
          <h1 className="font-bold text-lg"> Where in the world?</h1>
        </Link>
        {mounted && <ThemeButton />}
      </nav>
    </header>
  );
}

export default Header;
