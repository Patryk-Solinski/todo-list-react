import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    list-style: none;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 15px;
    align-items: center;
    border-bottom: 1px solid hsl(0, 10%, 89%);

    ${({ hidden }) => hidden && css`
       display: none;
    `}
`;

export const Content = styled.span`
   word-break: break-word;

${({ done }) => done && css`
     text-decoration: line-through;`}
`;