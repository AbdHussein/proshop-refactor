import {
  ICellRendererComp,
  ICellRendererFunc,
  ICellRendererParams,
} from 'ag-grid-community';

export interface IColumn {
  name: string;
  sortable?: boolean;
  filter?: boolean;
  checkboxSelection?: boolean;
  cellRenderer?:
    | string
    | ICellRendererFunc
    | (new (params?: ICellRendererParams) => ICellRendererComp)
    | undefined;
}
