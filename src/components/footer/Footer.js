import styled from "styled-components";

const Container = styled.footer`
  box-sizing: border-box;
  position: ${(props) => props.fix && "fixed"};
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 20px auto 40px;
`;

const LinkBox = styled.div`
  margin-bottom: 10px;
`;

const Row = styled.div`
  color: ${(props) => props.theme.gray};
  text-align: center;
  padding: 5px 0px;
`;

const Btn = styled.span`
  padding: 0px 8px;
  font-size: 12px;
  a {
    color: inherit;
  }
`;

function Footer({ fix, screen }) {
  return (
    <Container fix={fix}>
      <LinkBox>
        <Row>
          <Btn>
            <a
              href="https://about.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              소개
            </a>
          </Btn>
          <Btn>
            <a
              href="https://about.instagram.com/blog"
              target="_blank"
              rel="noreferrer"
            >
              블로그
            </a>
          </Btn>
          <Btn>
            <a
              href="https://about.instagram.com/about-us/careers"
              target="_blank"
              rel="noreferrer"
            >
              채용 정보
            </a>
          </Btn>
          <Btn>
            <a
              href="https://about.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              도움말
            </a>
          </Btn>
          <Btn>
            <a
              href="https://developers.facebook.com/docs/instagram"
              target="_blank"
              rel="noreferrer"
            >
              API
            </a>
          </Btn>
          <Btn>
            <a
              href="https://help.instagram.com/519522125107875"
              target="_blank"
              rel="noreferrer"
            >
              개인정보처리방침
            </a>
          </Btn>
          <Btn>
            <a
              href="https://help.instagram.com/581066165581870"
              target="_blank"
              rel="noreferrer"
            >
              약관
            </a>
          </Btn>
          <Btn>
            <a href="/" target="_blank" rel="noreferrer">
              인기 계정
            </a>
          </Btn>
          <Btn>
            <a href="/" target="_blank" rel="noreferrer">
              해시태그
            </a>
          </Btn>
          <Btn>
            <a href="/" target="_blank" rel="noreferrer">
              위치
            </a>
          </Btn>
          <Btn>
            <a href="/" target="_blank" rel="noreferrer">
              Instagram Lite
            </a>
          </Btn>
        </Row>
        {screen === "auth" && (
          <Row>
            <Btn>뷰티</Btn>
            <Btn>댄스</Btn>
            <Btn>피트니스</Btn>
            <Btn>식음료</Btn>
            <Btn>집 및 정원</Btn>
            <Btn>음악</Btn>
            <Btn>시각 예술</Btn>
          </Row>
        )}
      </LinkBox>
      <Row>
        <Btn>한국어</Btn>
        <Btn>&copy; 2021 Instagram from Facebook</Btn>
      </Row>
    </Container>
  );
}

export default Footer;
