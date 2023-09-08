import tw from "tailwind-styled-components";
import AppIcon from "../components/AppIcon";
import { DefaultProps } from "../types/default-props";

const Section = tw.article`
    p-[19px]
    rounded-[40px]
    bg-white
    border
    border-cl_border
    shadow-[0px_8px_32px_-16px_#E0E0E0]
`;
const HeadWrap = tw.div`
    flex
    items-center
`;
const Avatar = tw.img`
    w-15
    h-15
    rounded-full
    border
    border-black/20
    object-center
    object-cover
`;
const Heading = tw.h2`
    text-lg
    leading-6
    font-bold
    text-cl_heading
`;
const SubHeading = tw.h1`
    text-sm
    leading-5
    text-cl_subheading
`;
const Divider = tw.hr`
    bd-0
    h-[1px]
    bg-cl_border
`;
const Paragraph = tw(SubHeading)`
    text-cl_heading
`;
const ContactLink = tw.a`
    flex
    items-center
    text-sm
    leading-5
    font-semibold
    text-cl_link
    cursor-pointer
`;

export default function AboutMenu(props: DefaultProps) {
    return (
        <Section className={props.className || ''}>
            <HeadWrap className="mb-5">
                <Avatar className="mr-5" src=""/>
                <div>
                    <Heading className="mb-2">Дамир Халимов</Heading>
                    <SubHeading>Front-end разработчик</SubHeading>
                </div>
            </HeadWrap>
            <Divider className="mb-5"/>
            <Paragraph className="mb-5">Для современного мира существующая теория, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых принципов формирования материально-технической и кадровой базы.</Paragraph>
            <ContactLink>
                <AppIcon className="mr-3" icon="telegram"/>
                Написать в телеграм
            </ContactLink>
        </Section>
    );
}