import styled from "styled-components";

const StyledBannerSection = styled.section`
  display: flex;
  padding: 0 5%;
  gap: 60px;
  align-items: center;


  div:first-child {
    width: 60%;
    max-width: 941px;
    border-radius: 40px;
    height: 691px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  div:last-child {
    text-transform: uppercase;

    h1 {
      max-width:332px;
      font-size: 100px;
      font-family: var(--font-primary);
      font-weight: 600;
    }

    button {
      width: 15rem;
      font-size: 1.25rem;
      weight: 500;
    }
  }
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      text-align: center;

      div:first-child{
        max-height: 382px;
        width: 100%;
      }
    } 
  `

  
export default StyledBannerSection;
