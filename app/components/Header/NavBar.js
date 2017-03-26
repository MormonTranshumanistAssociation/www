import styled from 'styled-components';

export default styled.nav`
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 12px 0 8px;
  background: rgba(255,255,255,.7);
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
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.7rem;
    color: #2d371e;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
  a:hover {
  }
`;
