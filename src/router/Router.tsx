import React from "react";
import { Route, Switch } from "react-router-dom";

import { LoginUserProvider } from "../hooks/providers/useLoginUserProvider";
import { homeRoutes } from "./HomeRoutes";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

// ルーティングコンポーネント
export const Router = () => {
  return (
    /** スイッチ */
    <Switch>
      {/** ログインユーザーのプロバイダー */}

      {/** / ルーティング */}
      <Route exact path="/">
        {/** ログイン画面 */}
        <Login />
      </Route>
      {/** /home ルーティング */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          /** スイッチ */
          <Switch>
            {/** /home配下のルーティング */}
            {homeRoutes.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/** ヘッダーレイアウト付き */}
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      {/** それ以外 ルーティング */}
      <Route path="">
        {/** 404 画面 */}
        <Page404 />
      </Route>
    </Switch>
  );
};
