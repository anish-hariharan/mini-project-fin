import { Outlet, useNavigate } from "react-router-dom";
import "./Header.css";
import { MdOutlinePersonAdd } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/addUser");

  return (
    <>
      <header className="header">
        <nav className="navBar">
          <div>
            <ul className="unorderList">
              <MdOutlinePersonAdd
                style={{ listStyle: "none", margin: "15px" }}
                onClick={handleClick}
              />
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
