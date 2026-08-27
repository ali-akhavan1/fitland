import { Link, Outlet, useMatches } from "react-router";

import { Home } from "iconsax-reactjs";

import Logo from "../../public/svg/app-logo.svg";
import Abstract1 from "../../src/assets/images/auth/auth-abstract.png";
import Abstract2 from "../../src/assets/images/auth/auth-abstract2.png";
import defaultCover from "@/assets/images/auth/login.png";
import otpCover from "@/assets/images/auth/otp.jpg";
import registerCover from "@/assets/images/auth/register.png";

function AuthLayout() {
  const matches = useMatches();
  const match = matches.find((match) => match.handle?.stage);
  const stage = match?.handle.stage;
  

  return (
    <div className="grid grid-cols-2 h-screen">
      <main className="w-full flex-center relative overflow-hidden">
        <Outlet />

        <img
          src={Abstract1}
          alt=""
          className="w-77.5 absolute top-0 left-0 -z-10"
        />
        <img
          src={Abstract2}
          alt=""
          className="w-77.5 absolute bottom-0 right-0 -z-10"
        />
      </main>

      <div className="relative flex-center flex-col gap-6 bg-linear-[to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.8)] bg-center bg-no-repeat">
        <img
          src={!stage ? defaultCover : stage === "otp" ? otpCover : registerCover}
          alt=""
          className="absolute w-full h-full object-cover -z-10"
        />
        <div>
          <img src={Logo} alt="" />
        </div>
        <Link
          to="/"
          className="flex-ic gap-2 text-white text-sm font-IRANSansX-Medium"
        >
          <Home />
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default AuthLayout;
