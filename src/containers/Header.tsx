import React from 'react';
import Styled from 'styled-components';

interface HeaderProps {}

const list = ['암호화폐 거래소', '선물 거래소', '코인세일', '지갑계정'];

const HeaderWrapper = Styled.header`
  padding: 0 3rem;
  background: #2e3e47;
  height: 60px;
  display: flex;
  justify-content: space-between;
  & > ul {
    display: flex;
    height: 100%;
    align-items: center;
    li {
      color: #d1d1d1;
      font-size: 1.5rem;
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
      &:hover {
        cursor: pointer;
        color: white;
        font-weight: bold;
      }
    }
  }
  p {
    color: white;
    align-items: center;
    display: flex;
    font-size: 1.5rem;
  }
`;

const Header: React.SFC<HeaderProps> = () => {
  return (
    <HeaderWrapper>
      <ul>
        {list.map((item, i) => (
          <li key={`header${i.toString()}`}>{item}</li>
        ))}
      </ul>
      <p>darren</p>
    </HeaderWrapper>
  );
};

export default Header;
