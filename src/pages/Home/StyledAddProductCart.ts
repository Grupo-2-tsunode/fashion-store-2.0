import styled from "styled-components";

const StyledAddProductCart = styled.div`
display: flex;
align-items: center;
gap: 25px;
margin-top: 33px;

div {
  width: 60px;
  height: 60px;
  background-color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
}
span {
  color: var(--Color-Black);
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}

`;
export default StyledAddProductCart;