import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.div`
  border: blue 1px solid;

  > ul {
    display: flex;

    > li {
      width: 33%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      white-space: nowrap;

      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Icon name="money"/>
                    <Link to="/money">money-标签</Link>
                </li>
                <li>
                    <Icon name="labels"/>
                    <Link to="/tags">tags-标签</Link>
                </li>
                <li>
                    <Icon name="statistics"/>
                    <Link to="/statistics">statistics-标签</Link>
                </li>
            </ul>
        </NavWrapper>

    );
};
export default Nav;
