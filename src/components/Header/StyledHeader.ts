import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 1.5rem;

  button{
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: none;
  }
`;
export default StyledHeader;