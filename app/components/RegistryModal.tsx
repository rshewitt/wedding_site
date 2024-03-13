import { useState } from "react";
import { Modal } from 'react-responsive-modal';
import "react-responsive-modal/styles.css";

const RegistryModal = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div className="fixed bottom-0 right-0 mr-3 mb-3">
      <button onClick={handleClick} 
        className="px-4 py-4 transition-all text-lg font-semibold w-full rounded-lg bg-green-950 hover:bg-green-800 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
            Registry
        </button>
      <Modal open={open} onClose={handleClick} blockScroll={false} center>
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
                className="mb-3 px-4 py-4 text-white text-xl rounded-lg bg-green-950" 
                href="https://www.zola.com/registry/brittanyandreid2025" 
                target="_blank" 
                rel="noreferrer">
                Continue to Registry
            </a>
        </div>
      </Modal>
    </div>
  );
};

export default RegistryModal