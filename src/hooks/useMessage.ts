import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";

// propsの型
type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
};

// メッセージ(カスタムhooks)
export const useMessage = () => {
  const toast = useToast();

  // メッセージ出力関数
  const showMessage = useCallback(
    (props: Props) => {
      // propsに分割代入
      const { title, status } = props;

      toast({
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true
      });
    },
    [toast]
  );

  // hooksを返却
  return { showMessage };
};
