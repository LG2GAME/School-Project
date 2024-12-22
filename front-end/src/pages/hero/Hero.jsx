import "./Hero.scss";

import ClickIMG from "@assets/click.svg";
// import MeshGradIMG from "@assets/mesh-grad.svg";

function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="header">
        <span>&quot;</span>Bezpieczeństwo Danych To Podstawa
      </h1>
      <p className="sidet">
        Dowiedz się, jak skutecznie chronić swoje dane osobowe w cyfrowym
        świecie.
        <br /> Proste porady i narzędzia, które pomogą Ci zachować kontrolę nad
        swoją prywatnością.
      </p>
      <img src={ClickIMG} alt="" className="hero__image" />
    </section>
  );
}

export default Hero;
