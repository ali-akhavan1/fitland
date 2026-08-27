import { useContext } from "react";
import { Link } from "react-router";

import { ArrowDown2, User } from "iconsax-reactjs";

import { AuthContext } from "@/context/Auth";
import ProfileButtonSkelton from "@/components/ui/Skelton/ProfileButtonSkelton";

function ProfileButton() {
  const { user, isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading && <ProfileButtonSkelton />}

      {!isLoading && (
        <Link
          to={user ? "/dashboard" : "/auth"}
          className="hidden lg:flex-between gap-2 p-3 text-404040 bg-white rounded-xl shadow-[0_0_10px_4px_rgba(0,0,0,0.06)]"
        >
          {user ? (
            <>
              <User />
              <ArrowDown2 size={16} color="#FA541C" />
            </>
          ) : (
            <>
              <span>ورود | ثبت‌نام</span>
              <User />
            </>
          )}
        </Link>
      )}
    </>
  );
}

export default ProfileButton;
