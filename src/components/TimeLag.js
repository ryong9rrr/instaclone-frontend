import styled from "styled-components";
import PropTypes from "prop-types";

const timelag = (time) => {
  let sec = (Date.now() - time) / 1000;

  if (sec < 60) {
    return `${Math.floor(sec)}초`;
  } else if (60 < sec && sec < 3600) {
    sec = sec / 60;
    return `${Math.floor(sec)}분`;
  } else if (3600 < sec && sec < 3600 * 24) {
    sec = sec / 3600;
    return `${Math.floor(sec)}시간`;
  } else if (3600 * 24 < sec && sec < 3600 * 24 * 7) {
    sec = sec / 3600 / 24;
    return `${Math.floor(sec)}일`;
  } else {
    sec = sec / 3600 / 24 / 7;
    return `${Math.floor(sec)}주`;
  }
};

const STimeLag = styled.span`
  margin: 10px;
  font-size: ${(props) => props.size};
  opacity: 0.7;
`;

function TimeLag({ createdAt }) {
  return <STimeLag size="0.7rem">{timelag(createdAt)} 전</STimeLag>;
}

TimeLag.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default TimeLag;
