import styled from "styled-components";

const ModalOverlay = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function ModalContainer({ children }) {
  return (
    <ModalOverlay>
      <ModalWrapper tabIndex="-1">{children}</ModalWrapper>
    </ModalOverlay>
  );
}

export default ModalContainer;
