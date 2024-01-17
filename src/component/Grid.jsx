import React from 'react'

export const Grid = ({dataAll}) => {
    // console.log(dataAll)
  return (
    <div>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {dataAll?.map((item) => {
          return (
            <div>
              <div>{item.capsule_id}</div>
              <div>{item.capsule_serial}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}


