import { HashLink as Link } from "react-router-hash-link";

import "./Protect.scss";
import { IoMdArrowRoundBack } from "react-icons/io";

import BPData from "@data/protectData/BasicProtectData.json";
import APData from "@data/protectData/AdvancedProtectData.json";
import EPData from "@data/protectData/ExpertProtectData.json";

const dataMap = {
  basic: BPData,
  advanced: APData,
  expert: EPData,
};

export default function Protect({ item }) {
  window.scrollTo(0, 0);

  const whatDB = dataMap[item];

  return (
    <>
      {whatDB.map((item, index) => {
        return (
          <section key={index} className="protect">
            <div className="protect__title">
              <Link to="/#security" className="header">
                <IoMdArrowRoundBack />
              </Link>
              <h1 className="header">{item.title}</h1>
            </div>

            {/* Mapowanie dla content */}
            {item.content.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="protect__content">
                <p className="protect__content-title m-0">
                  {contentItem.header}
                </p>
                <div className="protect__content-description">
                  {/* Mapowanie dla opisu */}
                  {contentItem.description.map((descItem, descIndex) => {
                    // Mapowanie dla listy
                    if (typeof descItem === "object" && descItem.list) {
                      return (
                        <div key={descIndex}>
                          <p>{descItem.list[0]}</p>
                          <ul>
                            {descItem.list
                              .slice(1)
                              .map((listItem, listIndex) => {
                                return <li key={listIndex}>{listItem}</li>;
                              })}
                          </ul>
                        </div>
                      );
                    }

                    return <p key={descIndex}>{descItem}</p>;
                  })}
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </>
  );
}
