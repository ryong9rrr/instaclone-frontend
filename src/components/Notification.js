import styled from "styled-components";

const SNotification = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.3);
  text-align: center;
  div {
    border: 1px solid black;
    border-radius: 5px;
    position: relative;
    top: 30%;
    width: 50%;
    margin: 0 auto;
    padding: 30px;
    background-color: white;
    opacity: 1;
  }
`;

function Notification({ state, message }) {
  return state ? (
    <SNotification>
      <div>🎉 {message}</div>
    </SNotification>
  ) : null;
}

export default Notification;
