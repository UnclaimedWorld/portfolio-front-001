// Проверить как компонент будет себя вести в асинхронном окружении
import { DefaultProps } from "../types/default-props";

type ReactSVGComponent = React.SVGProps<SVGSVGElement>;

// Импортируем все иконки из папок
const importedIcons = import.meta.glob<true, string, ReactSVGComponent>('../assets/icons/*.svg', { eager: true, import: 'ReactComponent' });
// Добавляем иконки в словарь reactIcons
const reactIcons = Object.entries(importedIcons).reduce<Record<string, ReactSVGComponent>>((acc, [path, ReactComponent]) => {
    // вытаскиваем имя файла из пути до файла
    // Был вариант прописать заранее путь, но vite не поддерживает переменные для глобов
    const name = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    acc[name] = ReactComponent;
    return acc;
}, {});

interface AppIconProps extends DefaultProps {
    icon: string;
    size?: number|string;
}

export default function AppIcon(props: AppIconProps) {
    const Icon = reactIcons[props.icon];
    const sizePX = (props.size || 24) + 'px';
    // Такой подход должен снизить количество запросов от клиента
    return <Icon className={'svg-icon ' + props.className} width={sizePX} height={sizePX}/>
    // svg-icon
    // w-[22px]
}