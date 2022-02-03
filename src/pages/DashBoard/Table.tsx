import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './style.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AgGridColumn } from 'ag-grid-react/lib/shared/agGridColumn';
import { columnDefs, defaultColDef, rowStyle, getRowStyle } from './data';
import { ContainAgGrid } from './style';
import { Button, StyledDelete, StyledEdit } from './Icons';
import { IProducts } from '../../redux/Product/type';
import { AppState } from '../../redux/store';
import { delateProduct } from '../../redux/Admin/action';
import { TAllActionAdmin } from '../../redux/Admin/type';
import { getProducts } from '../../redux/Product/action';

interface IProps {
  data?: IProducts[];
  // column:[]
}

const row = (ID, NAME, PRICE, CATEGORY, ACTION) => ({
  ID,
  NAME,
  PRICE,
  CATEGORY,
  ACTION,
});

const Table = ({ data }: IProps) => {
  const getRowData = () => {
    return (
      data &&
      data?.map(e => {
        return row(
          e?._id,
          e?.name,
          e?.price,
          e?.categories[0],
          <>
            <Link to={`/update-product/${e._id}`}>
              <StyledEdit />
            </Link>
            <Button
            // onClick={()=>deleteOnClick(e._id)}
            >
              <StyledDelete />
            </Button>
          </>,
        );
      })
    );
  };

  return (
    <>
      <ContainAgGrid className="ag-theme-balham">
        <AgGridReact
          reactUi // icons
          getRowStyle={getRowStyle}
          rowStyle={rowStyle}
          rowHeight={60}
          rowData={getRowData() as []}
        >
          <AgGridColumn field="ID" width={300} />
          <AgGridColumn field="NAME" width={350} />
          <AgGridColumn field="PRICE" width={220} />
          <AgGridColumn field="CATEGORY" width={220} />
          <AgGridColumn field="ACTION" width={200} />
        </AgGridReact>
      </ContainAgGrid>
    </>
  );
};

export default Table;
