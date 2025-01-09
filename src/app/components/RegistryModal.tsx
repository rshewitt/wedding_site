import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const RegistryModal = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div id="registry_button" className="fixed bottom-0 right-0 mr-3 mb-3">
      <button
        onClick={handleClick}
        className="px-4 py-4 transition-all text-lg font-normal w-full rounded-lg bg-[#0f2e31] outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
      >
        Registry
      </button>
      <Modal
        open={open}
        classNames={{
          modal: "rounded-lg",
        }}
        onClose={handleClick}
        blockScroll={false}
        center
      >
        <h4 className="text-3xl-wel lg:text-3xl-wel font-squiggly text-center font-head mb-6 text-black">
          Registry
        </h4>
        <div className="font-normal text-center text-black mb-6">
          What we want most for our wedding is to have all our friends and
          family there to celebrate the occasion with us, and so, more than
          anything we would simply enjoy your presence. (We mean it!) That said,
          we also enjoy dishware and shiny new kitchen gadgets too. If you
          really would like to get us something, you can find some suggestions
          on our registry below.
        </div>
        <div className="text-center py-4">
          <a
            id="registry2_button"
            className="mb-3 px-4 py-4 text-white text-lg font-normal rounded-lg bg-[#0f2e31]"
            href="https://www.zola.com/registry/brittanyandreid2025"
            target="_blank"
            rel="noreferrer"
          >
            Continue to Registry
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default RegistryModal;
