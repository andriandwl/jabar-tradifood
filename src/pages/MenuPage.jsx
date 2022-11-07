import React from "react";
// import AvaMenu from "../components/menus/AvaMenu";
// import Filter from "../components/menus/Filter";
// import MainContent from "../components/menus/MainContent";
import MenuList from "../components/menus/MenuList";
import { getRekomendasiMenu } from "../utils/local-data";

function MenuPage() {
  const [menus] = React.useState(getRekomendasiMenu());

  const menud = menus.filter((menu) => menu.title.toLowerCase());
  console.log(menus);
  return (
    <>
      <MenuList menus={menud} />
      {/* <AvaMenu />
      <Filter />
      <MainContent /> */}
    </>
  );
}

export default MenuPage;
