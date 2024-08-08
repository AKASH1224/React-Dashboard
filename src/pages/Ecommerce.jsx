import React from "react";
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/ContextProvider';
import down from '../data/down.png'; // Make sure this path is correct

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-Black-600 text-2xl">Earnings</p>
              <p className=" text-xl">$65000</p>
            </div>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md" />
          </div>
        </div>

        {/* Display the image */}
        <div className="m-3">
          <img src={down} alt="Product" className="rounded-xl w-full h-auto" />
        </div>

        {/* Cards below the image */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-gray dark:text-black-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button type="button" style={{ color: item.iconColor, backgroundColor: item.iconBg }} 
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue update section */}
      <div className="flex gap-10 flex-wrap justify-between">
        <div className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-full lg:w-2/3 p-4">
          <div className="flex justify-between">
            <p className="font-bold text-xl">Revenue Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-blue-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Revenue update left corner */}
          <div className="border-color m-4 pr-10">
            <div>
              <p>
                <span className="text-3xl font-semibold">$93,345</span>
                <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">30%</span>
              </p>
            </div>
            <div className="mt-8">
              <p>
                <span className="text-black-400 font-semibold">$40000</span>
              </p>
              <p className="text-black mt-1">Expenses</p>
            </div>
            <div className="mt-5">
              <SparkLine 
                currentColor={currentColor}
                id="line-sparkline"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color="blue"
              />

            </div>
            
            <div className="mt-10">
              <Button color="white" text="Download Report" bgColor={currentColor} borderRadius="10px"/>
            </div>  
          </div>
        </div>

        {/* Right side: Expenses, Budget, and Chart */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-full lg:w-1/3 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center gap-2 text-blue-600 hover:drop-shadow-xl">
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Stacked width="320px" height="350px"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
