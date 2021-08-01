import { gql, useMutation } from "@apollo/client";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Icon } from "../Icon";
import { Query_seeFeed } from "./Feed";

const MUTATION_toggleLike = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const Icons = styled.div`
  display: flex;
  padding: 10px;
`;

const Column = styled.div`
  width: 33%;
  &:first-child {
    * {
      margin-right: 5px;
    }
  }
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

function PostIcons({ id, isLiked, likes }) {
  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;

    if (ok) {
      console.log(
        cache.writeFragment({
          id: `Photo:${id}`,
          fragment: gql`
            fragment BSName on Photo {
              isLiked
              likes
            }
          `,
          data: {
            isLiked: !isLiked,
            likes: isLiked ? likes - 1 : likes + 1,
          },
        })
      );
    }
  };
  const [toggleLike, { data, loading, error }] = useMutation(
    MUTATION_toggleLike,
    {
      variables: {
        id,
      },
      update: updateToggleLike,
    }
  );

  return (
    <Icons>
      <Column>
        <Icon onClick={toggleLike}>
          <FontAwesomeIcon
            style={{ color: isLiked ? "tomato" : "inherit" }}
            icon={isLiked ? SolidHeart : faHeart}
            size="lg"
          />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faComment} size="lg" />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        </Icon>
      </Column>
      <Column>..</Column>
      <Column>
        <Icon>
          <FontAwesomeIcon icon={faBookmark} size="lg" />
        </Icon>
      </Column>
    </Icons>
  );
}

export default PostIcons;
