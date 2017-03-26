import styled from 'styled-components';

export default styled.nav`
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 0 4px 0;
  background: rgba(255,255,255,.75);
  z-index: 1000000;
  a {
    display: inline-flex;
    padding: 0.25rem 1rem;
    margin: 0 0.25rem;
    text-decoration: none;
    -webkit-touch-callout: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: 'Abel', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    color: #2d371e;
    font-weight: 400;
  }
`;
