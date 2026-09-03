import {
  Link,
  Outlet,
  useLocation,
  useMatches,
  useNavigate,
} from "react-router";

import { ArrowRight2, Home } from "iconsax-reactjs";

import Logo from "../../public/svg/app-logo.svg";
import Abstract1 from "../../src/assets/images/auth/auth-abstract.png";
import Abstract2 from "../../src/assets/images/auth/auth-abstract2.png";
import defaultCover from "@/assets/images/auth/login.jpg";
import otpCover from "@/assets/images/auth/otp.jpg";
import registerCover from "@/assets/images/auth/register.jpg";
import useAuth from "@/features/auth/hooks/useAuth";
import Close from "@/components/ui/Icon/Close";

function AuthLayout() {
  const matches = useMatches();
  const match = matches.find((match) => match.handle?.stage);
  const stage = match?.handle.stage;
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const goBack = () => {
    const isRegisterPath = location.pathname.includes("register");
    isRegisterPath ? auth.resetRegister() : auth.resetLogin();
    navigate(-1, { replace: true });
  };

  return (
    <div className="lg:grid grid-cols-2 h-screen">
      <main className="w-full h-full flex-ic flex-col lg:flex-center relative overflow-hidden px-4 pt-5">
        <div className="lg:hidden w-full flex-between text-[#717171]">
          <button onClick={goBack}>
            <ArrowRight2 />
          </button>

          <Link to="/">
            <Close size={24} />
          </Link>
        </div>

        <Link
          to="/"
          className={`lg:hidden text-center ${stage === "register" ? "mt-6" : "mt-27"} mb-6`}
        >
          <div className="mb-2">
            <img src={Logo} alt="" />
          </div>
          <span className="text-xs text-868686">
            فروشگاه لوازم ورزشی فیت‌لند
          </span>
        </Link>

        <Outlet context={auth} />

        <img
          src={Abstract1}
          alt=""
          className="w-48.5 lg:w-77.5 absolute top-0 left-0 -z-10"
        />
        <img
          src={Abstract2}
          alt=""
          className="w-41.75 lg:w-77.5 absolute bottom-0 right-0 -z-10"
        />
      </main>

      <div className="relative hidden lg:flex-center flex-col gap-6 bg-linear-[to_top,rgba(0,0,0,0.8),rgba(0,0,0,0.8)] bg-center bg-no-repeat">
        <img
          src={
            !stage ? defaultCover : stage === "otp" ? otpCover : registerCover
          }
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
