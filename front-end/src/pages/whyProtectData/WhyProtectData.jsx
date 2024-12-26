import { ListItem as Item } from "@components/listItem/ListItem";

import "./WhyProtectData.scss";

import WPDData from "@data/WhyProtectData.json";

function WhyProtectData() {
  return (
    <section className="wpd">
      <h1 className="header">Po co chronić swoje dane?</h1>
      <section className="wpd__list">
        {WPDData.map((item, index) => {
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
    </section>
  );
}

export default WhyProtectData;
