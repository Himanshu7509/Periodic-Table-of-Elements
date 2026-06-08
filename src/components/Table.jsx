import React from "react";
import data from "../components/data/data.json";
import { useState, createContext, useContext } from "react";
import { ThemeContext } from "../App";
import Modal from "./Modal";
import Actinides from "./rows/Actinides";
import SeventhhRow from "./rows/SeventhRow";
import FirstRow from "./rows/FirstRow";
import SecondRow from "./rows/SecondRow";
import ThirdRow from "./rows/ThirdRow";
import FourthRow from "./rows/FourthRow";
import FifthRow from "./rows/FifthRow";
import SixthRow from "./rows/SixthRow";
import Lanthanides from "./rows/Lanthanides";

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
      <div className="py-4 px-4 md:px-8 max-w-7xl mx-auto">
        <Modal open={open} toggleModal={toggleModal} modalData={modalData} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group One
        </h2>
        <FirstRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group Two
        </h2>
        <SecondRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group Three
        </h2>
        <ThirdRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group Four
        </h2>
        <FourthRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group Five
        </h2>
        <FifthRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group Six
        </h2>
        <SixthRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Group Seven
        </h2>
        <SeventhhRow data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Lanthanides
        </h2>
        <Lanthanides data={data.elements} />

        <h2 className={`md:hidden py-2 text-${groupColor} font-semibold`}>
          Actinides
        </h2>
        <Actinides data={data.elements} />
      </div>
    </ModalContext.Provider>
  );
}
export { ModalContext };
