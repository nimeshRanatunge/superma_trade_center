import { css } from "styled-components";

// styled component css used here
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};