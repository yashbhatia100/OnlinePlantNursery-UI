import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import commonStyle from "./commonStyle.module.css";
import DisplayCustomer from "./DisplayCustomer";
import { getCustomerByIdActions } from "../../redux/getCustomerById/getCustomerByIdActions";

export default function GetCustomerById(props) {
  const response = useSelector((state) => {
    return {
      customer: state.getCustomerById.customer,
      error: state.getCustomerById.error,
    };
  });

  const dispatch = useDispatch();

  const getCustomerById = () => {
    let id = props.match.params.id;
    dispatch(getCustomerByIdActions(id));
  }

  useEffect(getCustomerById, []);

  return (
    <div>
      <h3> Get Customer details</h3>
      <div className="mt-5">
        {response.customer ? (
          <div>
            <div>
              <div className="alert alert-success">
                Customer details fetched successfully!
              </div>
              <div>
                <DisplayCustomer customer={response.customer} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {response.error ? (
          <div className={commonStyle.error}>
            Request unsuccessful
            <br />
            {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
