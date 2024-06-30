import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { AiFillInfoCircle } from "react-icons/ai";
import "react-responsive-modal/styles.css";

const MessageInformationIcon = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <AiFillInfoCircle
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        size="30px"
        color="#354834"
        onClick={handleClick}
      />
      <Modal
        open={open}
        classNames={{
          modal: "rounded-lg",
        }}
        onClose={handleClick}
        blockScroll={false}
        center
      >
        <h4 className="text-2xl-wel lg:text-2xl-wel font-squiggly text-center font-head mb-6 text-black">
          Message Information
        </h4>
        <div className="font-normal text-center text-black mb-6">
          The information you provide in this form goes directly to us in a
          google sheet document for our own record keeping and nowhere else.
        </div>
      </Modal>
    </>
  );
};

export default MessageInformationIcon;
