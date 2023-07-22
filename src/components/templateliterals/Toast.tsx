import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "left" | "center" | "right";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position-{position}</div>;
};

export default Toast;
