function Home({ hi }) {
  return (
    <div>
      <h1>Home!</h1>
      <button onClick={() => hi(false)}>Log Out!</button>
    </div>
  );
}

export default Home;
