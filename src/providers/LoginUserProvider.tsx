import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState
} from "react";

import { LoginUser } from "../types/api/loginUser";

// ログインユーザーコンテキストタイプの型定義
export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

// propsの型定義
type Props = {
  children: ReactNode;
};

// ログインユーザーコンテキスト
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

// ログインユーザープロバイダー
export const LoginUserProvider = (props: Props) => {
  // propの分割代入
  const { children } = props;
  // state
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
