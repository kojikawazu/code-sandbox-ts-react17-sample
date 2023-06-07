import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from "react";

import { LoginUser } from "../../types/api/loginUser";

// ログインユーザーコンテキストタイプの型定義
type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

// ログインユーザーコンテキスト
const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// ログインユーザープロバイダー
export const LoginUserProvider = (props: { children: ReactNode }) => {
  // propの分割代入
  const { children } = props;
  // state
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  /**
 * <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
 */
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};

// ログインユーザーの参照(カスタムhooks)
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
