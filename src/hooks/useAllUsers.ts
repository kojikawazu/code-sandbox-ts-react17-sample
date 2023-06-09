/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";

import { useMessage } from "./useMessage";
import { LoginUser } from "../types/api/loginUser";

// ユーザー全取得コンポーネント(カスタムhooks)
export const useAllUsers = () => {
  // カスタムhooks
  // メッセージ表示
  const { showMessage } = useMessage();

  // state
  // ローディングステータス
  const [loading, setLoading] = useState<boolean>(false);
  // ユーザーリスト
  const [users, setUsers] = useState<Array<LoginUser>>([]);

  // ユーザーの取得関数
  const getUsers = useCallback(() => {
    // ローディング中
    setLoading(true);
    // データの取得
    axios
      .get<Array<LoginUser>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // ユーザーリストの設定
        setUsers(res.data);
      })
      .catch((err) => {
        // エラー
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" });
      })
      .finally(() => {
        // ローディング解除
        setLoading(false);
      });
  }, []);

  // hooksを返却
  return { getUsers, loading, users };
};
