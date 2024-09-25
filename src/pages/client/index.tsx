"use client";

import PDFDocument from "@/components/PDFDocument";
import dynamic from "next/dynamic";
import type { NextPageWithLayout } from "../_app";

const DynamicPDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

/**
 * Client Side でPDFをレンダリングする
 */
const Page: NextPageWithLayout = () => {
  return (
    <DynamicPDFViewer className="mx-auto" width={1200} height={1000}>
      <PDFDocument />
    </DynamicPDFViewer>
  );
};

export default Page;
