import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

// propsの型
type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

// プライマリーボタンコンポーネント
export const PrimaryButton: VFC<Props> = memo((props) => {
  // propsの分割代入
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <>
      <Button
        bg="teal.400"
        color="white"
        _hover={{ opacity: 0.8 }}
        disabled={disabled || loading}
        isLoading={loading}
        onClick={onClick}
      >
        {children}
      </Button>
    </>
  );
});
