import { useState } from "react";
import { logUserOut } from "../apollo";
import Feed from "../components/feed/Feed";
import CommentModal from "../components/modal/CommentModal";
import PageTitle from "../components/PageTitle";

function Home() {
  const [commentModal, setCommentModal] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const [photoId, setPhotoId] = useState(null);
  const closeCommentModal = () => {
    setCommentId(null);
    setPhotoId(null);
    setCommentModal(false);
    document.body.style.overflow = "";
  };
  const openCommentModal = (commentId, photoId) => {
    if (typeof commentId === "number" && commentId !== null) {
      setCommentId(commentId);
    }
    if (typeof photoId === "number" && photoId !== null) {
      setPhotoId(photoId);
    }
    setCommentModal(true);
    document.body.style.overflow = "hidden";
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
        photoId={photoId}
      />
    </>
  );
}

export default Home;
