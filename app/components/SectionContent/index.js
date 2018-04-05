import styled from 'styled-components';

const SectionContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  @media print {
    max-width: 100%;
    width: 100%;
    margin: 0 2.5cm;
  }
`;

export default SectionContent;
