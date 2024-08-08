import React from 'react';
import { SplineAreaSeries,ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import {Header} from "../../components";
import {areaCustomSeries,areaPrimaryYAxis,areaPrimaryXAxis } from "../../data/dummy";
const  Area= () => {
  return (
    <div>
        <Header category ="Chart" title ="Inflation Rate in Percentage"/>

<ChartComponent id ="line-chart" height="420px" primaryXAxis={areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} chartArea={{border:{width:0}}}
Tooltip={{enable:true}}>
  <Inject services ={[LineSeries,DateTime,Legend,SplineAreaSeries]}/>
  <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
  </SeriesCollectionDirective>
</ChartComponent>
</div>
 )
}
export default Area
