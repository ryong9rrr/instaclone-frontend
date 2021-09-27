import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "../FaIcons";

const clickedStyle = {
  borderTop: "1px solid black",
};

const Container = styled.section`
  display: flex;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const Nav = styled.ul`
  width: 100%;
  display: flex;
  margin: 0 auto;
  width: 410px;
  height: 100%;
  justify-content: space-between;
`;

const NavBtn = styled(NavLink)`
  display: block;
  padding: 15px 0px;
  color: inherit;
`;

const Btn = styled.div`
  width: 55px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  ${Icon} {
    margin-right: 5px;
  }
`;

function UserLink({ data }) {
  return (
    <Container>
      <Nav>
        <li>
          <NavBtn to={`/${data?.userName}/`} exact activeStyle={clickedStyle}>
            <Btn>
              <Icon size="12px">
                <FontAwesomeIcon icon={solid.post} size="sm" />
              </Icon>
              <span>게시물</span>
            </Btn>
          </NavBtn>
        </li>
        <li>
          <NavBtn
            to={`/${data?.userName}/channel/`}
            exact
            activeStyle={clickedStyle}
          >
            <Btn>
              <Icon size="12px">
                <FontAwesomeIcon icon={regular.video} size="sm" />
              </Icon>
              <span>동영상</span>
            </Btn>
          </NavBtn>
        </li>
        <li>
          <NavBtn
            to={`/${data?.userName}/saved/`}
            exact
            activeStyle={clickedStyle}
          >
            <Btn>
              <Icon size="12px">
                <FontAwesomeIcon icon={regular.bookmark} size="sm" />
              </Icon>
              <span>저장됨</span>
            </Btn>
          </NavBtn>
        </li>
        <li>
          <NavBtn
            to={`/${data?.userName}/tagged/`}
            exact
            activeStyle={clickedStyle}
          >
            <Btn>
              <Icon size="12px">
                <FontAwesomeIcon icon={solid.userTag} size="sm" />
              </Icon>
              <span>태그됨</span>
            </Btn>
          </NavBtn>
        </li>
      </Nav>
    </Container>
  );
}

export default UserLink;
