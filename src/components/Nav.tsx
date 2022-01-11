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

      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

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
                    <Link to="/money"><Icon name="money"/>money-标签</Link>
                </li>
                <li>
                    <Link to="/tags"><Icon name="labels"/>tags-标签</Link>
                </li>
                <li>
                    <Link to="/statistics"><Icon name="statistics"/>statistics-标签</Link>
                </li>
            </ul>
        </NavWrapper>

    );
};
export default Nav;
