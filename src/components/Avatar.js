import { AvatarImg } from "./shared";

function Avatar({ url }) {
  return <AvatarImg size="25px" src={url ? url : null} />;
}

export default Avatar;
