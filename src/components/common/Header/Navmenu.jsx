import { useContext } from "react";
import { Link } from "react-router";

import { ArrowLeft2, CloseSquare, User } from "iconsax-reactjs";

import Logo from "../../../../public/svg/app-logo.svg";
import menus from "@/constants/navmenu";
import NavmenuItem from "./NavmenuItem";
import { AuthContext } from "@/context/Auth";

function Navmenu({ onToggle, isOpen }) {
  const { user, isLoading } = useContext(AuthContext);

  return (
    <div className="lg:hidden text-neutral-black">
      <div
        className={`w-[256px] fixed top-0 bottom-0 right-0 z-50 ${isOpen ? "" : "translate-x-full"} transition-all bg-white py-3 px-4`}
      >
        <header className="flex flex-col gap-10 border-b border-cbcbcb pb-7">
          <div className="w-full flex-between">
            <Link to="/">
              <img className="w-28" src={Logo} alt="logo" />
              <span className="text-[10px] text-868686 mt-2 select-none">
                فروشگاه لوازم ورزشی فیت‌لند
              </span>
            </Link>
            <button onClick={onToggle}>
              <CloseSquare />
            </button>
          </div>

          <Link to={user ? "/dashboard" : "/auth"} className="flex-between">
            <div className="flex-ic gap-3">
              <span className="bg-ededed flex-center size-12 rounded-full">
                <User />
              </span>
              {!isLoading && user ? (
                <div className="h-12 flex flex-col justify-between">
                  <span className="text-sm line-clamp-1">{user.fullName}</span>
                  <span className="text-xs">{user.mobile}</span>
                </div>
              ) : (
                <span>ورود | ثبت‌نام</span>
              )}
            </div>

            <ArrowLeft2 size={20} />
          </Link>
        </header>

        <main className="pt-5">
          <ul className="space-y-4">
            {menus.map((menu) => (
              <NavmenuItem key={menu.id} {...menu} />
            ))}
          </ul>
        </main>
      </div>

      <div
        onClick={onToggle}
        id="overlay"
        className={`fixed inset-0 z-10 ${!isOpen ? "invisible opacity-0" : ""} transition-all backdrop-blur-[2px] bg-[rgba(0,0,0,0.4)]`}
      ></div>
    </div>
  );
}

export default Navmenu;
