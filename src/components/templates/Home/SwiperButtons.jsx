import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

function SwiperButtons({ swiperRef }) {
  const goPrevSlide = () => swiperRef.current.slidePrev();
  const goNextSlide = () => swiperRef.current.slideNext();

  return (
    <div className="hidden lg:block">
      <button
        onClick={goPrevSlide}
        className="size-8 absolute right-2 top-0 bottom-0 m-auto z-10 text-secondary-700"
      >
        <ArrowRight2 />
      </button>

      <button
        onClick={goNextSlide}
        className="size-8 absolute left-2 top-0 bottom-0 m-auto z-10 text-secondary-700"
      >
        <ArrowLeft2 />
      </button>
    </div>
  );
}

export default SwiperButtons;
