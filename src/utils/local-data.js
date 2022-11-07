let menus = [
  {
    id: "1",
    cabang: "Bogor",
    title: "Asinan Bogor",
    imageUrl: "https://kbu-cdn.com/dk/wp-content/uploads/asinan-bogor.jpg",
    description:
      "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    rating: 5,
    alamat: "Jl Pelajar Tmr 264, Sumatera Utara",
    harga: "21.000",
    isOnCart: 0,
  },
  {
    id: "2",
    cabang: "Bandung",
    title: "Seblak",
    imageUrl:
      "https://kbu-cdn.com/dk/wp-content/uploads/seblak-poll-pedas-1.jpg",
    description:
      "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: "2022-04-14T04:27:34.572Z",
    rating: 4,
    alamat: "Jl Laks L RE Martadinata 279, Dki Jakarta",
    harga: "22.000",
    isOnCart: 0,
  },
  {
    id: "3",
    cabang: "Bogor",
    title: "Laksa Bogor",
    imageUrl:
      "https://cdn0-production-images-kly.akamaized.net/do9IihHcMOvpKUfviHhZKqq1L3Q=/0x1418:3783x5201/469x469/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3657335/original/024598500_1639021335-shutterstock_1878296944.jpg",
    description:
      "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: "2022-04-14T04:27:34.572Z",
    rating: 4,
    alamat: "Jl Air Bersih 144, Sumatera Utara",
    harga: "24.000",
    isOnCart: 0,
  },
  {
    id: "4",
    cabang: "Cianjur",
    title: "Geco",
    description:
      "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: "2022-04-14T04:27:34.572Z",
    rating: 5,
    imageUrl: "https://www.tintahijau.com/images/2020b/GeCo_Pak_Iding.jpeg",
    alamat: "Jl Suryo 35, Dki Jakarta",
    harga: "25.000",
    isOnCart: 0,
  },
  {
    id: "5",
    cabang: "Subang",
    title: "Nasi Timbel",
    imageUrl:
      "https://cdn-cas.orami.co.id/parenting/images/nasi-timbel.width-800.jpegquality-80.jpg",
    description:
      "Nasi timbel adalah masakan Sunda yang populer di Jawa Barat dan Banten. Makanan ini biasanya dibuat dari beras bagolo atau beras merah campuran yang dimasak dengan bungkus daun pisang.",
    createdAt: "2022-04-14T04:27:34.572Z",
    rating: 5,
    alamat: "Jl Sampit I/54, Dki Jakarta",
    harga: "26.000",
    isOnCart: 0,
  },
  {
    id: "6",
    cabang: "Cianjur",
    title: "Bubur Ayam",
    imageUrl:
      "https://sweetrip.id/wp-content/uploads/2022/01/Bubur-Ayam-Cianjur.jpeg",
    description:
      "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: "2022-04-14T04:27:34.572Z",
    rating: 5,
    alamat: "Kompl TNI AL Cilangkap, Dki Jakarta",
    harga: "22.000",
    isOnCart: 0,
  },
];

function getAllMenus() {
  return menus;
}

function getMenu(id) {
  const foundedmenu = menus.find((menu) => menu.id === id);
  return foundedmenu;
}

function getRekomendasiMenu() {
  const rekomendasiMenus = menus.filter((menu) => menu.rating);
  return rekomendasiMenus;
}

function getCart() {
  const cart = menus.filter((menu) => menu.isOnCart);
  return cart;
}

function getCabangMenu() {
  const cabangMenus = menus.filter((menu) => menu.cabang);
  return cabangMenus;
}

function addMenu({ title, description }) {
  menus = [
    ...menus,
    {
      id: `menus-${+new Date()}`,
      title: title || "(untitled)",
      description,
      createdAt: new Date().toISOString(),
    },
  ];
}

function deleteMenu(id) {
  menus = menus.filter((menu) => menu.id !== id);
}

function editMenu({ id, title, description }) {
  const menuToEdit = menus.find((menu) => menu.id === id);
  menuToEdit.title = title;
  menuToEdit.description = description;

  menus = menus.map((menu) => {
    if (menu.id === id) {
      return menu;
    }
    return menu;
  });
}

export {
  editMenu,
  deleteMenu,
  addMenu,
  getAllMenus,
  getCabangMenu,
  getMenu,
  getRekomendasiMenu,
  getCart,
};
