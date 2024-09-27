import path from "node:path";
import { Font } from "@react-pdf/renderer";

/**
 * サーバーサイドからpublicフォルダ内の静的ファイルにアクセスするための絶対パスを取得する
 */
export const getPublicAssetPath = (fileName: string): string =>
  path.resolve("./public", fileName);

// パス解決の問題でFont設定をサーバーサイド処理用に分ける必要がありそう
Font.register({
  family: "HackGen35",
  fonts: [
    {
      src: getPublicAssetPath("fonts/HackGen35-Regular.ttf"),
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: getPublicAssetPath("fonts/HackGen35-Bold.ttf"),
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
});
