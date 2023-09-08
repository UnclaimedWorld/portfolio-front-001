import tw from "tailwind-styled-components";
import AppIcon from "../components/AppIcon";

const Heading = tw.h3`
    px-5
    uppercase
    text-[10px]
    leading-4
    font-600
    text-cl_heading
    tracking-[0.2px]
`;
const List = tw.ul`
    list-none
    p-0
    m-0
`;
const ListItem = tw.li``;
const LinkItem = tw.a`
    flex
    items-center
    px-5
    py-3
    text-sm
    leading-5
    font-semibold
    text-cl_heading
    cursor-pointer

    hover:rounded-[40px]
    hover:bg-cl_border
    group
`;
const LinkIcon = tw(AppIcon)`
    ml-auto
    group-hover:text-cl_link
`;
const ChevronIcon = tw(AppIcon)`
    text-cl_subheading
`;

export default function NavigationMenu() {
    const navigation = [
        {
            name: 'Главная',
            link: '',
            icon: 'grid'
        },
        {
            name: 'Все проекты',
            link: '',
            icon: 'layers'
        },
        {
            name: 'Мои заметки',
            link: '',
            icon: 'documents'
        },
        {
            name: 'Обо мне',
            link: '',
            icon: 'user'
        },
    ]
    return (<section>
        <Heading className="mb-3">Навигация</Heading>
        <nav>
        <List>
            {
                navigation.map(nav => (
                    <ListItem key={nav.name}>
                        <LinkItem href={nav.link}>
                            { nav.name }
                            <LinkIcon icon={nav.icon}/>
                        </LinkItem>
                    </ListItem>
                ))
            }
            <ListItem>
                <LinkItem>
                    Настройки
                    <ChevronIcon className="ml-1" icon="chevron-down"/>
                    <LinkIcon icon="settings"/>
                </LinkItem>
            </ListItem>
        </List>
        </nav>
        </section>
    )
}