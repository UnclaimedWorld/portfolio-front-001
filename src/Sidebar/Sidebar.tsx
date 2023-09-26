import tw from 'tailwind-styled-components';
import AppIcon from '../components/AppIcon';
import logoUrl from  "../assets/img/logo.svg";

const Aside = tw.aside`
  flex 
  shrink-0
  flex-col 
  items-start 
  pl-[20px] 
  pr-[10px] 
  py-5 
  relative 
  w-[350px]
`;
const Logo = tw.img`
  text-white 
  w-[75px] 
  h-5 
  block 
  mb-17
`;
const Nav = tw.nav``;
const Ul = tw.ul`
  flex 
  flex-col 
  gap-8
`;
const NavItem = tw.li`
  flex 
  items-center 
  gap-[16px]
`;
const NavItemIcon = tw(AppIcon)`
  text-white
`;
const NavItemText = tw.p`
  font-medium 
  text-[#666] 
  text-[14px] 
  leading-5
`;
const Timeline = tw.div`
  w-full 
  mt-auto 
  flex 
  items-center 
  mb-5 
  px-10 
  text-[#666] 
  text-[14px] 
  leading-5
`;
const TimelineSeparator = tw.span`
  flex-grow 
  mx-5 
  h-[1px] 
  bg-current
`;
const TimelineText = tw.p``;
const Footer = tw.header`
  bg-[#1f1f1f] 
  rounded-[32px] 
  p-3
`;
const FooterHead = tw.div`
  flex 
  items-center 
  mb-15
`;
const FooterAvatar = tw.img`
  w-[62px] 
  h-[62px] 
  border 
  border-white/20 
  object-cover 
  rounded-full
  mr-4
`;
const FooterHeadingWrap = tw.div``;
const FooterHeading = tw.h2`
  font-semibold 
  text-white 
  leading-6 
  mb-1
`;
const FooterSubheading = tw.h1`
  text-[#666] 
  text-[14px] 
  leading-[20px]
`;
const FooterParagraph = tw.p`
  text-[14px] 
  leading-5 
  text-[#CCC] 
  mb-6
`;
const FooterButton = tw.button`
  py-3 
  w-full 
  rounded-full 
  bg-[#8BE517] 
  border-0 
  text-normal 
  leading-6 
  text-black 
  flex 
  items-center 
  justify-center
`;
const FooterButtonIcon = tw(AppIcon)`
  mr-2
`;

const links = [
  {
    name: 'Проекты',
    icon: 'layers',
    link: '/projects'
  }
];
const currentYear = new Date().getFullYear();

export default function Sidebar() {
  return (
    <Aside>
      <Logo src={logoUrl} alt="Моё лого"/>
      <Nav>
        <Ul>
          {
            links.map(link => {
              return (
                <NavItem key={link.link}>
                  <NavItemIcon icon={link.icon}/>
                  <NavItemText>{link.name}</NavItemText>
                </NavItem>
              );
            })
          }
        </Ul>
      </Nav>
      <Timeline>
        <TimelineText>2018</TimelineText>
        <TimelineSeparator/>
        <TimelineText>{ currentYear }</TimelineText>
      </Timeline>
      <Footer>
        <FooterHead>
          <FooterAvatar src="/img/temp/sylvanas.png" alt="Моё фото"/>
          <FooterHeadingWrap>
            <FooterHeading>Дамир Халимов</FooterHeading>
            <FooterSubheading>Front-end разработчик</FooterSubheading>
          </FooterHeadingWrap>
        </FooterHead>
        <FooterParagraph>
          Для современного мира существующая теория, а также свежий взгляд на
          привычные вещи — безусловно открывает новые горизонты для новых
          принципов формирования материально-технической и кадровой базы.
        </FooterParagraph>
        <FooterButton>
          <FooterButtonIcon icon="telegram"/>
          Напишите в телеграм
        </FooterButton>
      </Footer>
    </Aside>
  );
}
