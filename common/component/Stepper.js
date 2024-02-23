
import React from 'react';
import clsx from 'clsx';
import {CheckCircleIcon} from '@heroicons/react/24/solid'

export const Stepper  = ({
    type="inprogress",
    isLast=false,
    stepNum,
    stepName
}) => {
  return (
    
    <div className="flex items-center w-full flex-row">
      <div className="flex-col w-3/4">
      <h6 className={clsx('text-base text-center font-bold mb-2', {
        'text-green-500': type === "completed",
        'text-yellow-500': type === "inprogress",
        'text-gray-400': type === "incomplete",

      })}>Step {stepNum}</h6>
      <div className="flex items-center flex-col space-y-1">
        {type === "completed" && (
            <div className="w-8 h-8 shrink-0 mx-[-1px] flex items-center justify-center rounded-full ring-2 ring-gray-300 ring-offset-4">
                <CheckCircleIcon class="text-green-500" />
           </div>
        )}
        {type === "inprogress" &&(
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-yellow-500 p-1.5 flex items-center justify-center rounded-full ring-2 ring-gray-300 ring-offset-4">
            <span className="w-3 h-3 bg-white rounded-full"/>
            </div>
        )}
        {type === "incomplete" &&(
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-400 p-1.5 flex items-center justify-center rounded-full ring-2 ring-gray-300 ring-offset-4">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            </div>
        )}
          {/* <div class="my-4 text-center max-w-[200px]"> */}
          <div className=" w-20 text-center overflow-hidden whitespace-no-wrap overflow-ellipsis">
              <h6 className="w-20 h-12 text-base  text-[#333]">{stepName}</h6>
              {/* <p class="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet.</p> */}
          </div>
        </div>  
      </div>
      {!isLast && <div className={clsx('w-1/4 h-1', {
      'bg-green-500': type === "completed",
      'bg-yellow-500': type === "inprogress",
      'bg-gray-400': type === "incomplete",
      })}/>}
    </div>

  );
};

