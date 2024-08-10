import { Link } from "react-router-dom";

const NavBarItem = ({ to, icon, title }) => {
  return (
    <Link to={to} className="flex items-center justify-center flex-col">
      <i className={`${icon} text-[20px]`}></i>
      <h1 className="font-primaryFont text-[8px] font-medium">{title}</h1>
    </Link>
  );
};

export default NavBarItem;
