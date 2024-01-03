import { useState } from "react";
import "./Customers.css";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CustomersList = () => {
  const usersFromRedux = useSelector((state) => state.store.users);
  const users = usersFromRedux;

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="tableAndNavContainer">
        <div>
          <h3>Users Table</h3>
        </div>
        <div className="parentContainer">
          {currentUsers.length > 0 ? (
            <table className="user-table">
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>contact</th>
                  <th>Aadhar number</th>
                </tr>
              </thead>
              {currentUsers.length > 0 && (
                <tbody className="user-tabletd">
                  {currentUsers.map((user) => {
                    return (
                      <tr key={user.contact}>
                        <td>
                          <Link to={`/user/${user.id}`}>{user.firstName}</Link>
                        </td>
                        <td>{user.lastName}</td>
                        <td>{user.contact}</td>
                        <td>{user.aadharNumber}</td>
                      </tr>
                    );
                  })}
                </tbody>
              )}
            </table>
          ) : (
            <div>
              <p>No data found</p>
            </div>
          )}
          <div className="navContainer">
            <Pagination
              paginate={paginate}
              totalUsers={users.length}
              usersPerPage={15}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersList;
