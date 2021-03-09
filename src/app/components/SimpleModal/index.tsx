import React from 'react';
import styled from 'styled-components';
import Modal from "@material-ui/core/Modal";
import closeIcon from '../../../assets/images/icons/close.jpg';

const Paper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 18px;
  background: #FFFFFF;
  border-radius: 24px;
  outline: none;
  max-width: 660px;
  width: 80%;
`;
const CloseIcon = styled.img`
  align-self: flex-end;
  cursor: pointer;
`;

interface ISimpleModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const SimpleModal = ({ open, handleClose, children }: ISimpleModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Paper>
        <CloseIcon
          src={closeIcon}
          alt="Close icon"
          onClick={handleClose}
        />
        {children}
      </Paper>
    </Modal>
  );
};
