interface AvatarProps {
  text: string;
}

const TestAvatar = ({ text }: AvatarProps) => {
  return <div style={{backgroundColor: "red"}}>{text}</div>;
};

export default TestAvatar;
