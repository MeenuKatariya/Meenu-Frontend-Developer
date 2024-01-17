import React from 'react'

export const Grid = ({dataAll}) => {
    // console.log(dataAll)
  return (
    <div>
        <div className="grid xl:grid-cols-3 gap-10 p-10 md:grid-cols-2 sm:grid-cols-1 ">
        {dataAll?.map((item) => {
          return (
            <div className="border-2 border-grey-800 p-7 text-lg">
              <div><span className="font-bold">Capsule_id: </span>{item.capsule_id}</div>
              <div> <span className="font-bold">Capsule_Serial: </span>{item.capsule_serial}</div>
              <div> <span className="font-bold">Status: </span>{item.status}</div>
              <div> <span className="font-bold">Original_Launch: </span>{item.original_launch}</div>
              <div> <span className="font-bold">Type: </span>{item.type}</div>
              <div> <span className="font-bold">Details: </span>{item.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}


