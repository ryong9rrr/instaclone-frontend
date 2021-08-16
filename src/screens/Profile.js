import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();

  return <h1>{params?.username} profile!</h1>;
}

export default Profile;
