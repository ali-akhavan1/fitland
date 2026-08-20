import { Link } from "react-router";

import { ArrowDown2, User } from "iconsax-reactjs";

function ProfileButton() {
  return (
    <Link
      to="/auth"
      className="hidden lg:flex-between gap-2 p-3 text-404040 bg-white rounded-xl shadow-[0_0_10px_4px_rgba(0,0,0,0.06)]"
    >
      <>
        <span>ورود | ثبت‌نام</span>
        <User />
      </>

      {/* <>
          <User />
          <ArrowDown2 size={16} color="#FA541C" />
        </> */}
    </Link>
  );
}

export default ProfileButton;
