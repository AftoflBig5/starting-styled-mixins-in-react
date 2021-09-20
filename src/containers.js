//Imports
import styled, { css } from "styled-components";

//Code
const myMixin = ({ 
  padding = "1vw", 
  height = "min-content", 
  background = "transparent"
  }) => css`
  padding: ${padding};
  height: ${height};
  background: ${background};
`;

export const MyContainer1 = styled.div`
  margin: 1vw;
  border: 2px solid black;
  font-size: 1.5vw;

  ${myMixin}
`;

export const MyContainer2 = styled.div`
  margin: 3vw;
  border: 6px dashed black;
  font-size: 4vw;

  ${myMixin}
`;
