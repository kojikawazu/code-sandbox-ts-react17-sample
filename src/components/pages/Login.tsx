import { ChangeEvent, memo, useState, VFC } from "react";
import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";

// ログイン画面コンポーネント
export const Login: VFC = memo(() => {
  // hooksの分割代入
  // 認証
  const { login, loading } = useAuth();

  // state
  // ログイン中ユーザー
  const [userId, setUserId] = useState<string>("");

  // 入力した時の挙動
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    // 入力データをuserIdに設定
    setUserId(e.target.value);
  };
  // ログインボタン押下時の挙動
  const onClickLogin = () => {
    // ログイン処理
    login(userId);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        {/** タイトル */}
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          {/** ユーザーID入力欄 */}
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onChangeUserId}
          />
          {/** ログインボタン */}
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
