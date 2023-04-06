import { useCallback, useState } from 'react';

const useSuccessfulModal = () => {
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);

  const handleOpenSuccessfulModal = useCallback(() => {
    setIsModalSuccessOpen(true);
  }, []);

  const handleCloseSuccessfulModal = useCallback(() => {
    setIsModalSuccessOpen(false);
  }, []);
  return {
    isModalSuccessOpen,
    handleOpenSuccessfulModal,
    handleCloseSuccessfulModal,
  };
};
export default useSuccessfulModal;
