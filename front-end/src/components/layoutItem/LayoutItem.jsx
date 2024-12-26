import "./LayoutItem.scss";

import { FaBookReader, FaFingerprint } from "react-icons/fa";
import { MdOutlineAppBlocking } from "react-icons/md";

import Button from "@components/button/Button";

const iconMap = {
  FaBookReader: FaBookReader,
  FaFingerprint: FaFingerprint,
  MdOutlineAppBlocking: MdOutlineAppBlocking,
};

export const LayoutItem = ({ icon, header, description }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="lt-item">
      <div className="lt-item__image">
        {IconComponent && (
          <IconComponent
            style={{ fill: "url(#gradient)" }}
            className="lt-item__image-svg"
          ></IconComponent>
        )}
        <svg width="0" height="0">
          <linearGradient id="gradient" x1="75%" y1="-25%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#00E2F0", stopOpacity: 1 }}
            />
            <stop
              offset="80%"
              style={{ stopColor: "#0072F0", stopOpacity: 1 }}
            />
          </linearGradient>
        </svg>
      </div>
      <div className="lt-item__content">
        <p className="lt-item__content-header">{header}</p>
        <div className="lt-item__content-content">
          {description.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <Button content="Więcej" link="nothing-now" />
      </div>
    </div>
  );
};
