import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  display: inline-block !important;
  background: hsla(52,11%,44%, .8) !important;
  border-radius: 2em !important;
  color: #fff !important;
  font-weight: 500 !important;
  padding: 0 0 0 0 !important;
  &:hover {
    background: hsla(52,11%,44%, 1) !important;
    text-decoration: underline;
  }
  a {
    font-family: 'Abel', Heletica, sans-serif !important;
    letter-spacing: normal !important;
    font-size: 14px !important;
    text-transform: none !important;
    color: #fff !important;
    padding: 0 1em !important;
    border-top: none !important;
  }
`;

export default Button;
