import { useContext } from "react";
import { GlobalContext } from "../../../providers/GlobalContext/GlobalContext";
import { FaCartPlus } from "react-icons/fa";
import ListProducts from "../ProductList";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import StyledDivTitleProduct from "./StyledDivTitleProduct";
import { StyledButtonAdd, StyledDivProductDetails } from "./StyledDivProductDetails";

function ProductPage() {
  const { CurrentProduct } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <StyledDivTitleProduct>
        <span>Home &gt; {CurrentProduct?.name}</span>
      </StyledDivTitleProduct>
      <StyledDivProductDetails>
        <div>
            <img src={CurrentProduct?.image} alt={CurrentProduct?.name} />
        </div>
        <div>
          <h2>{CurrentProduct?.name}</h2>
          <p>R$ {CurrentProduct?.price.toFixed(2).replace(".", ",")}</p>
          <p>{CurrentProduct?.description}</p>
       <StyledButtonAdd>
        <FaCartPlus size={36} color="white" />
        <span>Adicionar ao carrinho</span>
      </StyledButtonAdd>
        </div>
      </StyledDivProductDetails>
      <ListProducts />
      <Footer />
    </>
  );
}

export default ProductPage;
