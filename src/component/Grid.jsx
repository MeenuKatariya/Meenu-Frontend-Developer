import React, { useContext, useState } from "react";
import { SpaceXDataContext } from "../Context/SpaceXDataContext";
import { Modal } from "./Modal";

export const Grid = ({ dataAll }) => {
  const { page, setPage } = useContext(SpaceXDataContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && <Modal showModal={isModalOpen} modalData={modalData} hideModal={closeModal} />}
      <div className="grid xl:grid-cols-3 gap-10 p-10 md:grid-cols-2 sm:grid-cols-1 ">
        {dataAll?.map((item, id) => {
          return (
            <div
              onClick={() => {
                console.log({item})
                setModalData(item)
                openModal();
              }}
              key={item.capsule_Serial}
              className="border-2 border-grey-800 p-7 text-lg"
            >
              <div>
                <span className="font-bold">Capsule_id: </span>
                {item.capsule_id}
              </div>
              <div>
                {" "}
                <span className="font-bold">Capsule_Serial: </span>
                {item.capsule_serial}
              </div>
              <div>
                {" "}
                <span className="font-bold">Status: </span>
                {item.status}
              </div>
              <div>
                {" "}
                <span className="font-bold">Original_Launch: </span>
                {item.original_launch}
              </div>
              <div>
                {" "}
                <span className="font-bold">Type: </span>
                {item.type}
              </div>
              <div>
                {" "}
                <span className="font-bold">Details: </span>
                {item.details}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 content-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 mr-2"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
