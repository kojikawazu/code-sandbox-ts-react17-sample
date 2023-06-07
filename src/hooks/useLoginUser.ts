import { useContext } from "react";

import {
  LoginUserContextType,
  LoginUserContext
} from "../providers/LoginUserProvider";

// ログインユーザーの参照(カスタムhooks)
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
