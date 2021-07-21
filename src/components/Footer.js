import styled from "styled-components";

const SFooter = styled.footer`
  margin: 40px 0px;
  div {
    color: ${(props) => props.theme.gray};
    text-align: center;
  }
`;

function Footer() {
  return (
    <SFooter>
      <div>About...</div>
    </SFooter>
  );
}

export default Footer;
