import styled from "styled-components";

export const TasksForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 767px){
        grid-template-columns: 1fr;
        padding-bottom: 20px;
    }
`;

export const Field = styled.input`
    padding: 10px;
    border: 1px solid hsl(0, 10%, 89%);
`;

export const Button = styled.button`
    border: none;
    background-color: teal;
    color: white;
    padding: 10px;
    transition: 0.7s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.2);
    }
    
`;