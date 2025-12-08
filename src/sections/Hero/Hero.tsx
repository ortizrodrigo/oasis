import "./Hero.css";

function Hero() {
  const titleFirstHalf = "Taste the";
  const titleSecondHalf = "Real Fruit";

  const renderAnimatedText = (text: string, delayOffset = 0) =>
    text.split("").map((letter, index) => {
      if (letter === " ") return <span key={index}> </span>;

      return (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${(index + delayOffset) * 0.1}s` }}
        >
          {letter}
        </span>
      );
    });

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          <div className="hero__title--first">{renderAnimatedText(titleFirstHalf)}</div>
          <div className="hero__title--second">
            {renderAnimatedText(titleSecondHalf, titleFirstHalf.length)}
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
