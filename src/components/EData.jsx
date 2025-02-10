import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EActions } from "../Slices/ESlice";
import { useLoaderData } from "react-router-dom";

function EData() {
  const post = useLoaderData();
  const dispatch = useDispatch();
  // const { items, status, error } = useSelector((state) => state.Emp);
  dispatch(EActions.setDataE(post));
  const { items } = useSelector((state) => state.Emp);

  return (
    <div>
      <h2>Data from API</h2>
      {/* <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default EData;
