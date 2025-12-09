import "@/sections/Hero/Hero.css";
import { AnimatedText } from "@/components";

function Hero() {
  const titleTasteThe = "Taste the";
  const titleReal = "Real ";
  const titleFruit = "Fruit";

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <div className="hero__title--first">
            <AnimatedText text={titleTasteThe} />
          </div>
          <div className="hero__title--second">
            <span className="hero__title--real">
              <AnimatedText
                text={titleReal}
                delayOffset={titleTasteThe.length}
              />
            </span>
            <span className="hero__title--fruit">
              <AnimatedText
                text={titleFruit}
                delayOffset={titleTasteThe.length + titleReal.length}
              />
            </span>
          </div>
        </h1>
        <p className="hero__subtitle">
          Discover our collection of sparkling fruit sodas made with real
          organic fruit. Pure refreshment in every sip.
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary">
            Explore Flavors
          </button>
          <button className="hero__btn hero__btn--secondary">Our Story</button>
        </div>
      </div>
      <div className="hero__images"></div>
    </section>
  );
}

export default Hero;
