import { memo, VFC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// propsの型
type Props = {
  onOpen: () => void;
};

// メニューアイコンボタンコンポーネント
export const MenuIconButton: VFC<Props> = memo((props) => {
  // propsの分割代入
  const { onOpen } = props;

  return (
    /** 通常は block、breakpointは none */
    <IconButton
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
});
