import "./ListItem.scss";

import {
  FaUserTag,
  FaRegHandshake,
  FaUserSecret,
  FaLightbulb,
  FaHandcuffs,
  FaKey,
  FaShieldVirus,
} from "react-icons/fa6";

const iconMap = {
  FaLightbulb: FaLightbulb,
  FaRegHandshake: FaRegHandshake,
  FaUserSecret: FaUserSecret,
  FaUserTag: FaUserTag,
  FaHandcuffs: FaHandcuffs,
  FaKey: FaKey,
  FaShieldVirus: FaShieldVirus,
};

export const ListItem = ({ icon, header, description }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="list-item">
      {IconComponent && <IconComponent />}
      <p className="list-item__title">{header}</p>
      <p className="list-item__content">{description}</p>
    </div>
  );
};
