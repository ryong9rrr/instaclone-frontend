import { useState } from "react";
import { logUserOut } from "../apollo";
import Feed from "../components/feed/Feed";
import CommentModal from "../components/Modal/CommentModal";
import PageTitle from "../components/PageTitle";

function Home() {
  const [commentModal, setCommentModal] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const closeCommentModal = () => {
    setCommentId(null);
    setCommentModal(false);
  };
  const openCommentModal = (id) => {
    if (typeof id === "number" && id !== null) {
      setCommentId(id);
    }
    setCommentModal(true);
  };
  return (
    <>
      <PageTitle />
      <Feed openCommentModal={openCommentModal} />
      <button onClick={() => logUserOut()}>Log out</button>
      <CommentModal
        state={commentModal}
        closeCommentModal={closeCommentModal}
        commentId={commentId}
      />
    </>
  );
}

export default Home;
