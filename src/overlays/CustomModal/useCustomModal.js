import { atom, useAtom } from "jotai";

export const modalParamsAtom = atom({
  isOpen: false,
  title: "",
  content: null,
});

const useCustomModal = () => {
  const [modalParams, setModalParams] = useAtom(modalParamsAtom);

  const modalActions = {
    openModal: ({ title, content }) => {
      setModalParams({
        isOpen: true,
        title,
        content,
      });
    },

    closeModal: () => {
      setModalParams({
        isOpen: false,
        title: "",
        content: null,
      });
    },
  };

  return {
    modalParams,
    modalActions,
  };
};

export default useCustomModal;
