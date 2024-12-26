import "./WhatItIs.scss";

import Gallery from "@components/gallery/Gallery";

function WhatItIs() {
  return (
    <section className="wii" id="what-it-is">
      <h1 className="header">Dane osobowe – co to właściwie jest?</h1>
      <p className="sidet wii__side-text">
        Dane osobowe to informacje, które pozwalają rozpoznać konkretną osobę,
        takie jak imię, nazwisko, numer telefonu czy adres e-mail. Ochrona tych
        danych jest ważna, aby zapobiec ich niewłaściwemu wykorzystaniu i
        naruszeniu prywatności.
      </p>
      {/* GALLERY :) */}
      <Gallery />
    </section>
  );
}

export default WhatItIs;
