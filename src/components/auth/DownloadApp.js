import styled from "styled-components";

const SDownloadApp = styled.div`
  text-align: center;
  div:first-child {
    padding: 25px 0px;
  }
`;

function DownloadApp() {
  return (
    <SDownloadApp>
      <div>Get the app.</div>
      <div>
        <span>App Store</span>
        <span>Google Play</span>
      </div>
    </SDownloadApp>
  );
}

export default DownloadApp;
