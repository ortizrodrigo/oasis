import "./AnimatedText.css";

interface AnimatedTextProps {
  text: string;
  delayOffset?: number;
}

function AnimatedText({ text, delayOffset = 0 }: AnimatedTextProps) {
  return (
    <>
      {text.split("").map((letter, index) => {
        if (letter === " ") return <span key={index}> </span>;

        return (
          <span
            key={index}
            className='animated-letter'
            style={{ animationDelay: `${(index + delayOffset) * 0.1}s` }}
          >
            {letter}
          </span>
        );
      })}
    </>
  );
}

export default AnimatedText;
