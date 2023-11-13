import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiNewspaper,
  HiOutlineHome,
  HiOutlinePencilSquare,
} from "react-icons/hi2";


const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: #d1d5db;
    font-size: 1rem;
    font-weight: 500;
    padding: .8rem 1.6rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #f3f4f6;
    background-color: #111827;
    border-radius: 5px;
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: #6b7280;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #4f46e5;
  }
`;

function MainNav({setShowSideBar}) {
  return (
    <nav>
      <ul className="flex flex-col gap-1">
        <li onClick={() => {setShowSideBar(false)}}>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li onClick={() => {setShowSideBar(false)}}>
          <StyledNavLink to="/courses">
            <HiNewspaper />
            <span>Courses</span>
          </StyledNavLink>
        </li>
        <li onClick={() => {setShowSideBar(false)}}>
          <StyledNavLink to="/reports">
            <HiOutlinePencilSquare />
            <span>Attendance Reports</span>
          </StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
