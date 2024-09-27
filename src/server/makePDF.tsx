import "@/server/pdf-font";
import PDFDocument from "@/components/PDFDocument";
import { getPublicAssetPath } from "@/server/pdf-font";
import * as ReactPDF from "@react-pdf/renderer";

/**
 * サーバーサイドでPDFを生成し、publicフォルダにファイルとして出力する
 */
export const makePDF = async () => {
  const pdfFileName = "generated-in-server.pdf";
  await ReactPDF.renderToFile(<PDFDocument />, getPublicAssetPath(pdfFileName));
  return { fileName: pdfFileName, url: `/${pdfFileName}` };
};
