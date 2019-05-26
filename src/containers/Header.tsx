import React from 'react';

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <header>
      <ul>
        <li>암호화폐 거래소</li>
        <li>선물 거래소</li>
        <li>코인세일</li>
        <li>지갑계정</li>
      </ul>
    </header>
  );
};

export default Header;
