import { useCallback, useState } from "react";

import { LoginUser } from "../types/api/loginUser";

// propsの型
type Props = {
  id: number;
  users: Array<LoginUser>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示する(カスタムhooks)
export const useSelectUser = () => {
  // state
  // 選択中ユーザー
  const [selectedUser, setSelectedUser] = useState<LoginUser | null>();

  // 選択処理
  const onSelectUser = useCallback((props: Props) => {
    // propsの分割代入
    const { id, users, onOpen } = props;
    // ターゲットの取得
    const targetUser = users.find((user) => user.id === id);
    // ターゲットの設定
    setSelectedUser(targetUser ?? null);
    // モーダル開く
    onOpen();
  }, []);

  // hooksを返却
  return { onSelectUser, selectedUser };
};
