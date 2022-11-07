import React from "react";
import { useParams } from "react-router-dom";
import MenuDetail from "../components/menus/MenuDetail";
import { getMenu } from "../utils/local-data";

function DetailPage() {
  const { id } = useParams();

  const [menu, setMenu] = React.useState({});
  React.useEffect(() => {
    setMenu(getMenu(id));
  }, [id]);
  console.log(menu.isOnCart);
  return (
    <>
      <MenuDetail {...menu} id={id} />
    </>
  );
}

export default DetailPage;
