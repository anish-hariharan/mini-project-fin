import { useEffect, useState } from "react";
import "./Customers.css";
import Pagination from "./Pagination";

const CustomersList = () => {
  const users = [
    {
      id: "1",
      firstName: "anish",
      lastName: "hariharan",
      contact: "9233211242",
      aadharNumber: "1231231232",
    },
    {
      id: "2",
      firstName: "shelif",
      lastName: "sluvai",
      contact: "9233211243",
      aadharNumber: "1231231233",
    },
    {
      id: "3",
      firstName: "suji",
      lastName: "mukesh",
      contact: "9233211244",
      aadharNumber: "1231231234",
    },
    {
      id: "4",
      firstName: "samual",
      lastName: "jk",
      contact: "9233211245",
      aadharNumber: "1231231235",
    },
    {
      id: "5",
      firstName: "test 5",
      lastName: "user",
      contact: "9233211246",
      aadharNumber: "1231231236",
    },
    {
      id: "6",
      firstName: "test 6",
      lastName: "user",
      contact: "9233211247",
      aadharNumber: "1231231237",
    },
    {
      id: "7",
      firstName: "test 7",
      lastName: "user",
      contact: "9233211248",
      aadharNumber: "1231231238",
    },
    {
      id: "8",
      firstName: "test 8",
      lastName: "user",
      contact: "9233211249",
      aadharNumber: "1231231239",
    },
    {
      id: "9",
      firstName: "test 9",
      lastName: "user",
      contact: "9233211211",
      aadharNumber: "1231231211",
    },
    {
      id: "10",
      firstName: "test 10",
      lastName: "user",
      contact: "9233211212",
      aadharNumber: "1231231212",
    },
    {
      id: "11",
      firstName: "test 11",
      lastName: "user",
      contact: "9233211213",
      aadharNumber: "1231231213",
    },
    {
      id: "12",
      firstName: "test 12",
      lastName: "user",
      contact: "9233211214",
      aadharNumber: "1231231214",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="tableAndNavContainer">
        <div>
          <h2>User Tables</h2>
        </div>
        <div>
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
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.contact}</td>
                      <td>{user.aadharNumber}</td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
        <div className="navContainer">
          <Pagination
            paginate={paginate}
            totalUsers={users.length}
            usersPerPage={5}
          />
        </div>
      </div>
    </>
  );
};

export default CustomersList;
