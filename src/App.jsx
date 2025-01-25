import React, { useState, useEffect } from "react";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import AllUsers from "./Components/AllUsers";
import { getUsers } from "./axiosApi";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
 

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleCancelEdit = () => setEditingUser(null);

  const handleAddUser = async () => {
    try {
      await loadUsers();
      setUserToEdit(null);
    } catch (error) {
      console.error("Error loading users after adding:", error);
    }
  };

  const handleUpdateUser = async () => {
    await loadUsers();
    setEditingUser(null);
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      {editingUser ? (
        <EditUser
          userToEdit={editingUser}
          onUpdate={handleUpdateUser}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <AllUsers
                  users={users}
                  onEdit={setEditingUser}
                  refreshKey={refreshKey}
                
                
                />
              }
            />

            <Route
              path="/adduser"
              element={
                <AddUser
                  onAdd={handleAddUser}
                  setRefreshkey={setRefreshKey}
                  
                 
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
