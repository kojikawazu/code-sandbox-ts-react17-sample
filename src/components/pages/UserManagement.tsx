/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from "react";
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure
} from "@chakra-ui/react";

import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";
import { UserCard } from "../orgranisms/user/UserCard";
import { UserDetailModal } from "../orgranisms/user/UserDetailModal";

// ユーザー管理画面コンポーネント
export const UserManagement: VFC = memo(() => {
  // hooks取得
  const { onClose, onOpen, isOpen } = useDisclosure();
  // カスタムhooks取得
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  console.log(loginUser);

  // 初回の1回ユーザーデータの取得
  useEffect(() => {
    getUsers();
  }, []);
  // カード押下時の挙動
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        /** ローディング中 */
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {/** ユーザーデータをループ */}
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/160"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      {/** モーダル */}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
      />
    </>
  );
});
