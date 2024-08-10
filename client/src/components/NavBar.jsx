import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <ul className="flex w-[270px] h-[78px] bg-lightSecondBG rounded-[40px] justify-around items-center p-5 shadow-lg hover:shadow-xl  focus:outline-none focus:ring-2 focus:ring-blue-300 transition-shadow duration-300">
      <li>
        <NavBarItem
          to="/stat"
          icon="fi fi-rr-chart-simple-horizontal"
          title="statistics"
        />
      </li>
      <li>
        <NavBarItem to="/" icon="fi fi-rr-wallet" title="wallet" />
      </li>
      <li>
        <NavBarItem to="/acc" icon="fi fi-rr-user" title="account" />
      </li>
    </ul>
  );
};

export default NavBar;
