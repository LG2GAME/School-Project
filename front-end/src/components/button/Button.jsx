import { HashLink as Link } from "react-router-hash-link";

import "./Button.scss";

export default function Button({ content, link }) {
  return (
    <Link to={link} className="button fs-5">
      {content}
    </Link>
  );
}
