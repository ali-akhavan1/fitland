import { Link, useOutletContext } from "react-router";

import RegisterInput from "./RegisterInput";
import useRegister from "../hooks/useRegister";
import Checkbox from "@/components/ui/Checkbox";
import BackButton from "./BackButton";

function RegisterForm() {
  const { register, handleRegister, changeRegister, handleBlur } =
    useRegister();
  const { resetRegister } = useOutletContext();

  return (
    <div className="auth-form-wrapper">
      <form action="" className="space-y-8 select-none">
        <h2 className="auth-form-title">ثبت‌نام</h2>

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
            placeholer="09*********"
            handleBlur={handleBlur}
            rtl
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

      <BackButton to="/auth/login" onClick={resetRegister} />
    </div>
  );
}

export default RegisterForm;
