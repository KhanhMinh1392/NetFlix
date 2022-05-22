import React, { memo } from "react";
import { Modal } from "rsuite";
import "./ModalTrailer.css";
function ModalTrailer({ trailer, setShow, show }) {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="modal-container">
      <Modal open={show} onClose={handleClose} size="lg">
        <Modal.Body>
          <iframe
            width="100%"
            height="500px"
            src={`https://www.youtube-nocookie.com/embed/${trailer}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default memo(ModalTrailer);
