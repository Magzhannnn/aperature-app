import styles from "./MyButton.module.css";

interface MyButtonProps {
  text: string;
  className: string;
  onClickHandler: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  text,
  className,
  onClickHandler,
}) => {
  return (
    <div className={`${styles.button} ${className}`} onClick={onClickHandler}>
      {text}
    </div>
  );
};

export default MyButton;
