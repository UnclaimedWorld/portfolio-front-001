import tw from "./helpers/tw";
import MainPage from "./modules/Main/MainPage";
import Sidebar from "./modules/Main/Sidebar";

const Main = tw.main`
  w-full 
  p-[12px]
  bg-[#141414] 
  h-full 
  flex
`;

export const App = () => {
  return (
    <Main>
      <Sidebar/>
      <MainPage/>
    </Main>
  );
};

export default App
