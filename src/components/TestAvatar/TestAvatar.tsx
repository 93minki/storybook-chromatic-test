interface AvatarProps {
  text: string;
}

const TestAvatar = ({ text }: AvatarProps) => {
  return <div style={{ backgroundColor: "green" }}>{text}</div>;
};

export default TestAvatar;
