import styled from "styled-components";

const AvatarImg = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-width: 100%;
  background-color: #2c2c2c;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 50%;
`;

function Avatar({ url, size }) {
  return <AvatarImg size={size ? size : "25px"} src={url ? url : null} />;
}

export default Avatar;
