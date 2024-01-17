import React, { useState } from "react";
import { Modal } from "./Modal";

export const Grid = ({ dataAll }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };
 
  
 
 

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div  >
      {isModalOpen && <Modal showModal={isModalOpen} modalData={modalData} hideModal={closeModal} />}
      <div className="grid xl:grid-cols-3 gap-10 p-10 md:grid-cols-2 sm:grid-cols-1  ">
        {dataAll?.map((item, id) => {
          return (
            <div
              onClick={() => {
                setModalData(item)
                openModal();
              }}
              key={item.capsule_Serial}
              className="border-2 border-grey-800 p-7 text-lg shadow-md rounded cursor-pointer"
            >
              <div>
                <span className="font-bold">Capsule Id: </span>
                {item.capsule_id}
              </div>
              <div>
                {" "}
                <span className="font-bold">Capsule Serial: </span>
                {item.capsule_serial}
              </div>
              <div>
                {" "}
                <span className="font-bold">Status: </span>
                {item.status}
              </div>
              <div>
                {" "}
                <span className="font-bold">Original Launch: </span>
                {item.original_launch}
              </div>
              <div>
                {" "}
                <span className="font-bold">Type: </span>
                {item.type}
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
