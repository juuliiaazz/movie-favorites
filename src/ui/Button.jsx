import styled from "styled-components";

export const Button = styled.button`
  ${(props) =>
    props.type === "toggle" &&
    `
    font-size: 1.4rem;
    font-weight: bold;
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    height: 2.4rem;
    aspect-ratio: 1;
    background-color: var(--color-background-900);
    color: var(--color-text);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    z-index: 999;
    
    &:hover {
        background-color: var(--color-primary-light);;
    }
    `}

  ${(props) =>
    props.type === "delete" &&
    `
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--color-background-900);
    position: absolute;
    right: 2.4rem;
    height: 1.8rem;
    bottom: 3.8rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    background-color: var(--color-red);
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
        background-color: var(--color-red-dark);
    }

    @media (max-width: 430px) {
        right: 1rem;
        bottom: 3rem;
      }
    `}

${(props) =>
    props.type === "add" &&
    `
    font-size: 1.4rem;
    font-weight: bold;
    background-color: var(--color-primary);
    color: var(--color-text);
    border: none;
    border-radius: 10rem;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    
    &:hover {
        background-color: var(--color-primary-light);;
    }

    @media (max-width: 430px) {
        font-size: 1.2rem;
        padding: 0.8rem;
      }
    `}

${(props) =>
    props.type === "back" &&
    `
    font-family: sans-serif;
    font-size: 2.4rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    height: 3.2rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    color: var(--color-background-500);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    z-index: 999;
    
    @media (max-width: 430px) {
        height: 2rem;
        width: 2rem;
      }
    `}
`;

export default Button;
