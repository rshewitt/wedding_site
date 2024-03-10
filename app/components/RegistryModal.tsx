import React, { useState, useEffect, useRef } from "react";

// TODO: update modal to enable closing by clicking background. resource below.
// https://codesandbox.io/p/sandbox/friendly-hofstadter-qtrtn?file=%2Fsrc%2Findex.js%3A14%2C3-28%2C5

interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className="rounded-lg">
      {hasCloseBtn && (
        <div className="text-right">
            <button className="modal-close-btn" onClick={handleCloseModal}>
            X
            </button>
        </div>
      )}
      {children}
    </dialog>
  );
};

interface NewsletterModalData {
  email: string;
  digestType: string;
}

const initialNewsletterModalData: NewsletterModalData = {
  email: '',
  digestType: 'weekly',
};

interface NewsletterModalProps {
  isOpen: boolean;
  onSubmit: (data: NewsletterModalData) => void;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({
  onSubmit,
  isOpen,
  onClose,
}) => {

  const focusInputRef = useRef<HTMLInputElement | null>(null);
  const [formState, setFormState] = useState<NewsletterModalData>(
    initialNewsletterModalData
  );

  useEffect(() => {
    if (isOpen && focusInputRef.current) {
      setTimeout(() => {
        focusInputRef.current!.focus();
      }, 0);
    }
  }, [isOpen]);

  return (
    <Modal
      hasCloseBtn={true}
      isOpen={isOpen}
      onClose={onClose}>
        <h4
          className="text-center font-head mb-6 font-bold text-2xl text-black"
          >
          Registry
        </h4>
      <div className="text-center mb-6">
        What we want most for our wedding is to have all our friends and family there to celebrate
        the occasion with us, and so, more than anything we would simply enjoy your presence.
        (We mean it!) That said, we also enjoy dishware and shiny new four-slice toaster too,
        so if you really would like to get us something, you can find some suggestion on our registry
      </div>
      <div className="text-center py-4">
        <a 
            className="mb-3 px-2 py-2 text-white text-xl rounded-lg bg-green-950" 
            href="https://www.zola.com/registry/brittanyandreid2025" 
            target="_blank" 
            rel="noreferrer">
            Continue to Registry
        </a>
      </div>
    </Modal>
  );
};

const RegistryModal = () => {
  const [isNewsletterModalOpen, setNewsletterModalOpen] = useState<boolean>(false);
  const [newsletterFormData, setNewsletterFormData] = useState<NewsletterModalData | null>(null);

  const handleOpenNewsletterModal = () => {
    setNewsletterModalOpen(true);
  };

  const handleCloseNewsletterModal = () => {
    setNewsletterModalOpen(false);
  };

  const handleFormSubmit = (data: NewsletterModalData): void => {
    setNewsletterFormData(data);
    handleCloseNewsletterModal();
  };

  return (
    <>
      <div className=" fixed bottom-0 right-0 mr-3 mb-3">
        <button 
            onClick={handleOpenNewsletterModal}
            className="px-4 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
        >Registry</button>
      </div>

      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onSubmit={handleFormSubmit}
        onClose={handleCloseNewsletterModal} />
    </>
  );
};

export default RegistryModal