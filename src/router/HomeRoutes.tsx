import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagement";
import { Setting } from "../components/pages/Setting";
import { Page404 } from "../components/pages/Page404";

// ホームルーティング配列データ
export const homeRoutes = [
  // ホーム
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  // ユーザー管理
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  // 設定
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  // 404
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
