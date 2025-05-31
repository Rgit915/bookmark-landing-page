import illustrationHero from "../assets/images/illustration-hero.svg";
import blueRectangle from "../assets/images/Rectangle.png";
const Hero = () => {
  return (
    <section className="hero-container flex flex-col justify-center items-center gap-8 px-2 py-6 my-10">
      <div className="realtive">
        {/* Rectangle background image */}
        <img
          src={blueRectangle}
          alt="Blue rectangle image"
          className="absolute translate-y-1/5 translate-x-1/5 -z-10 max-w-[577px] w-full h-[203px]"
        />
        <img src={illustrationHero} alt="screen illustration" />
      </div>
      <article className="flex flex-col gap-4">
        <h1 className="font-medium text-3xl text-center text-neutral-blue-950 my-6">
          A Simple Bookmark Manager
        </h1>
        <p className="font-normal text-sm text-center text-neutral-blue-950/50">
          {" "}
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-around gap-2 font-medium text-[15px] text-center">
          <button className="bg-primary-blue-600 text-white px-3 py-2 rounded shadow-[0px_8px_8px_-4px_hsla(231_58%_55%_0.05)]">
            {" "}
            Get it on Chrome
          </button>
          <button className="bg-neutral-grey-50 text-neutral-blue-950 px-3 py-2 rounded shadow-[0px_8px_8px_-4px_hsla(231_58%_55%_0.05)]">
            Get it on Firefox
          </button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
