import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.common?.black};
  margin-bottom: 2em;
  padding-bottom: 0.5em;
  & h2 {
    font-size: 1.5em;
    color: ${props => props.theme.text?.primary};
  }
  & button {
    background: transparent;
    border: none;
    color: ${props => props.theme.text?.primary};
    font-size: 1.5em;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    min-height: 300px;
    min-width: 400px;
    padding: 20px;
    background-color: ${props => props.theme.background?.paper};
  }
`;

const Dailog = ({
  children,
  open = false,
  title,
  onClose,
}: {
  children: ReactNode | ReactNode[];
  open?: boolean;
  title?: string;
  onClose?: () => void;
}) => {
  return createPortal(
    <>
      {open && (
        <Modal>
          <div>
            <ModalHeader>
              <h2>{title}</h2>
              <button type="button" onClick={onClose}>
                &times;
              </button>
            </ModalHeader>
            {children}
          </div>
        </Modal>
      )}
    </>,
    document.getElementById('dialog-root') as HTMLElement,
  );
};

export default Dailog;
