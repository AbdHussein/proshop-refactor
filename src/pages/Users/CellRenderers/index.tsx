/* eslint-disable react/destructuring-assignment */
import { ICellRendererParams } from 'ag-grid-community';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Edit_ } from '../../../assets/edit.svg';

const Edit = styled(Edit_)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.text?.primary};
`;

const CellRenderers = (params: ICellRendererParams) => {
  const navigate = useNavigate();
  return (
    <Edit onClick={() => navigate(`/users/${params.data?._id as string}`)} />
  );
};

export default CellRenderers;
