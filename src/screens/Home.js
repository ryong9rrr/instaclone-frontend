import { logUserOut } from "../apollo";
import Feed from "../components/feed/Feed";
import PageTitle from "../components/PageTitle";

function Home() {
  return (
    <>
      <PageTitle />
      <Feed />
      <button onClick={() => logUserOut()}>Log out</button>
    </>
  );
}

export default Home;
