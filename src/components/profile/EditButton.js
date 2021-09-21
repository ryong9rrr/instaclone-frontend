import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Icon } from "../Icon";
import { NormalButton as Btn } from "../shared";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function EditButton() {
  return (
    <>
      <Link to="/">
        <Btn className="edit" side="9px">
          프로필 편집
        </Btn>
      </Link>
      <Icon>
        <FontAwesomeIcon icon={faCog} size="lg" />
      </Icon>
    </>
  );
}

export default EditButton;
