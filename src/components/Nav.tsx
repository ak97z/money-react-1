import styled from 'styled-components';
import {Link,NavLink} from 'react-router-dom';
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
      .selected{
        color: red;
        .icon{
          fill: red;
        }
      }
    }
  }
`;
const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink activeClassName="selected" to="/money">
                        <Icon name="money"/>money-标签
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/tags">
                        <Icon name="labels"/>tags-标签
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="selected" to="/statistics">
                        <Icon name="statistics"/>statistics-标签
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>

    );
};
export default Nav;
