import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  background-image: ${(props) => (props.img && `url(${props.img})`)};
  background-size: cover;
  background-position: center center;
  width: 100%;
  padding: 80px 0;
  overflow-x: hidden;
  @media screen and (max-width: 672px) {
    padding: 40px 0;
  }

  //&:first-child {
  //  padding-top: calc(80px + 32px);    // leave room for header nav bar
  //}
`;

export default Section;
