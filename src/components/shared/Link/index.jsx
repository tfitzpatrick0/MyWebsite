/** @jsxImportSource @emotion/react */
import "./style.css";

function Link(props) {
  return (
    <a
      href={props.href}
      className="main-link"
      css={{ color: props.primary, "&:hover": { color: props.hover } }}
    >
      {props.children}
    </a>
  );
}

export default Link;
