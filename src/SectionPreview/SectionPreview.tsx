import AppIcon from "../components/AppIcon";
import tw from "../helpers/tw";

const Section = tw.article`
  flex 
  flex-col 
  items-center 
  justify-end 
  px-[12px] 
  py-[19px] 
  bg-[#1e1e1e] 
  rounded-[40px] 
  h-full 
  w-[500px]
`;
const Image = tw.img`
  w-full 
  h-0 
  flex-grow 
  object-cover
`;
const TextWrap = tw.div`
  w-full 
  mb-8 
  p-10 
  pb-0 
  h-60 
  bg-white/90 
  rounded-[20px] 
  border 
  border-white/90 
  backdrop-blur-3xl 
  backdrop-brightness-[100%] 
  [-webkit-backdrop-filter:blur(64px)_brightness(100%)] 
  text-black
`;
const TextHeading = tw.h2`
  font-semibold 
  text-[36px] 
  tracking-[-0.72px] 
  leading-[44px] 
  mb-5
`;
const TextDescription = tw.p`
  text-[#666] 
  tracking-[-0.32px] 
  leading-[24px]
`;
const NextButton = tw.button`
  w-[120px] 
  h-[120px] 
  text-[#8be517] 
  relative
`;
const NextButtonIcon = tw(AppIcon)`
  absolute 
  w-15 
  h-15 
  top-1/2 
  left-1/2 
  -ml-7.5 
  -mt-7.5
`;
const NextLettersWrap = tw.p`
  relative 
  w-full 
  h-full 
  origin-center 
  animate-[spin_infinite_linear_20s] 
  text-[9px] 
  font-extrabold 
  leading-3 
  letter-spacing-[2.43px] 
  uppercase
`;
const NextLetter = tw.span`
  h-1/2 
  absolute 
  left-1/2 
  origin-[50%_100%]
`;

const textArray = 'отправиться туда отправиться туда '.split('');
const letterSpacing = 360 / textArray.length;

export default function SectionPreview() {
    return (
      <Section>
        <Image alt="Image" src="/img/temp/image-01.png" />
        <TextWrap>
          <TextHeading>
            Тут мои заметки
          </TextHeading>
          <TextDescription>
            Пишу о всякой хуете касаемо языков программирования и разные конспекты для себя чтобы казаться умнее
          </TextDescription>
        </TextWrap>

        <NextButton>
          <NextButtonIcon icon="Arrow"/>
          <NextLettersWrap>
            {
              textArray.map((s, idx) => {
                return <NextLetter key={idx} style={{transform: `translateX(-50%) rotate(${idx * letterSpacing}deg)`, }}>{s}</NextLetter>
              })
            }
          </NextLettersWrap>
        </NextButton>
      </Section>
    )
}