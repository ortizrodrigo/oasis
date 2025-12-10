import "@/sections/Flavors/Flavors.css";
import { FlavorCard } from "@/components";
import { flavors } from "@/data/flavors";

function Flavors() {
  return (
    <section id="flavors" className="flavors">
      <h3 className="flavors__tag">Our Collection</h3>
      <h2 className="flavors__title">Three Refreshing Flavors</h2>
      <p className="flavors__subtitle">
        Each flavor is crafted with premium organic fruits and sparkling perfection. Find your new
        favorite.
      </p>
      <div className="flavors__cards">
        {flavors.map((flavor) => (
          <FlavorCard key={flavor.id} {...flavor} />
        ))}
      </div>
    </section>
  );
}

export default Flavors;
