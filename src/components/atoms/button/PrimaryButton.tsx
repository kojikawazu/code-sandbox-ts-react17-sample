import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

// propsの型
type Props = {
  children: ReactNode;
  isFullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

// プライマリーボタンコンポーネント
export const PrimaryButton: VFC<Props> = (props) => {
  // propsの分割代入
  const {
    children,
    isFullWidth = false,
    disabled = false,
    loading = false,
    onClick,
  } = props;

  return (
    <>
      <Button
        bg="teal.400"
        color="white"
        isFullWidth={isFullWidth}
        _hover={{ opacity: 0.8 }}
        disabled={disabled || loading}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
};
