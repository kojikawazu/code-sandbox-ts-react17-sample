import { memo, ReactNode, VFC } from "react";

import { Header } from "../orgranisms/layout/Header";

// propsの型
type Props = {
  children: ReactNode;
};

// ヘッダーレイアウトコンポーネント
export const HeaderLayout: VFC<Props> = memo((props) => {
  // propsの分割代入
  const { children } = props;

  return (
    <>
      <Header />
      {children}
    </>
  );
});
