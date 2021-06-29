import styled from "styled-components";

const SFooter = styled.footer`
  div {
    color: ${(props) => props.theme.footerColor};
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
