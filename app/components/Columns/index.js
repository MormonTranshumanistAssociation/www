import styled from 'styled-components';

const ColumnBase = styled.div`
  text-align: left;
  padding: 0rem 2rem;
`;
export const Column = styled(ColumnBase)`
  width: 384px;
  text-align: left;
`;

export const SingleColumn = styled(ColumnBase)`
  max-width: 500px;
  text-align: left;
  text-align: left;
  margin-right: auto;
  width: 100%;
`;
const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

export default Columns;
