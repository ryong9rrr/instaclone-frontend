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
  margin: 10px;
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

function PostIcons({ id, isLiked }) {
  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;

    if (ok) {
      const photoId = `Photo:${id}`;
      const fragment = gql`
        fragment BSName on Photo {
          isLiked
          likes
        }
      `;
      const result = cache.readFragment({
        id: photoId,
        fragment,
      });

      if ("isLiked" in result && "likes" in result) {
        const { isLiked: cacheIsLiked, likes: cacheLikes } = result;
        cache.writeFragment({
          id: photoId,
          fragment,
          data: {
            isLiked: !cacheIsLiked,
            likes: isLiked ? cacheLikes - 1 : cacheLikes + 1,
          },
        });
      }
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
