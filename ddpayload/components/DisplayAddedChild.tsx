import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { RiSettings2Line } from "react-icons/ri";
import AddNewObject from "./AddNewObject";


const DisplayAddedChild = ({ data, handleAddChild }: any) => {
  return (
    <>
      {Object.entries(data).map((fData: any) => {
        return (
          <div>
            <div key={fData[0]} className="flex space-x-1" onClick={() => {
                // const ooo = {
                //     hati: {
                //         'key': 'orrrrr',
                //     }
                // };
                // Object.assign(fData[1].children, ooo)
                // console.log(fData[1])
                }}>
              <div className="flex flex-row p-2 bg-[#F4ABC4] rounded-md gap-4 w-fit justify-center items-center my-2">
                <div className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md">
                  {fData[1].key}
                </div>
                <p className="font-bold text-xl">:</p>
                <div className="w-full px-4 py-1 focus:outline-none bg-black text-md font-bold text-white rounded-md">
                  {fData[1].value}
                </div>
                <div className="flex space-x-1">
                  <div className="rounded-md bg-black p-1 cursor-pointer flex">
                    <RiSettings2Line className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>
              {Object.entries(fData[1].children).length ? (
                <span className="text-[#F4ABC4] font-semibold text-4xl mt-2 pl-2">{`{`}</span>
              ) : (
                <span className="text-[#F4ABC4] font-semibold text-4xl mt-8">
                  ,
                </span>
              )}
            </div>
            {/* Children  */}
            {Object.entries(fData[1].children).length && (
              <>
                <div className="m-2 ml-8 block">
                  <DisplayAddedChild
                    handleAddChild={handleAddChild}
                    data={fData[1].children}
                  />
                  <AddNewObject handleAddChild={handleAddChild} parent={fData[0]} />
                </div>
                <span className="text-[#F4ABC4] font-semibold text-4xl">
                  {`},`}
                </span>
              </>
            )}
            
          </div>
        );
      })}
    </>
  );
};

export default DisplayAddedChild;