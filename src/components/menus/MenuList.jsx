import React from "react";
import MenuItem from "./MenuItem";
import AvaMenu from "./AvaMenu";
import Filter from "./Filter";

function MenuList({ menus }) {
  return (
    <div>
      <AvaMenu />
      <div className="container">
        <Filter />
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {menus.map((menu) => (
          <MenuItem
            key={menu.id}
            id={menu.id}
            imageUrl={menu.image}
            title={menu.title}
            description={menu.description}
            {...menu}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
