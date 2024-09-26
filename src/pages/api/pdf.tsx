import path from "node:path";
// Next.js API route support: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import PDFDocument from "@/components/PDFDocument";
import ReactPDF, { Font } from "@react-pdf/renderer";
import type { NextApiRequest, NextApiResponse } from "next";

const srcPath = (fileName: string) => path.resolve("./public", fileName);

// パス解決の問題でFont設定を分ける必要がありそう
Font.register({
  family: "HackGen35",
  fonts: [
    {
      src: srcPath("fonts/HackGen35-Regular.ttf"),
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: srcPath("fonts/HackGen35-Bold.ttf"),
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<never>
) {
  const stream = await ReactPDF.renderToStream(<PDFDocument />);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    'inline; filename="react-pdf-sample.pdf"'
  );
  stream
    .pipe(res)
    .on("end", () => console.log("Done streaming, response sent."));
}
