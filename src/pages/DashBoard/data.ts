export const columnDefs = [
  { headerName: 'PRODUCT ID', field: 'PRODUCTID' },
  { headerName: 'PRODUCT NAME', field: 'PRODUCTNAME' },
  { headerName: 'PRODUCT PRICE', field: 'PRODUCTPRICE' },
  { headerName: 'CATEGORY', field: 'CATEGORY' },
  { headerName: 'ACTION', field: 'ACTION' },
];

export const defaultColDef = {
  width: 256,
  editable: true,
  filter: 'agTextColumnFilter',
};

export const rowStyle = {
  borderBottom: 'white 3px solid',
  padding: '16px',
  fontFamily: 'normal ',
  fontSize: '15px',
};

export const getRowStyle = (params): any => {
  if (params.node.rowIndex % 2 === 0) {
    return { background: '#F2F2F2', borderRadius: '10px' };
  }
  return { background: 'white', borderRadius: '10px' };
};
