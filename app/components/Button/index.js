import styled from 'styled-components';

const Button = styled.div`
  cursor: pointer;
  display: inline-block !important;
  background: hsla(52,11%,44%, .8) !important;
  border-radius: 2px !important;
  color: #fff !important;
  font-weight: 500 !important;
  padding: 0 0 0 0 !important;
  &:hover {
    background: hsla(52,11%,44%, 1) !important;
  }
  &:hover, a:hover, button:hover, input:hover {
   text-decoration: underline;
   cursor: pointer;
  }
  a, button, input {
    color: #fff !important;
    border-top: none !important;
    padding: 0 1.5em !important;
    font-family: 'Abel', Heletica, sans-serif !important;
    letter-spacing: normal !important;
    font-size: 14px !important;
    text-transform: none !important;
  }
`;

export default Button;
