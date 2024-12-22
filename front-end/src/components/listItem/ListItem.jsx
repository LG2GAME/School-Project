import "./ListItem.scss";
import {
  FaUserTag,
  FaRegHandshake,
  FaUserSecret,
  FaLightbulb,
} from "react-icons/fa6";

const iconMap = {
  FaUserTag: FaUserTag,
  FaRegHandshake: FaRegHandshake,
  FaUserSecret: FaUserSecret,
  FaLightbulb: FaLightbulb,
};

export const ListItem = ({ icon, title, content }) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="list-item">
      {IconComponent && <IconComponent />}
      <p className="list-item__title">{title}</p>
      <p className="list-item__content">{content}</p>
    </div>
  );
};
