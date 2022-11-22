type HeadingEmojis = "🔎";

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    emoji: HeadingEmojis;
    copy: string;
}

const Heading = ({ emoji, level, copy }: HeadingProps) => {
    const Tag: keyof JSX.IntrinsicElements = `h${level}`;
    return <Tag className="heading" data-emoji={emoji}>{copy}</Tag>;
};

export default Heading;
