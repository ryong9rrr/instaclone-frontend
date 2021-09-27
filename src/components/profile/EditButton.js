import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { solid } from "../FaIcons";
import { Icon } from "../Icon";
import { NormalButton as Btn } from "../shared";

function EditButton() {
  return (
    <>
      <Link to="/">
        <Btn className="edit" side="9px">
          프로필 편집
        </Btn>
      </Link>
      <Icon>
        <FontAwesomeIcon icon={solid.cog} size="lg" />
      </Icon>
    </>
  );
}

export default EditButton;
