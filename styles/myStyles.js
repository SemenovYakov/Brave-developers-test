import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #0e0e0e;
  max-width: 1000px;
  width: 45%;
  height: 60%;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 3px 5px rgb(45, 75, 75);
  @media (max-width: 820px) {
    margin: 20px;
    padding: 20px;
    width: 70%;
  }
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-bottom: 5px;
  margin-top: 5px;
  width: 90%;

  @media (max-width: 820px) {
    margin: 10px;
    width: 100%;
    flex-direction: column;
  }
`;
export const Card = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  margin: 10px;
  padding: 0px;
  border: 0.5px solid white;
  border-radius: 15px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;
  transition-duration: 0.5s;
  transition-property: background-color;
  @media (max-width: 820px) {
    width: 70%;
    margin: 5px;
  }
`;

export const AddOper = styled.a`
  height: 110px;
  cursor: pointer;
  display: flex;
  margin: 10px;
  padding: 1.13rem;
  border: 0.5px solid white;
  border-radius: 15px;
  width: 45%;
  transition-duration: 0.5s;
  transition-property: background-color;
  background-color: azure;
  box-shadow: 0 0 7px rgb(238, 228, 97);
  transition: 0.2s linear;
  &:hover,
  &:focus,
  &:active {
    background-color: rgb(38, 39, 38);
    @media (max-width: 820px) {
      width: 70%;
      margin: 5px;
      height: 80px;
    }
  }
`;

export const StartTitle = styled.h1`
  margin-top: 20px;
  font-size: 2.5rem;
  text-align: center;
  animation: text-animate-start 1.5s linear infinite;

  @keyframes text-animate-start {
    0%,
    100% {
      color: #fff;
      text-shadow: 0 0 10px #f4bf04, 0 0 20px #f4bf04, 0 0 40px #f4bf04,
        0 0 80px #f4bf04;
    }
    50%,
    50% {
      color: rgb(241, 235, 235);
      text-shadow: none;
    }
  }

  @media (max-width: 820px) {
    margin-top: 5px;
    font-size: 1.7rem;
    text-align: center;
  }
`;

export const StartH2 = styled.h2`
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px #f4bf04;
`;
export const Plus = styled.input`
  width: 44px;
  margin: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  background-size: 0.375em 0.375em, 0.375em 0.375em, 100% 100%;
  min-height: 100vh;
  min-width: 100vw;
`;

//add oper

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e;
  min-height: 100vh;
  min-width: 100vw;
`;

export const AddMain = styled.main`
  flex-direction: column;
  position: relative;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddTitle = styled.h1`
  margin-top: 20px;
  font-size: 2.5rem;
  text-align: center;
  animation: text-animate-add 1.5s linear infinite;
  @keyframes text-animate-add {
    0%,
    100% {
      color: #fff;
      text-shadow: 0 0 10px #27d827, 0 0 20px #27d827, 0 0 40px #27d827,
        0 0 80px #27d827;
    }
    50%,
    50% {
      color: rgb(241, 235, 235);
      text-shadow: none;
    }
  }
`;
export const AddH2 = styled.h2`
  color: #fff;
  text-shadow: 0 0 10px #27d827;
`;

export const AddButton = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 700;
  outline: none;
  align-self: center;
  margin-top: 30px;
  transform: translate(0%, 0%);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #868579;
    background-image: linear-gradient(147deg, #7aff59 0%, #0e3a02 75%);
    z-index: -1;
    clip-path: circle(0% at 40% 100%);
    transition: all 0.8s;
  }
  &:hover::before {
    clip-path: circle(100% at 40% 100%);
  }
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`;
//operators

export const OperatorText = styled.h2`
  opacity: 0;
  margin: auto;
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  align-self: center;
  color: #fff;
  text-shadow: 0 0 10px #f4bf04;
`;

export const OperatorImage = styled.img`
  border-radius: inherit;
  transition: 0.2s linear;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const OperatorBlock = styled.div`
  height: 110px;
  width: 290px;
  display: flex;
  position: relative;
  justify-content: center;
  box-shadow: 0 0 7px rgb(238, 228, 97);
  border-radius: 15px;
  @media (max-width: 820px) {
    height: 80px;
    width: 100%;
  }
  &:hover {
    ${OperatorText} {
      opacity: 1;
    }
  }
  &:hover {
    ${OperatorImage} {
      opacity: 0;
    }
  }
`;

//pay styles
export const PayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0e0e0e;
  min-height: 100vh;
  min-width: 100vw;
`;
export const PayMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PayTitle = styled.h1`
  margin-top: 20px;
  font-size: 2.5rem;
  text-align: center;
  animation: text-animate-pay 1.5s linear infinite;
  @keyframes text-animate-pay {
    0%,
    100% {
      color: #fff;
      text-shadow: 0 0 10px #eb0303, 0 0 20px #eb0303, 0 0 40px #eb0303,
        0 0 80px #eb0303;
    }
    50%,
    50% {
      color: rgb(241, 235, 235);
      text-shadow: none;
    }
  }
`;
export const PayH2 = styled.h2`
  color: #fff;
  text-shadow: 0 0 10px #eb0303;
`;
export const PayForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const PayButton = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  background: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 700;
  outline: none;
  align-self: center;
  margin-top: 30px;
  transform: translate(0%, 0%);

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffe53b;
    background-image: linear-gradient(147deg, #f5d41a 0%, #eb0303 75%);
    z-index: -1;
    clip-path: circle(0% at 40% 100%);
    transition: all 0.8s;
  }
  &:hover::before {
    clip-path: circle(100% at 40% 100%);
  }
`;

export const PayTrue = styled.span`
  color: rgb(23, 201, 23);
`;
export const PayFalse = styled.span`
  color: rgb(218, 3, 3);
`;
