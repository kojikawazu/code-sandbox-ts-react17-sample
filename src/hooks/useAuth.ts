import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

// 認証(カスタムhook)
export const useAuth = () => {
  // hooks
  // history
  const history = useHistory();

  // カスタムhooks
  // メッセージ表示
  const { showMessage } = useMessage();
  // ログインユーザー
  const { setLoginUser } = useLoginUser();

  // state
  // ローディングステータス
  const [loading, setLoading] = useState(false);

  // ログイン関数
  const login = useCallback(
    (id: string) => {
      // ローディング中
      setLoading(true);

      // データ取得
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            // ユーザー取得できた
            // 管理者フラグを追加する
            const isAdmin = res.data.id === 10 ? true : false;
            // ログインユーザーを設定
            setLoginUser({ ...res.data, isAdmin });
            // メッセージ表示
            showMessage({
              title: "ログインしました",
              status: "success"
            });
            // /homeへ画面遷移
            history.push("/home");
          } else {
            // ユーザーが取得できない
            // メッセージ表示
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error"
            });
            // ローディング解除
            setLoading(false);
          }
        })
        .catch(() => {
          // エラー
          // メッセージ表示
          showMessage({
            title: "ログインできません",
            status: "error"
          });
          // ローディング解除
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  // hooksの返却
  return { login, loading };
};
