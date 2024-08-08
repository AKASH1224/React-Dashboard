import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Toolbar, PdfExport, Edit, Inject, Search } from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Order = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" /> {/* passing the Page and order props from category */}
      <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting toolbar={[Search]}>
        {/* to pass the data we call and use the dataSource={ordersData} */}
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Order;
