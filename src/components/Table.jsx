import React from "react";
import data from "../components/data/data.json";
import { useState, createContext, useContext } from "react";
import { ThemeContext } from "../App";
import Modal from "./Modal";

const ModalContext = createContext();

export default function Table() {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const themeContext = useContext(ThemeContext);
  let groupColor = themeContext ? "white" : "#1e293b";

  function toggleModal(element) {
    setModalData(element);
    setOpen((prevState) => !prevState);
  }

  return (
    <ModalContext.Provider value={toggleModal}>
      <div className="py-4 px-4">
        <Modal open={open} toggleModal={toggleModal} modalData={modalData} />
        table
      </div>
    </ModalContext.Provider>
  );
}
export { ModalContext };
