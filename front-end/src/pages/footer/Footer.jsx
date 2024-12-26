import { ListItem as Item } from "@components/listItem/ListItem";

import "./Footer.scss";

import FData from "@data/FooterData.json";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__list">
        {FData.map((item, index) => {
          return (
            <Item
              key={index}
              icon={item.icon}
              header={item.header}
              description={item.description}
            />
          );
        })}
      </section>
    </footer>
  );
}

export default Footer;
