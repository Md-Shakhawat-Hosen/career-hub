import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from "sweetalert";
import {
  saveJobApplication,
  getDataFromLocalStorage,
} from "../../../Statistics/saveLocalStorage/saveLocalStorage";


const AppliedSucces = () => {
  const { id } = useParams();

  const parId = parseInt(id);

  saveJobApplication(parId);

  return (
    <div className='h-[50vh] flex justify-center items-center'>
      <h1>Congratulation!! your application submitted successfully</h1>
    </div>
  );
};

export default AppliedSucces;