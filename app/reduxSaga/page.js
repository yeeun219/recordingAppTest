'use client';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {startGetDataThroughSaga } from "../../store/features/tasks-slice"
export default function App() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.tasks);
  
 const handleGetTask = ()=>{
    dispatch(startGetDataThroughSaga({num:5}));
 }
  return (
      <button
          className='px-3 py-2 bg-blue-600 text-sm text-white rounded-full'
          onClick={handleGetTask}
        >
          getTask
      </button>
  );
}