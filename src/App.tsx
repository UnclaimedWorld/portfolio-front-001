import tw from "./helpers/tw";
import SectionPreview from "./modules/Main/SectionPreview";
import Sidebar from "./modules/Main/Sidebar";

const Main = tw.main`
  w-full 
  p-[12px]
  bg-[#141414] 
  h-full 
  flex
`;
const SectionLinks = tw.section`
  flex 
  items-start 
  gap-3
  h-full
`;

export const App = () => {
  return (
    <Main>
      <Sidebar/>
      <SectionLinks>
        <SectionPreview name="Тут мои заметки" description="Пишу о всякой хуете касаемо языков программирования и разные конспекты для себя чтобы казаться умнее" preview="/img/temp/image-01.png"/>
      </SectionLinks>
    </Main>
  );
};

export default App
