import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { MdOutlinePersonAdd } from "react-icons/md";
import { CiHome, CiLogout } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  const handleClick = () => {
    const path = {
      home: "/addUser",
      addUser: "/home ",
    };

    navigate(path[pathName]);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <nav className="navBar">
          <div>
            <ul className="unorderList">
              {pathName === "home" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <MdOutlinePersonAdd
                      style={{ listStyle: "none", margin: "15px" }}
                      onClick={handleClick}
                    />
                  </div>

                  <div>
                    <CiLogout
                      style={{ marginRight: "15px" }}
                      onClick={handleLogout}
                    />
                  </div>
                </div>
              )}
              {pathName === "addUser" && (
                <CiHome
                  style={{ listStyle: "none", margin: "15px" }}
                  onClick={handleClick}
                />
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
