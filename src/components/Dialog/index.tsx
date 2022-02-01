import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

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
  & > div {
    height: 60%;
    background-color: ${props => props.theme.background?.paper};
  }
`;

const Dailog = ({
  children,
  open = false,
  onClose,
}: {
  children: ReactNode | ReactNode[];
  open?: boolean;
  onClose?: () => void;
}) => {
  return createPortal(
    <>
      {open && (
        <Modal>
          <div>{children}</div>
        </Modal>
      )}
    </>,
    document.getElementById('dialog-root') as HTMLElement,
  );
};

export default Dailog;
