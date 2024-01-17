import React, { useEffect, useRef } from "react";

export const Modal = ({
  modalData = {},
  showModal = false,
  hideModal = () => {},
}) => {
  const modalRef = useRef(null);
  console.log({ modalData });

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      hideModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);
  return (
    <div>
      {showModal ? (
        <div>
          <div className="fixed inset-0 z-50  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div
              ref={modalRef}
              className="relative w-500px h-600px bg-red-100 rounded p-10 leading-[2rem]"
            >
              <div className="modal-content">
                <button
                  className="absolute top-0 right-0 mt-4 mr-4 text-2xl cursor-pointer"
                  onClick={() => {
                    hideModal();
                  }}
                >
                  &times;
                </button>
                <h2 className="text-lg font-bold mb-4 underline">Capsule Data: </h2>
                <div>
                  {" "}
                  <span className="font-bold">Status: </span>
                  {modalData.status}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Original_Launch: </span>
                  {modalData.original_launch}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Type: </span>
                  {modalData.type}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Details: </span>
                  {modalData.details}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Original_launch_unix: </span>
                  {modalData.original_launch_unix}
                </div>
                <div>
                  {" "}
                  <span className="font-bold">Landings: </span>
                  {modalData.landings}
                </div>
                <div>
                  {modalData.missions.map((name) => {
                    return (
                      <div>
                        <div>
                          <span className="font-bold">Name: </span>
                          {name.name}
                        </div>
                        <div>
                          <span className="font-bold">Flight: </span>
                          {name.flight}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {showModal && <div className="fixed inset-0 z-40 bg-black opacity-50" />}
    </div>
  );
};
