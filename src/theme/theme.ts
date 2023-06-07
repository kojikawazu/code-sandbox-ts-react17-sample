import { extendTheme } from "@chakra-ui/react";

// テーマ(スタイル)
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "gra.800"
      }
    }
  }
});

// 外部export
export default theme;
