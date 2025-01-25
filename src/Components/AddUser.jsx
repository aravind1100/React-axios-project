import React, { useReducer, useState } from "react";
import { addUser } from "../axiosApi.js";
import reducer, { initialState } from "../reducer.js";
import { useNavigate } from "react-router-dom";

const AddUser = ({ onAdd, setRefreshkey }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.name || !state.email || !state.username) {
      alert("Name, Email, and Username are required!");
      return;
    }
    setLoading(true);
    try {
      await addUser(state);
      onAdd();
      dispatch({ type: "RESET" });
      setRefreshkey((curr) => curr + 1);
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container bg-light">
        <h2 className="mt-5 text-center border border-2 p-3 fw-bold ">
          Add User
        </h2>
        <form onSubmit={handleSubmit} className="form w-50 mx-auto">
          {/* Input fields */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={state.name}
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
              placeholder="Add a Username"
              value={state.username}
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
              placeholder="Enter a email"
              value={state.email}
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
              value={state.address.street}
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
              value={state.address.suite}
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
              value={state.address.city}
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
              type="number"
              className="form-control"
              value={state.address.zipcode}
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
          <div className="form-group">
            <label>Latitude</label>
            <input
              type="number"
              className="form-control"
              value={state.address.geo.lat}
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
              type="number"
              className="form-control"
              value={state.address.geo.lng}
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

          {/* Other Fields */}
          <div className="form-group">
            <label>Phone</label>
            <input
              type="number"
              className="form-control"
              value={state.phone}
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
              value={state.website}
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
              value={state.company.name}
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
              value={state.company.catchPhrase}
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
              value={state.company.bs}
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

          <button
            type="submit"
            className="btn btn-primary m-3 w-25"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            className="btn btn-secondary m-3 w-25"
            onClick={() => {
              dispatch({ type: "RESET" });
              // setIsAdding(false);
              navigate("/");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
