interface AvatarProps {
  text: string;
}

const TestAvatar = ({ text }: AvatarProps) => {
  return <div style={{ backgroundColor: "blue" }}>{text}</div>;
};

export default TestAvatar;
