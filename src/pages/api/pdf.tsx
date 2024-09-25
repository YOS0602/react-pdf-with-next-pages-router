// Next.js API route support: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import PDFDocument from "@/components/PDFDocument";
import ReactPDF from "@react-pdf/renderer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
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
