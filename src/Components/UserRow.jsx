import React from "react";

const UserRow = ({ user, onEdit, handleDelete,index }) => {
  return (
    <>
      <td>{index+1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.address.street}</td>
      <td>{user.address.suite}</td>
      <td>{user.address.city}</td>
      <td>{user.address.zipcode}</td>
      <td>{user.address.geo.lat}</td>
      <td>{user.address.geo.lng}</td>
      <td>{user.company.name}</td>
      <td>{user.company.catchPhrase}</td>
      <td>{user.company.bs}</td>
      <td>
        <button
          onClick={() => onEdit(user)}
          className="btn btn-warning w-100 mb-2"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default UserRow;
