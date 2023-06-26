import Image from "next/image";


function Header() {
  return (
    <header className="border-b">
      <nav className="flex justify-between pl-10 pr-10 items-center m-4 ">
        <div>
          <h1 className="font-bold text-lg"> Where in the world?</h1>
        </div>
        <div className="flex flex-row items-center  gap-1">
          <Image
            src="/dark-mode.png"
            width={35}
            height={35}
            alt="Dark mode"
          />
          <span className="justify-items-center">Dark Mode</span>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
