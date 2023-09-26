import tw from "./helpers/tw";
import SectionPreview from "./SectionPreview/SectionPreview";
import Sidebar from "./Sidebar/Sidebar";

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
      <section className="flex items-start gap-[12px] h-full">
        <SectionPreview/>
      </section>
      <div>
        <article className="p-5 rounded-[20px] bg-[#4D3426] text-white w-1/5 min-w-[320px]">
          <h3 className="text-[20px] font-bold leading-6 tracking-[-0.4px] mb-4">JavaScript</h3>
          <p className="text-[12px] leading-[18px] text-[#ccc] mb-4">
          Ясность нашей позиции очевидна: консультация с широким активом создаёт предпосылки для новых предложений. Есть над чем задуматься: независимые государства могут быть заблокированы в рамках своих собственных рациональных ограничений. Как принято считать, акционеры крупнейших компаний в равной степени предоставлены сами себе.
          </p>
          <time className="mix-blend-overlay text-[14px] leading-5 font-sub" dateTime="2023-09-12T14:00:00">12.09.2023 / 14:40</time>
        </article>
      </div>
    </Main>
  );
};

export default App
