import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { IColumn } from '../../../@types/table';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { IOrders } from '../../../redux/Order/type';

interface IProps<T> {
  columns: IColumn[];
  data?: IOrders[];
  frameworkComponents?: {
    [key: string]: any;
  };
}

const onFirstDataRendered = (params: any) => {
  params.api.sizeColumnsToFit();
};

export default class Table<T> extends React.PureComponent<IProps<T>> {
  render(): React.ReactNode {
    const { data, frameworkComponents, columns } = this.props;
    return (
      <div
        className="ag-theme-alpine"
        style={{
          marginTop: '1em',
          height: '100%',
          minWidth: '100%',
        }}
      >
        <AgGridReact
          rowData={data}
          pagination
          paginationPageSize={10}
          frameworkComponents={frameworkComponents}
          onFirstDataRendered={onFirstDataRendered}
        >
          {columns.map((column: IColumn) => (
            <AgGridColumn
              field={column.name}
              sortable={column.sortable}
              filter={column.filter}
              checkboxSelection={column.checkboxSelection}
              cellRenderer={column.cellRenderer}
            />
          ))}
        </AgGridReact>
      </div>
    );
  }
}
