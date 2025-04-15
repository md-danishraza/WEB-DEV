import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 2rem;

  h3 {
    text-align: center;
  }
  p {
    width: 80%;
    text-align: center;
    margin-inline: auto;
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;

    @media screen and (min-width: 768px) {
      width: 50%;
    }
  }
`;

export default Wrapper;
