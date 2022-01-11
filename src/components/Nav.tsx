import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

require('icons/money.svg');
require('icons/statistics.svg');
require('icons/labels.svg');

const NavWrapper = styled.div`
  border: blue 1px solid;

  > ul {
    display: flex;

    > li {
      width: 33%;
      text-align: center;
      padding: 4px 0 ;
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
      white-space:nowrap;
      .icon{
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

                    <Link to="/money">
                        <svg className="icon">
                            <use xlinkHref="#money"/>
                        </svg><br/>
                        money-标签</Link>
                </li>
                <li>
                    <Link to="/tags">
                        <svg className="icon">
                            <use xlinkHref="#labels"/>
                        </svg><br/>
                        tags-标签</Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <svg className="icon">
                            <use xlinkHref="#statistics"/>
                        </svg><br/>
                        statistics-标签</Link>
                </li>
            </ul>
        </NavWrapper>

    );
};
export default Nav;