import React from "react";
import Modal from "react-modal";

const SampleModal = ({ isOpen, setIsModalOpen, index }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={() => setIsModalOpen(false)}>
      {index}
    </Modal>
  );
};

export default SampleModal;
