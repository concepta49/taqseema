import Link from "next/link";
const Navitem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Navitem;