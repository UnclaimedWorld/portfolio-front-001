import tw from "../../helpers/tw";
import { DefaultProps } from "../../types/default-props";

const Article = tw.article`
  p-5 
  rounded-[20px] 
  bg-[#4D3426] 
  text-white 
  w-1/5 
  min-w-80
`;
const Title = tw.h3`
  text-[20px] 
  font-bold 
  leading-6 
  tracking-[-0.4px]
  mb-4
`;
const Paragraph = tw.p`
  text-[12px] 
  leading-[18px] 
  text-[#ccc] 
  mb-4
`;
const Time = tw.time`
  mix-blend-overlay 
  text-[14px] 
  leading-5 
  font-sub
`;

interface NotePreviewType extends DefaultProps {
  name: string;
  description: string;
  time: Date;
}

export default function NotePreview(props: NotePreviewType) {
  return (
    <Article>
      <Title>{props.name}</Title>
      <Paragraph>{props.description}</Paragraph>
      <Time
        dateTime={props.time.toISOString()}
      >{props.time.toLocaleString()}</Time>
    </Article>
  );
}
