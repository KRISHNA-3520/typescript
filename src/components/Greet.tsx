import React from "react";

type Greetprops = {
  name: string;
  messageCount?: number;
  isLoggedIN: boolean;
};

const Greet = (props: Greetprops) => {
  return (
    <div>
      {props.isLoggedIN ? (
        <h2>
          Hello {props.name}! You have {props.messageCount} unread messages
        </h2>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
};

export default Greet;
