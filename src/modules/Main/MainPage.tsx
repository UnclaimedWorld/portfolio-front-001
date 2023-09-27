import tw from "../../helpers/tw";
import SectionPreview from "./SectionPreview";

const SectionLinks = tw.section`
  flex 
  items-start 
  gap-3
  h-full
`;

class SectionLink {
  name: string;
  description: string;
  preview: string;
  constructor(name: string, description: string, preview: string) {
    this.name = name;
    this.description = description;
    this.preview = '/img/temp/' + preview + '.png';
  }
}
const sectionLinks = [
  new SectionLink('Тут мои заметки', 'Пишу о всяком касаемо языков программирования и разные конспекты для себя, чтобы не забыть', 'image-01'),
  new SectionLink('Здесь мой блог', 'Тут веду типа личный блог. Статьи и наверное новости из мира айти и тд', 'image-02'),
  new SectionLink('А это мои работы', 'Собрал только самые нормальные проекты так как в оосновном приходится работать с NDA', 'image-03'),
];
const links = sectionLinks.map(link => <SectionPreview {...link} key={link.name}/>);

export const MainPage = () => {
  return (
    <SectionLinks>{links}</SectionLinks>
  );
};

export default MainPage
