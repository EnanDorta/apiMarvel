import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.7rem;
  width: 100%;

  font-size: 1.3rem;
  font-weight: bold;

  background: #202020;

  p {
    font-size: 1.5rem;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    filter: opacity(0.9); 
  }
`