const products = [
  {
    id: "01",
    name: "Pc Gamer 1",
    price: 1500,
    description: "Descripción del producto 1",
    stock: 20,
    category: "inicio",
    img: "https://picsum.photos/200"
  },
  {
    id: "02",
    name: "Random 2",
    price: 2000,
    description: "lorem lorem lorem",
    stock: 50,
    category: "inicio",
    img: "https://picsum.photos/200"
  },
  {
    id: "03",
    name: "Random 3",
    price: 1800,
    description: "Descripción del producto 3",
    stock: 30,
    category: "inicio",
    img: "https://picsum.photos/200"
  },
  {
    id: "04",
    name: "Random 4",
    price: 2200,
    description: "Descripción del producto 4",
    stock: 40,
    category: "Laptops",
    img: "https://picsum.photos/200"
  },
  {
    id: "05",
    name: "Random 4",
    price: 2200,
    description: "Descripción del producto 4",
    stock: 40,
    category: "Laptops",
    img: "https://picsum.photos/200"
  },
  {
    id: "06",
    name: "Random 4",
    price: 2200,
    description: "Descripción del producto 4",
    stock: 40,
    category: "Laptops",
    img: "https://picsum.photos/200"
  },
  {
    id: "07",
    name: "Random 4",
    price: 2200,
    description: "Descripción del producto 4",
    stock: 40,
    category: "PC-Gamer",
    img: "https://picsum.photos/200"
  },
  {
    id: "08",
    name: "Random 4",
    price: 2200,
    description: "Descripción del producto 4",
    stock: 40,
    category: "PC-Gamer",
    img: "https://picsum.photos/200"
  },
  {
    id: "09",
    name: "Random 4",
    price: 2200,
    description: "Descripción del producto 4",
    stock: 40,
    category: "PC-Gamer",
    img: "https://picsum.photos/200"
  },
  
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject('No hay data');
      } else {
        resolve(products);
      }
    }, 3000)
  });
};

export default products;
