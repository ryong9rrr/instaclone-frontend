import { AvatarImg } from "./shared";

function Avatar({ url }) {
  return <AvatarImg width="25px" height="25px" src={url ? url : null} />;
}

export default Avatar;
