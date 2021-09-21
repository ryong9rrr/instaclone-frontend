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
  padding: 10px 16px;
`;

const Column = styled.div`
  width: 33%;
  &:first-child {
    width: 100%;
    * {
      margin-right: 5px;
    }
  }
  &:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &:last-child {
    width: 100%;
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
      cache.modify({
        id: photoId,
        fields: {
          isLiked(prev) {
            return !prev;
          },
          likes(prev) {
            return isLiked ? prev - 1 : prev + 1;
          },
        },
      });
    }
  };
  const [toggleLike, { error }] = useMutation(MUTATION_toggleLike, {
    variables: {
      id,
    },
    update: updateToggleLike,
  });

  if (error) {
    return <div>PostIcons.js error</div>;
  }

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
