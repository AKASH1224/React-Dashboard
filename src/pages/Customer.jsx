import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
const Customer =()=>{
    return(
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
        <Header category="Page" title="Customer" />
        <GridComponent 
          id="gridcomp" 
          dataSource={customersData} 
          allowPaging 
          allowSorting 
          toolbar={['Delete']}
          width="auto"
          editSettings ={{allowEditing:true,allowDeleting:true}}
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page,Edit,Selection,Filter, Toolbar, Sort]} />
        </GridComponent>
      </div>
    )
}
export default Customer