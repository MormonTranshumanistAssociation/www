import styled from 'styled-components';

const ColumnBase = styled.div`
  text-align: left;
  padding: 1rem 2rem;
`;
export const Column = styled(ColumnBase)`
  width: 384px;
  text-align: left;
  padding: 1rem 2rem;
`;

export const SingleColumn = styled(ColumnBase)`
  max-width: 500px;
  text-align: left;
  padding: 1rem 2rem;
  text-align: left;
  margin-right: auto;
  overflow-x: hidden;
`;
const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Columns;
