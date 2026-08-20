import { Link } from "react-router";

import { Buildings, SecuritySafe } from "iconsax-reactjs";

import Youtube from "@/assets/images/yotube.png";
import WhatsApp from "@/assets/images/whatsapp.png";
import Telegam from "@/assets/images/telegram.png";
import Instagram from "@/assets/images/instagram.png";
import eNamad from "@/assets/images/homepage/eNamad.jpg";
import union from "@/assets/images/homepage/union.jpg";
import samandehi from "@/assets/images/homepage/samandehi.jpg";
import AccordionWrapper from "../../ui/Accordion/AccordionWrapper";
import Newsletter from "./Newsletter";
import Loadmore from "../../ui/Loadmore";
import footerLinks from "@/constants/footer";
import FooterLinksCol from "./FooterLinksCol";
import AccordionLinksCol from "./AccordionLinksCol";

function Footer() {
  return (
    <footer className="relative bg-secondary-700 pt-7.5 pb-11.75 lg:pb-4 lg:pt-18 mt-30">
      <div className="container">
        <div
          id="primary"
          className="flex justify-between flex-col lg:flex-row-reverse gap-10 mb-22"
        >
          <div
            id="off-newsletter"
            className="text-white text-center font-IRANSansX-Bold text-sm"
          >
            <p className="mb-4">
              برای دریافت تخفیف های بیشتر ما را دنبال کنید!
            </p>
            <div className="flex-center gap-8 *:size-10">
              <Link to="https://www.youtube.com/fitland" target="_blank">
                <img src={Youtube} alt="youtube-link" />
              </Link>
              <Link to="https://wa.me/989121234567" target="_blank">
                <img src={WhatsApp} alt="whatsApp" />
              </Link>
              <Link to="https://t.me/fitland" target="_blank">
                <img src={Telegam} alt="telegram" />
              </Link>
              <Link to="https://www.instagram.com/fitland" target="_blank">
                <img src={Instagram} alt="instagram" />
              </Link>
            </div>
            <Newsletter />
          </div>

          <AccordionWrapper hasSeparator customClass="space-y-6 lg:hidden">
            {footerLinks.map((linksCol) => (
              <AccordionLinksCol key={linksCol.id} {...linksCol} />
            ))}
          </AccordionWrapper>

          <div className="hidden lg:flex-between gap-10 lg:gap-6 *:font-IRANSansX-Medium">
            {footerLinks.map((linksCol) => (
              <FooterLinksCol key={linksCol.id} {...linksCol} />
            ))}
          </div>
        </div>

        <div
          id="secondary"
          className="flex flex-col lg:flex-row lg:justify-between gap-10"
        >
          <Loadmore title="فروشگاه اینترنتی فیت‌لند" customClass="md:hidden">
            فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای
            آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال،
            فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات
            سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با
            مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند
            دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات
            خود را با 7 روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی،
            با سریع ترین روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار
            می دهد.
          </Loadmore>

          <div className="hidden md:block lg:max-w-148 xl:max-w-162.5">
            <span className="font-IRANSansX-Medium text-sm text-white">
              فروشگاه اینترنتی فیت‌لند
            </span>
            <p className="mt-4 font-IRANSansX-Regular text-xs text-f9f9f9 leading-5.5 overflow-hidden">
              فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای
              آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم
              فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و
              تجهیزات سفر، از برند های معتبر دنیا در محیطی کاربرپسند، قابل
              اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می کند.
              فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می
              باشد و تمامی محصولات خود را با 7 روز ضمانت بازگشت همراه با گارانتی
              اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در
              اختیار مشتریان خود قرار می دهد.
            </p>
          </div>

          <div className="text-center">
            <div className="flex-center gap-6 mb-6">
              <Link to="https://enamad.ir/" target="_blank">
                <img src={eNamad} alt="" />
              </Link>
              <Link to="https://samandehi.ir/" target="_blank">
                <img src={samandehi} alt="" />
              </Link>
              <Link to="https://ecunion.ir/" target="_blank">
                <img src={union} alt="" />
              </Link>
            </div>

            <span className="text-xs text-f9f9f9 font-IRANSansX-Regular">
              یک هفته ضمانت بازگشت ✍
            </span>
          </div>
        </div>
        <div
          id="privacy"
          className="text-adadad font-IRANSansX-Medium text-[10px] *:flex *:gap-1 flex items-center flex-col lg:flex-row lg:justify-between gap-6 mt-8 lg:mt-12 pt-3 lg:pt-4"
        >
          <div className="text-center">
            <SecuritySafe size={14} />
            <span>
              تمامی حقوق مادی و معنوی این وب‌سایت برای مجموعه فیت‌لند محفوظ
              می‌باشد.
            </span>
          </div>

          <div>
            <Buildings size={14} />
            <div className="flex-ic gap-1 text-center">
              توسعه داده شده توسط علی اخوان با 🧡
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
