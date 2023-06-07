import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

// propsの型
type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示する(カスタムhooks)
export const useSelectUser = () => {
  // カスタムhook
  // メッセージ表示
  const { showMessage } = useMessage();

  // state
  // 選択中ユーザー
  const [selectedUser, setSelectedUser] = useState<User>();

  // 選択処理
  const onSelectUser = useCallback((props: Props) => {
    // propsの分割代入
    const { id, users, onOpen } = props;
    // ターゲットの取得
    const targetUser = users.find(user => user.id === id);
    if (!targetUser) {
      showMessage({ title: "ユーザーが見つかりません", status: "error" });
      return;
    } else {
      // ターゲットの設定
      setSelectedUser(targetUser);
      // モーダル開く
      onOpen();
    }
  }, []);

  // hooksを返却
  return { onSelectUser, selectedUser };
};
