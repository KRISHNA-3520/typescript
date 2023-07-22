import React from "react";

type StatusProps = {
  status: "Loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status=== "Loading") {
    message = "Loading...";
  } else if (props.status=== "success") {
    message = "Data fetched successfully";
  } else if (props.status=== "error") {
    message = "Error in fetching data";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
