import { Link, useOutletContext } from "react-router";

import { ArrowRight } from "iconsax-reactjs";

import RegisterInput from "./RegisterInput";
import useRegister from "../hooks/useRegister";
import Checkbox from "@/components/ui/Checkbox";

function RegisterForm() {
  const { register, handleRegister, changeRegister, handleBlur } =
    useRegister();
  const { resetRegister } = useOutletContext();

  return (
    <div className="auth-form-wrapper">
      <form action="" className="space-y-8">
        <h2 className="font-IRANSansX-DemiBold lg:font-IRANSansX-Medium text-lg lg:text-[28px]">
          ثبت‌نام
        </h2>

        <div className="text-sm space-y-8">
          <RegisterInput
            name="fullName"
            value={register.fullName}
            onChange={changeRegister}
            label="نام و نام خانوادگی *"
            placeholer="نام خود را به فارسی وارد کنید"
            handleBlur={handleBlur}
          />

          <RegisterInput
            name="mobile"
            value={register.mobile}
            onChange={changeRegister}
            label="شماره تلفن همراه *"
            placeholer="*********09"
            handleBlur={handleBlur}
          />

          <RegisterInput
            name="email"
            value={register.email}
            onChange={changeRegister}
            label="ایمیل (اختیاری)"
            type="email"
            placeholer="Example@gmail.coms"
            handleBlur={handleBlur}
          />
        </div>

        <button onClick={handleRegister} type="button" className="submit-btn">
          تایید
        </button>

        <div className="flex-ic gap-2 text-sm font-IRANSansX-Medium">
          <Checkbox
            name="acceptTerms"
            checked={register.acceptTerms}
            onChange={changeRegister}
          />
          <span>
            <Link to="/" className="text-secondary-300">
              قوانین و مقررات
            </Link>{" "}
            را خوانده و قبول دارم.
          </span>
        </div>
      </form>

      <Link
        to="/auth/login"
        className="hidden lg:flex-ic gap-2 w-fit mt-8"
        onClick={resetRegister}
      >
        <ArrowRight />
        <span className="text-lg font-IRANSansX-DemiBold text-404040">
          صفحه قبلی
        </span>
      </Link>
    </div>
  );
}

export default RegisterForm;
