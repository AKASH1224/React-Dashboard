import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p className="text-2xl font-light text-Black-600">Chart</p>
      <p className="text-3xl font-bold tracking-tight dark:text-black-200 text-slate-900">{category}</p>
    </div>
    <p className="text-center dark:text-Black-200 text-xl mb-2 mt-3">{title}</p>
  </div>
);

export default ChartsHeader;