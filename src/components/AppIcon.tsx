import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import { DefaultProps } from "../types/default-props";
import { ReactComponent as AB } from "../assets/icons/user.svg";

export default function AppIcon(props: DefaultProps & { icon: string, size?: number }) {
    const [icon, setIcon] = useState(null);

    async function getIcon() {
        const module = await import(`../assets/icons/${props.icon}.svg`);
        setIcon(module.ReactComponent);
    }

    useEffect(() => {
        getIcon();
    });
    if(!icon) {
        return <div className={props.className || ''} style={{width: (props.size || 20) + 'px', height: (props.size || 20) + 'px'}}></div>
    }

    return <div className={'svg-icon ' + (props.className || '') }>{icon}</div>;
    // svg-icon
    // w-[22px]
}