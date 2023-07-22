import React from "react";
import Profile from "./Profile";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type LoginTypeProps = {
  isLoggedIn: boolean;
};

type ComponentTypeProps = {
  Component: React.ComponentType<ProfileProps>;
};

const Private = (isLoggedIn: LoginTypeProps, Component: ComponentTypeProps) => {
  if (isLoggedIn) {
    return <Profile name="Krishna" />;
  } else {
    return <Login />;
  }
};

export default Private;
