import { logUserOut } from "../apollo";
import Feed from "../components/feed/Feed";

function Home() {
  return (
    <>
      <Feed />
      <button onClick={() => logUserOut()}>Log out</button>
    </>
  );
}

export default Home;
