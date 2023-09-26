import AppIcon from "./components/AppIcon";
import logoUrl from  "./assets/img/logo.svg";

export const App = () => {
  const text = 'отправиться туда отправиться туда ';
  const elems = text.split('').map((s, idx) => {
    return <div className="h-[60px] absolute left-1/2 origin-[50%_100%] text-[9px] font-extrabold leading-3 letter-spacing-[2.43px] uppercase" key={idx} style={{transform: `translateX(-50%) rotate(${idx * (360 / text.length)}deg)`, }}>{s}</div>
  });

  return (
    <main className="w-full p-[12px] bg-[#141414] h-full flex">
      <aside className="inline-flex flex-col items-start pl-[20px] pr-[10px] py-5 relative self-stretch flex-[0_0_auto] w-[350px]">
        <img className="text-white w-[75px] h-5 block mb-17" alt="logo" src={logoUrl}/>
        <nav>
          <ul className="flex flex-col gap-8">
            <li className="flex items-center gap-[16px]">
              <AppIcon className="text-white" icon="layers"/>
              <p className="font-medium text-[#666] text-[14px] leading-5">Проекты</p>
            </li>
          </ul>
        </nav>
        <div className="w-full mt-auto flex items-center mb-5 px-10 text-[#666] text-[14px] leading-5">
          <p>2018</p>
          <span className="flex-grow mx-5 h-[1px] bg-current"></span>
          <p>2023</p>
        </div>
        <header className="bg-[#1f1f1f] rounded-[32px] p-3">
          <div className="flex items-center gap-[16px] mb-15">
            <img className="w-[62px] h-[62px] border border-white/20 object-cover rounded-full" alt="Image" src="/img/temp/sylvanas.png" />
            <div>
              <h2 className="font-semibold text-white leading-6 mb-1">Дамир Халимов</h2>
              <h1 className="text-[#666] text-[14px] leading-[20px]">Front-end разработчик</h1>
            </div>
          </div>
          <p className="text-[14px] leading-5 text-[#CCC] mb-6">
            Для современного мира существующая теория, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.
          </p>
          <button className="py-3 w-full rounded-full bg-[#8BE517] border-0 text-normal leading-6 text-black flex items-center justify-center">
            <AppIcon className="mr-2" icon="telegram"/>
            Напишите в телеграм
          </button>
        </header>
      </aside>
      <section className="flex items-start gap-[12px] h-full">
        <article className="flex flex-col items-center justify-end px-[12px] py-[19px] bg-[#1e1e1e] rounded-[40px] h-full w-[500px]">
          <img className="w-full h-0 flex-grow object-cover" alt="Image" src="/img/temp/image-01.png" />
          <div className="w-full mb-8 p-10 pb-0 h-60 bg-white/90 rounded-[20px] border border-white/90 backdrop-blur-3xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(64px)_brightness(100%)] text-black">
            <h2 className="font-semibold text-[36px] tracking-[-0.72px] leading-[44px] mb-5">
              Тут мои заметки
            </h2>
            <p className="text-[#666] tracking-[-0.32px] leading-[24px]">
              Пишу о всякой хуете касаемо языков программирования и разные конспекты для себя чтобы казаться умнее
            </p>
          </div>

          <div className="w-[120px] h-[120px] text-[#8be517] relative">
            <AppIcon className="absolute w-15 h-15 top-1/2 left-1/2 -ml-7.5 -mt-7.5" icon="Arrow"/>
            <div className="bg-black h-[1px] w-[1px] absolute top-1/2 left-1/2 z-10"></div>
            <div className="relative w-full h-full origin-center animate-[spin_infinite_linear_20s]">
              {elems}
            </div>
          </div>
        </article>
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
    </main>
  );
};

export default App
