import styled from "styled-components";

const SSeparator = styled.div`
  margin: 20px 0px 30px 0px;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-color: ${(props) => props.theme.borderColor};
    height: 1px;
    width: 100%;
  }
  span {
    margin: 0px 10px;
    color: ${(props) => props.theme.footerColor};
    font-weight: 600;
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div></div>
      <span>OR</span>
      <div></div>
    </SSeparator>
  );
}

export default Separator;
