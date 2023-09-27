import tw from '../../helpers/tw';
import AppIcon from '../../components/AppIcon';
import logoUrl from  "../../assets/img/logo.svg";
import SidebarFooter from './SidebarFooter';

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

class SidebarLink {
  name: string;
  icon: string;
  link: string
  constructor(name: string, icon: string, link: string) {
    this.name = name;
    this.icon = icon;
    this.link = link;
  }
}

const links = [
  new SidebarLink('Проекты', 'layers', '/projects'),
  new SidebarLink('Заметки', 'documents', '/documents'),
  new SidebarLink('Блог', 'ParagraphQuote', '/feed'),
  new SidebarLink('Обо мне', 'UserProfile', '/about'),
  new SidebarLink('Настройки', 'Setting1', '/settings'), // Settings будет не страницей, а менюшкой в сайдбаре
];
const parsedLinks = links.map(link => {
  return (
    <NavItem key={link.link}>
      <NavItemIcon icon={link.icon}/>
      <NavItemText>{link.name}</NavItemText>
    </NavItem>
  );
});

export default function Sidebar() {
  return (
    <Aside>
      <Logo src={logoUrl} alt="Моё лого"/>
      <Nav>
        <Ul>
          { parsedLinks }
        </Ul>
      </Nav>
      <SidebarFooter/>
    </Aside>
  );
}
