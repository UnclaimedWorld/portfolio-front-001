import React from "react";
import AppIcon from "./components/AppIcon";

export const App = () => {
  return (
    <div className="flex flex-col items-start gap-[10px] p-[12px] relative bg-[#141414] h-full">
      <div className="gap-[32px] flex items-center justify-center relative flex-[0_0_auto] flex-grow">
        <div className="inline-flex flex-col items-start pl-[20px] pr-0 py-[20px] relative self-stretch flex-[0_0_auto]">
          <div className="gap-[10px] pt-0 pb-[60px] px-0 inline-flex items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Teko-Regular',Helvetica] font-normal text-[#8ae516] text-[32px] tracking-[0] leading-[32px] whitespace-nowrap">
              DAMEER
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-[32px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <AppIcon className="!relative !w-[24px] !h-[24px] text-white" size={24} icon="Layers"/>
              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                Проекты
              </div>
            </div>
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <AppIcon className="!relative !w-[24px] !h-[24px] text-white" size={24} icon="Documents"/>
              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                Заметки
              </div>
            </div>
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <AppIcon className="!relative !w-[24px] !h-[24px] text-white" size={24} icon="ParagraphQuote"/>
              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                Блог
              </div>
            </div>
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <AppIcon className="!relative !w-[24px] !h-[24px] text-white" size={24} icon="UserProfile"/>
              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                Обо мне
              </div>
            </div>
            <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
              <AppIcon className="!relative !w-[24px] !h-[24px] text-white" size={24} icon="Setting1"/>
              <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                Настройки
              </div>
            </div>
          </div>
          <div className="relative flex-1 self-stretch w-full grow" />
          <div className="flex w-[320px] items-center gap-[20px] pt-0 pb-[20px] px-[40px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Sometype_Mono-Regular',Helvetica] font-normal text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
              2018
            </div>
            <img className="relative flex-1 grow h-px object-cover" alt="Line" src="line-6.svg" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Sometype_Mono-Regular',Helvetica] font-normal text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
              2023
            </div>
          </div>
          <div className="relative w-[320px] h-[84px] bg-[#1f1f1f] rounded-[80px] overflow-hidden">
            <div className="inline-flex items-center gap-[16px] relative top-[12px] left-[12px]">
              <div className="relative w-[62px] h-[62px] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] rounded-[60px] overflow-hidden border border-solid border-[#ffffff33]">
                <img className="absolute w-[60px] h-[60px] top-0 left-0 object-cover" alt="Image" src="image-2.png" />
              </div>
              <div className="inline-flex flex-col items-start gap-[4px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-white text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                  Дамир Халимов
                </div>
                <div className="relative w-fit [font-family:'Manrope-Regular',Helvetica] font-normal text-[#666666] text-[14px] tracking-[0] leading-[20px] whitespace-nowrap">
                  Front-end разработчик
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-[12px] relative flex-[0_0_auto]">
          <div className="flex flex-col items-center justify-center px-[12px] py-[19px] relative flex-[0_0_auto] bg-[#1e1e1e] rounded-[40px] overflow-hidden">
            <img className="relative w-[443px] h-[615px] object-cover" alt="Image" src="image-9.png" />
            <div className="flex flex-col w-[476px] h-[240px] items-start gap-[20px] p-[40px] relative bg-[#ffffffe6] rounded-[20px] border border-solid backdrop-blur-3xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(64px)_brightness(100%)]">
              <div className="relative w-[405px] mt-[-1.00px] mr-[-9.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-black text-[36px] tracking-[-0.72px] leading-[44px]">
                Тут мои заметки
              </div>
              <p className="relative w-[405px] mr-[-9.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#666666] text-[16px] tracking-[-0.32px] leading-[24px]">
                Пишу о всякой хуете касаемо языков программирования и разные конспекты для себя чтобы казаться умнее
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App
