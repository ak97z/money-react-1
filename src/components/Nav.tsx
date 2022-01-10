import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.div`
  border: blue 1px solid;

  > ul {
    display: flex;

    > li {
      width: 33%;
      text-align: center;
      padding: 16px;
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/money">money-标签</Link>
                </li>
                <li>
                    <Link to="/tags">tags-标签</Link>
                </li>
                <li>
                    <Link to="/statistics">statistics-标签</Link>
                </li>
            </ul>
        </NavWrapper>

    );
};
export default Nav;