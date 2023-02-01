import styled from "styled-components";

export const ListButtons = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media (max-width: 767px){
        grid-template-columns: auto;
        justify-content: center;
        grid-gap: 15px;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    transition: color 0.8s;
    font-size: 15px;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
        cursor: default;
    }
`;