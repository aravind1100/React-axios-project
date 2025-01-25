import React, { useReducer, useState } from "react";
import { updateUser } from "../axiosApi";
import reducer from "../reducer";

const EditUser = ({ userToEdit, onUpdate, onCancel }) => {
  const initialState = {
    name: userToEdit.name || "",
    username: userToEdit.username || "",
    email: userToEdit.email || "",
    address: {
      street: userToEdit.address?.street || "",
      suite: userToEdit.address?.suite || "",
      city: userToEdit.address?.city || "",
      zipcode: userToEdit.address?.zipcode || "",
      geo: {
        lat: userToEdit.address?.geo?.lat || "",
        lng: userToEdit.address?.geo?.lng || "",
      },
    },
    phone: userToEdit.phone || "",
    website: userToEdit.website || "",
    company: {
      name: userToEdit.company?.name || "",
      catchPhrase: userToEdit.company?.catchPhrase || "",
      bs: userToEdit.company?.bs || "",
    },
    errorMessage: "",
  };

  const [userData, dispatch] = useReducer(reducer, initialState);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.name || !userData.email || !userData.username) {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "Name, Email, and Username are required!",
      });
      return;
    }

    try {
      await updateUser(userToEdit.id, userData);
      console.log(userToEdit.id, userData);
      onUpdate();
      setSuccessMessage("User updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="container">
      <h2 className="text-center">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={userData.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={userData.username}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "username",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={userData.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
          />
        </div>
        {/* Address Fields */}
        <div className="form-group">
          <label>Street</label>
          <input
            type="text"
            className="form-control"
            value={userData.address.street}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "address",
                subField: "street",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Suite</label>
          <input
            type="text"
            className="form-control"
            value={userData.address.suite}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "address",
                subField: "suite",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            value={userData.address.city}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "address",
                subField: "city",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Zipcode</label>
          <input
            type="text"
            className="form-control"
            value={userData.address.zipcode}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "address",
                subField: "zipcode",
                value: e.target.value,
              })
            }
          />
        </div>
        {/* Geo Location */}
        <div className="form-group">
          <label>Latitude</label>
          <input
            type="text"
            className="form-control"
            value={userData.address.geo.lat}
            onChange={(e) =>
              dispatch({
                type: "SET_DEEP_NESTED_FIELD",
                field: "address",
                subField: "geo",
                deepField: "lat",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Longitude</label>
          <input
            type="text"
            className="form-control"
            value={userData.address.geo.lng}
            onChange={(e) =>
              dispatch({
                type: "SET_DEEP_NESTED_FIELD",
                field: "address",
                subField: "geo",
                deepField: "lng",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={userData.phone}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "phone",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            className="form-control"
            value={userData.website}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "website",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            className="form-control"
            value={userData.company.name}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "company",
                subField: "name",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>Catch Phrase</label>
          <input
            type="text"
            className="form-control"
            value={userData.company.catchPhrase}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "company",
                subField: "catchPhrase",
                value: e.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label>BS</label>
          <input
            type="text"
            className="form-control"
            value={userData.company.bs}
            onChange={(e) =>
              dispatch({
                type: "SET_NESTED_FIELD",
                field: "company",
                subField: "bs",
                value: e.target.value,
              })
            }
          />
        </div>
        {userData.errorMessage && (
          <div className="alert alert-danger" role="alert">
            {userData.errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        <button type="submit" className="btn btn-success m-3">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary m-3"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;
