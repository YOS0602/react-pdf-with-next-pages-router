"use client";

import { PDFDocument } from "@/components/PDFDocument";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import type { NextPageWithLayout } from "../_app";

/**
 * Client Side でPDFをレンダリングする
 */
const Page: NextPageWithLayout = () => {
  const [pdfElement, setPdfElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setPdfElement(<PDFDocument />);
    return () => {
      setPdfElement(null);
    };
  }, []);

  return pdfElement ? (
    <PDFViewer className="mx-auto" width={1200} height={1000}>
      {pdfElement}
    </PDFViewer>
  ) : (
    <p>Loading...</p>
  );
};

export default Page;
