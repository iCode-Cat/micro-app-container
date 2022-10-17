import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: grid;
  justify-content: flex-start;
  align-items: center;
  background: #072646;
  height: 95px;
  padding: 32px;
  img {
    max-width: 136px;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <a href='/'>
        <img
          src='https://cognni.ai/wp-content/uploads/2020/06/cognni-logo-300x71.png'
          alt=''
        />
      </a>
    </HeaderStyle>
  );
};

export default Header;
