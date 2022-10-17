import styled from 'styled-components';

import React, { useRef, useEffect } from 'react';

const footerObject = {
  menus: [
    {
      name: 'Navigation',
      menuList: [
        {
          title: 'Cloud Intelligence',
          link: 'https://cognni.ai/cloud-intelligence',
        },
        {
          title: 'Use Cases',
          link: 'https://cognni.ai/use-cases/',
        },
        {
          title: 'Blog',
          link: 'https://cognni.ai/blog/',
        },
        {
          title: 'Become a partner',
          link: 'https://cognni.ai/partners',
        },
      ],
    },
    {
      name: 'Legal',
      menuList: [
        {
          title: 'Terms of Use',
          link: 'https://cognni.ai/terms-of-use/',
        },
        {
          title: 'Privacy Policy',
          link: 'https://cognni.ai/privacy-policy/',
        },
        {
          title: 'Support',
          link: 'https://cognni.ai/contact-support/',
        },
        {
          title: 'General enquiries',
          link: 'https://cognni.ai/contact-general/',
        },
      ],
    },
    {
      name: 'Contact',
      menuList: [
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/company/10297664/',
        },
        {
          title: 'Youtube',
          link: 'https://www.youtube.com/channel/UC5_GSCT8nMZPa9Q03K_CEzg',
        },
        {
          title: 'Twitter',
          link: 'https://twitter.com/cognni1',
        },
      ],
    },
  ],
  // socialMedia: [
  //   {
  //     name: 'linkedin',
  //     link: 'https://www.linkedin.com/company/10297664',
  //     icon: 'fab fa-linkedin-in',
  //   },
  //   {
  //     name: 'youtube',
  //     link: 'https://www.youtube.com/channel/UC5_GSCT8nMZPa9Q03K_CEzg',
  //     icon: 'fab fa-youtube',
  //   },
  // ],
  copyRight: `<strong>© ${new Date().getFullYear()} Cognni.</strong> — All Rights Reserved`,
};

const Footer = styled.footer`
  background: #082f50;
  /* grid-template-columns:1fr 1fr; */
  color: #fff;
  display: grid;
  gap: 38px;
  text-align: left;
  padding: 8rem 1.4rem 4rem 1.4rem;
  @media (min-width: 50em) {
    grid-template-columns: 1fr 1fr;
    padding: 8rem 10rem 4rem 10rem;
  }
  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
    padding: 4rem 3.2rem 4rem 3.2rem;
    justify-content: center;
    gap: 20px 130px;
  }
  .logo_wrapper {
    align-content: flex-start;
    display: grid;
    gap: 2rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const LogoImage = styled.img`
  max-width: 150px;
  width: 100%;
`;

const ListWrapper = styled.ul``;
const ListTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 3.8rem;
`;
const ListItem = styled.a`
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    opacity: 80%;
  }
`;
const ListItemWrapper = styled.div`
  display: grid;
  gap: 14px;
`;

const FooterCopyRight = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  /* margin-top: 4rem; */
`;

const FooterSocialWrapper = styled.div`
  align-items: center;
  display: grid;
  gap: 25px;
  grid-auto-flow: column;
  justify-content: flex-start;
`;
const FooterSocialIcon = styled.a`
  font-size: 2rem;
`;

function FooterComp() {
  const { menus, copyRight, socialMedia } = footerObject;
  const footer = useRef();

  const sendMessageParent = ({ message }) => {
    window.parent.postMessage(message, '*');
  };

  //   useEffect(() => {
  //     setInterval(() => {
  //       const scrollSize = footer.current.clientHeight;
  //       sendMessageParent({ message: scrollSize });
  //     }, 100);
  //   }, []);

  return (
    <Footer ref={footer}>
      <div className='logo_wrapper'>
        <LogoImage src='https://cognni.ai/wp-content/uploads/2020/06/cognni-logo-300x71.png' />
        <FooterCopyRight dangerouslySetInnerHTML={{ __html: copyRight }} />
      </div>
      {menus.map((menu, index) => (
        <ListWrapper key={index} id={menu.name}>
          {/* <ListTitle>{menu.name}</ListTitle> */}
          <ListItemWrapper>
            {menu.menuList.map((sub, index) => (
              <ListItem key={index} target='_parent' href={sub.link}>
                {sub.title}
              </ListItem>
            ))}
            {index === menu.menuList.length && (
              <FooterSocialWrapper>
                {socialMedia.map((social, index) => (
                  <FooterSocialIcon
                    key={index}
                    href={social.link}
                    target='_parent'
                    className={social.icon}
                  />
                ))}
              </FooterSocialWrapper>
            )}
          </ListItemWrapper>
        </ListWrapper>
      ))}
    </Footer>
  );
}

export default FooterComp;
