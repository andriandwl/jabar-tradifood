import React from "react";
import Dashboard from "../pages/Dashboard";
import ProfilePage from "../pages/ProfilePage";

function Role({ authedUser, logout }) {
  if (authedUser.name === "nimda") {
    return (
      <div>
        <Dashboard logout={logout} />
      </div>
    );
  }
  return (
    <div>
      <ProfilePage authedUser={authedUser} logout={logout} />
    </div>
  );
}

export default Role;
