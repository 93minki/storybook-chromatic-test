interface ButtonProps {
  text: string;
}

const TestButton = ({ text }: ButtonProps) => {
  return <button>{text}</button>;
};

export default TestButton;
