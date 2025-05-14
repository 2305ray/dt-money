import styled from "styled-components";

export const HeaderContainer = styled.header` //vai ocupar a largura toda
    background: ${PROPS => PROPS.theme['gray-900']};
    padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div` //vai ter o conteúdo e q vai ser centralizado
    width: 100%;
    max-width: 1120px; // se a tela for menor ela vai ter 100% da tela
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NewTransactionButton = styled.button` //vai ter o conteúdo e q vai ser centralizado
    height: 50px;
    border: 0;
    background: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    padding: 0 1.25rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover{
        background: ${props => props.theme['green-700']};
        transition: background-color 0.5s;
    }
`