import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const Closebutton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <MdOutlineCancel size={24} color="rgb(153, 171, 180)" />
    </button>
  );
};

export default Closebutton;
