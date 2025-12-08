import "./Hero.css";
import { AnimatedText } from "../../components";

function Hero() {
  const titleFirstHalf = "Taste the";
  const titleSecondHalf = "Real Fruit";

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <div className="hero__title--first">
            <AnimatedText text={titleFirstHalf} />
          </div>
          <div className="hero__title--second">
            <AnimatedText text={titleSecondHalf} delayOffset={titleFirstHalf.length} />
          </div>
        </h1>
        <p className="hero__subtitle">
          Discover our collection of sparkling fruit sodas made with real organic fruit. Pure
          refreshment in every sip.
        </p>
      </div>
      <div className="hero__images"></div>
    </section>
  );
}

export default Hero;
