import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);
  position: relative;
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;

    gap: 0.5rem;
    margin-top: 3rem;
    width: 100%;
    background-color: lightblue;
    position: absolute;
    top: -20rem;
    left: 0;
    padding: 5rem 0;
    transition: all 0.3s linear;
    text-align: center;
    &.active {
      top: -3rem;
    }
  }
  .nav-link {
    color: var(--grey-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary-500);
  }
  .active {
    color: var(--primary-500);
  }
  .menu {
    font-size: 1.5rem;
    transition: all 0.2s linear;
    cursor: pointer;
    z-index: 10;

    &:hover {
      color: var(--primary-500);
    }
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
      padding: 0;
      position: static;
      background-color: transparent;
      justify-content: flex-end;
    }
    .menu {
      visibility: hidden;
    }
  }
`;

export default Wrapper;
