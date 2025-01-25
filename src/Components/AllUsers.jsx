import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../axiosApi";
import UserRow from "./UserRow";
import { Link } from "react-router-dom";

const AllUsers = ({ onEdit, refreshKey}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [refreshKey]);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      if (response && response.data) { // Set users if data exists
        setUsers(response.data); 
      } else {
        console.error("No data returned from API");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="container">
      <div className="row d-flex ">
        <div className="col">
          <h2 className="text-center m-5 border border-2 border-dark p-3 fw-bold">
            User List
          </h2>
          <Link to="/adduser">
            <button className="btn btn-primary m-3 w-20">Add New User</button>
          </Link>
        </div>
        <div className="col">
          <div className="table-responsive border border-2">
            <table className="table table-light ">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                  <th scope="col">Street</th>
                  <th scope="col">Suite</th>
                  <th scope="col">City</th>
                  <th scope="col">Zipcode</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Catch Phrase</th>
                  <th scope="col">BS</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <UserRow
                      user={user}
                      onEdit={onEdit}
                      handleDelete={handleDelete}
                      index={index}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
            `
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
