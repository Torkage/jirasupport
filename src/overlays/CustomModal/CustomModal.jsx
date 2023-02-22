import { Modal } from "@mantine/core";
import useCustomModal from "./useCustomModal";

const CustomModal = () => {
  const { modalParams, modalActions } = useCustomModal();

  return (
    <Modal opened={modalParams.isOpen} onClose={modalActions.closeModal} title={modalParams.title}>
      {modalParams.content}
    </Modal>
  );
};

export default CustomModal;
