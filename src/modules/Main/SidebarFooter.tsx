import tw from '../../helpers/tw';
import AppIcon from '../../components/AppIcon';

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

const currentYear = new Date().getFullYear();

export default function SidebarFooter() {
  return (
    <>
      <Timeline>
        <TimelineText>2018</TimelineText>
        <TimelineSeparator />
        <TimelineText>{currentYear}</TimelineText>
      </Timeline>
      <Footer>
        <FooterHead>
          <FooterAvatar src="/img/temp/sylvanas.png" alt="Моё фото" />
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
          <FooterButtonIcon icon="telegram" />
          Напишите в телеграм
        </FooterButton>
      </Footer>
    </>
  );
}
