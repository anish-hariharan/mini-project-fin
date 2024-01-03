import { Outlet, useNavigate } from "react-router-dom";
import "./Header.css";
import { MdOutlinePersonAdd } from "react-icons/md";
import { CiHome, CiLogout } from "react-icons/ci";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (pathName) => {
    const path = {
      home: "/home ",
      addUser: "/addUser",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div>
                  <CiHome
                    style={{ listStyle: "none", margin: "15px" }}
                    onClick={() => handleClick("home")}
                  />
                </div>
                <div>
                  <MdOutlinePersonAdd
                    style={{ listStyle: "none", marginRight: "15px" }}
                    onClick={() => handleClick("addUser")}
                  />
                </div>

                <div>
                  <CiLogout
                    style={{ marginRight: "15px" }}
                    onClick={handleLogout}
                  />
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
