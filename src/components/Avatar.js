import styled from "styled-components";

const AvatarImg = styled.div`
  display: block;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  min-height: 100%;
  background: ${(props) =>
      props.url ? `url("${props.url}")` : `url("/img/noneUser.png")`}
    bottom center;
  background-size: cover;
`;

function Avatar({ url, size }) {
  return <AvatarImg size={size ? size : "25px"} url={url} />;
}

export default Avatar;
