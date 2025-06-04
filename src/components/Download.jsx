import chromeLogo from "../assets/images/logo-chrome.svg";
import firefoxLogo from "../assets/images/logo-firefox.svg";
import operaLogo from "../assets/images/logo-opera.svg";
import dots from "../assets/images/bg-dots.svg";

const cards = [
  {
    logo: chromeLogo,
    title: "Add to Chrome",
    version: "62",
    alt: "chrome logo",
    marginTop: "lg:mt-0",
  },
  {
    logo: firefoxLogo,
    title: "Add to Firefox",
    version: "65",
    alt: "firefox logo",
    marginTop: "lg:mt-8",
  },
  {
    logo: operaLogo,
    title: "Add to Opera",
    version: "46",
    alt: "opera logo",
    marginTop: "lg:mt-16",
  },
];

const Download = () => {
  return (
    <section className="download-container flex flex-col justify-center items-center gap-8 my-12 mx-4">
      <article className="text-center max-w-xl">
        <h2>
          Download the extension
        </h2>
        <p className="font-normal text-[15px] text-neutral-blue-950/50 p-4">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </article>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {cards.map((card, index) => (
          <article
            key={index}
            className={`card flex flex-col items-center text-center gap-4 ${card.marginTop}`}
          >
            <img src={card.logo} alt={card.alt} />
            <h3>
              {card.title}
            </h3>
            <span className="font-normal text-[15px] text-neutral-blue-950/50">
              Minimum version {card.version}
            </span>
            <img src={dots} alt="background dots" />
            <button className="py-2 px-8 rounded-md bg-primary-blue-600 text-white font-medium text-[15px] shadow">
              Add & Install Extension
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Download;
