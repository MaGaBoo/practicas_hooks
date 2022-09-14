import React, { useState } from "react";

// Login & Logout buttons

const loggedStyle = {
    backgroundColor: '#9BE564',
    color: '#FFF'
};

const unloggedStyle = {
    backgroundColor: '#C4B2BC',
    color: '#fbfbff'
}
const LoginButton = ({ loginAction }) => {
  return <button style={loggedStyle} onClick={loginAction}>Login</button>;
};

const LogoutButton = ({ logoutAction }) => {
  return <button style={unloggedStyle} onClick={logoutAction}>Logout</button>;
};



const OptionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessages, setNMessages] = useState(0);

  /*     const updateAccess = () => {
        setAccess(!access);
    }; */

  const loginAction = () => {
    setAccess(true);
  };
  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;

  if (access) {
    optionalButton = (
      <LogoutButton logoutAction={logoutAction}>Logout</LogoutButton>
    );
  } else {
    optionalButton = <LoginButton loginAction={loginAction}>Login</LoginButton>;
  }

  // Unread messages

  let addMessages = () => {
    setNMessages(nMessages + 1);
  };

  return (
    <div>
      {optionalButton}

    {access ? (
      <div>
      {nMessages > 0 ? (
        <p>
          you have {nMessages} new message{nMessages > 1 ? "s" : null}...
        </p>
      ) : (
        <p>No new messages</p>
      )}
      <button onClick={addMessages}>
        {nMessages === 0 ? "Add your first message" : "Add more messages"}
      </button>
      </div>
    
    ) : null}

    </div>
  );
};

export default OptionalRender;
