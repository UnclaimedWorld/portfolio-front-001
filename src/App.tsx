import tw from "tailwind-styled-components";
import SidebarMenu from "./Sidebar/SidebarMenu";

const BodyWrapper = tw.div`
  bg-cl_background
  py-[1px]
`;
const ContentWrapper = tw.main`
  mx-auto
  my-4
  w-[800px]
  min-h-[calc(100vh_-_34px)]
`;
const SiteLogo = tw.div`
  text-lg
  leading-6
  font-bold
  text-cl_subheading
  absolute
  top-5
  left-8
`;

function App() {
  return (
    <BodyWrapper>
      <SiteLogo>KHALIMOV</SiteLogo>
      <ContentWrapper>
      </ContentWrapper>
      <SidebarMenu className="absolute right-8 top-5 w-[320px]"/>
    </BodyWrapper>
  )
}

export default App
