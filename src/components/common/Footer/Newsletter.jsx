import { Sms } from "iconsax-reactjs";

function Newsletter() {
  return (
    <div className="text-start mt-8">
      <form action="">
        <label className="font-IRANSansX-Bold text-sm block mb-2" htmlFor="">
          خبرنامه فیت‌لند
        </label>
        <div className="flex-between px-2 border border-868686 rounded-small">
          <div className="w-7/10 flex-ic gap-2.5 text-868686">
            <Sms className="shrink-0" size={17} />
            <input
              autoComplete="off"
              className="w-full font-IRANSansX-Regular text-xs py-2.5"
              type="text"
              placeholder="ایمیل خود را وارد کنید..."
            />
          </div>
          <button className="w-12.5 h-6 shrink-0 bg-primary rounded-sm font-IRANSansX-Medium text-sm">
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
