import styled from 'styled-components';
import SectionContent from '../SectionContent';

const PageWithContents = styled(SectionContent)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-start;
`;

export default PageWithContents;
