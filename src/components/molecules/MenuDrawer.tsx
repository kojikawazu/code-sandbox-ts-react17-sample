import { memo, VFC } from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody
} from "@chakra-ui/react";

// propsの型
type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

// メニュードロワーコンポーネント
// スライドするメニュー
export const MenuDrawer: VFC<Props> = memo((props) => {
  // propsの分割代入
  const {
    onClose,
    isOpen,
    onClickHome,
    onClickUserManagement,
    onClickSetting
  } = props;

  return (
    <>
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            {/** 各メニュー */}
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={onClickHome}>
                TOP
              </Button>
              <Button w="100%" onClick={onClickUserManagement}>
                ユーザー一覧
              </Button>
              <Button w="100%" onClick={onClickSetting}>
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
