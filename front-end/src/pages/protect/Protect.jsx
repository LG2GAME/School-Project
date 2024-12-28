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
      {whatDB.map((protectItem, protectIndex) => {
        return (
          <section className="protect" key={protectIndex}>
            <div className="protect__heading">
              <Link to="/#security" className="header">
                <IoMdArrowRoundBack />
              </Link>
              <h1 className="header m-0">{protectItem.title}</h1>
            </div>
            {protectItem.content.map((contentItem, contentIndex) => {
              return (
                <div className="protect__content" key={contentIndex}>
                  <div>
                    <p className="protect__content-title">
                      {contentItem.header}
                    </p>
                    <div className="protect__content-description">
                      {contentItem.description.map((descItem, descIndex) => {
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
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
}
