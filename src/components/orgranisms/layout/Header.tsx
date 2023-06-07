/** eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

// ヘッダーコンポーネント
export const Header: VFC = memo(() => {
  // hooksの分割代入
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 画面遷移
  const history = useHistory();

  // ホーム画面ボタン押下時の挙動
  const onClickHome = useCallback(() => {
    // ホーム画面へ
    history.push("/home");
  }, []);
  // ユーザー管理画面ボタン押下時の挙動
  const onClickUserManagement = useCallback(() => {
    // ユーザー管理画面へ
    history.push("/home/user_management");
  }, []);
  // 設定画面ボタン押下時の挙動
  const onClickSetting = useCallback(() => {
    // 設定画面へ
    history.push("/home/setting");
  }, []);

  return (
    <>
      {/** FlexBox */}
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        {/** タイトル */}
        {/** ユーザー管理アプリ */}
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          {/** 通常はmd、breakpointはlg */}
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>

        {/** メニュー */}
        {/** 通常は none、breakpointは flex */}
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          {/** ユーザー一覧 */}
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>ユーザー一覧</Link>
          </Box>
          {/** 設定 */}
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>

        {/** ハンバーガーメニュー */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      {/** スライドメニュー */}
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
