import React, { useEffect, useRef } from "react";

export const Modal = ({
  modalData = {},
  showModal = false,
  hideModal = () => {},
}) => {
  const modalRef = useRef(null);

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

  const modalDataKeys = Object.keys(modalData).filter(
    (cur) =>
      typeof modalData[cur] === "string" || typeof modalData[cur] === "number"
  );

  return (
    <div>
      {showModal ? (
        <div>
          <div className="fixed inset-0 z-50  flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div
              ref={modalRef}
              className="relative w-[500px] h-[430px] bg-gray-300 rounded p-10   leading-[2rem]"
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
                <h2 className="text-lg font-bold mb-4 underline">
                  Capsule Data:{" "}
                </h2>
                <div>
                  {modalDataKeys.map((key) => {
                    const value = modalData[key];

                    return (
                      <div>
                        <span>
                          {key
                            .split("_")
                            .map(
                              (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                            )
                            .join(" ")}
                          :{" "}
                        </span>
                        <span>{value}</span>
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
