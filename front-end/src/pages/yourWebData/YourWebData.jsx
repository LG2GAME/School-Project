import "./YourWebData.scss";

import YWDData from "@data/YourWebDataData.json";
import { LayoutItem as Item } from "@components/layoutItem/LayoutItem";

function YourWebData() {
  return (
    <section className="ywd" id="security">
      <h1 className="header">Twoje dane w sieci – jak je zabezpieczyć?</h1>
      <div className="ywd__layout">
        {YWDData.map((item, index) => {
          return (
            <Item
              key={index}
              icon={item.icon}
              header={item.header}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default YourWebData;
