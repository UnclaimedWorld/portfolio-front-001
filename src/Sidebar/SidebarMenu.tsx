import tw from "tailwind-styled-components";
import { DefaultProps } from "../types/default-props";
import AboutMenu from "./AboutMeMenu";
import NavigationMenu from "./NavigationMenu";

const Section = tw.aside``;
const Divider = tw.hr`
    mx-4
    border-cl_border-dark
`;

export default function SidebarMenu(props: DefaultProps) {
    return (
        <Section className={props.className || ''}>
            <AboutMenu className="mb-5"/>
            <Divider className="mb-5"/>
            <NavigationMenu/>
        </Section>
    )
}