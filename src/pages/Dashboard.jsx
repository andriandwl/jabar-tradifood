import React from "react";
import NavDash from "../components/dashboard/NavDash";
import Main from "../components/dashboard/Main";
import { Route, Routes } from "react-router-dom";
import { getRekomendasiMenu } from "../utils/local-data";

function Dashboard({ authedUser, logout }) {
  const [menus] = React.useState(getRekomendasiMenu());

  const menud = menus.filter((menu) => menu.title.toLowerCase());

  return (
    <div>
      <header>
        <NavDash authedUser={authedUser} logout={logout} />
      </header>
      <main>
        <Routes>
          <Route path="/dashboard/home" element={<Main />} />
          <Route path="/dashboard/orders" element={<Main />} />
          <Route path="/dashboard/menus" element={<Main />} />
        </Routes>
        <Main menus={menud} />
      </main>
      <footer></footer>
    </div>
  );
}

export default Dashboard;
