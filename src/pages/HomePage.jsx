import React from "react";
// import Cabang from "../components/sections/Cabang";
// import Jabar from "../components/sections/Jabar";
// import Masakan from "../components/sections/Masakan";
// import Recomendation from "../components/sections/Recomendation";
// import SectionLove from "../components/sections/SectionLove";
// import MenuList from "../components/menus/MenuList";
import Cabang from "../components/sections/Cabang";
// import Carousel from "../components/sections/Carousel";
import Jabar from "../components/sections/Jabar";
import Masakan from "../components/sections/Masakan";
import Recomendation from "../components/sections/Recomendation";
import SectionLove from "../components/sections/SectionLove";
import { getRekomendasiMenu } from "../utils/local-data";
// import { getRekomendasiMenu } from "../utils/local-data";

function HomePage() {
  // const [menus] = React.useState(getRekomendasiMenu());
  // const [title, setTitle] = React.useState(null);
  // const [description, setDesc] = React.useState(null);
  // const [imageUrl, setImageUrl] = React.useState(null);

  // React.useEffect(() => {
  //   return () => {
  //     setTitle(null);
  //     setDesc(null);
  //     setImageUrl(null);
  //     setMenus(getRekomendasiMenu());
  //   };
  // }, [title, description, imageUrl, menus]);
  // console.log(menus);

  // const menud = menus.filter((menu) => menu.title.toLowerCase());

  const [menus] = React.useState(getRekomendasiMenu());

  const menud = menus.filter((menu) => menu.title.toLowerCase());

  return (
    <div>
      <SectionLove />
      <Recomendation menus={menud} />
      <Masakan />
      <Cabang />
      <Jabar />
    </div>
  );
}

export default HomePage;
