import "./App.css";
import { Header, Footer } from "./layout";
import { Hero, Flavors, About } from "./sections";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Flavors />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
