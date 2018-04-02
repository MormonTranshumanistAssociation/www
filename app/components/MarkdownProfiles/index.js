import styled from 'styled-components';
import H1 from 'components/H1';

export const Title = styled(H1)`
  margin-bottom: 1em;
`;

const MarkdownProfiles = styled.div`
  h1 {
   font-size: 1.5em;
   line-height: 1.2em;
   margin: 0 0 0.2em 0;
  }
  h2 {
    font-size: 1em;
    line-height: 1em;
    margin: 0 0 1.25em 0;
  }
  img {
    float: left;
    margin: 0 20px 0 0;
    width: 128px;
    height: 160px;
    box-shadow: 0 1px 4px rgba(0,0,0,.6);
  }
  & > div {
    margin-bottom: 2em;
  }
`;

export default MarkdownProfiles;
