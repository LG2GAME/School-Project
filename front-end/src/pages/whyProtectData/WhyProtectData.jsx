import "./WhyProtectData.scss";
import { ListItem as Item } from "@components/listItem/ListItem";
import WPDData from "@data/WhyProtectData.json"; // dane z pliku JSON

function WhyProtectData() {
  return (
    <section className="wpd">
      <h1 className="header">Po co chronić swoje dane?</h1>
      <section className="wpd__list">
        {WPDData.map((item, index) => {
          return (
            <Item
              key={index}
              icon={item.icon} // przekazujesz nazwę ikony
              title={item.title}
              content={item.content}
            />
          );
        })}
      </section>
    </section>
  );
}

export default WhyProtectData;
