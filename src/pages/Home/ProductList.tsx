import { useContext } from "react";
import AddProductCart from "./AddProductCart";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";

const ListProducts = () => {
  const { ProductsList} = useContext(GlobalContext);

  return (
    <>
      <h2>Produtos em Destaque</h2>
      <ul>
        {ProductsList.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R${product.price.toFixed(2).replace(".", ",")}</p>
            <AddProductCart />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListProducts;
