import { logUserOut } from "../apollo";

function Home() {
  return (
    <>
      <div>Home</div>
      <button onClick={() => logUserOut()}>Log out</button>
    </>
  );
}

export default Home;
