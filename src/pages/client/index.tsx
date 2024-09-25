"use client";

import dynamic from "next/dynamic";
import type { NextPageWithLayout } from "../_app";

const DynamicPDFDocument = dynamic(
  () => import("@/components/PDFDocument").then((mod) => mod.MyPDFViewer),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

/**
 * Client Side でPDFをレンダリングする
 */
const Page: NextPageWithLayout = () => {
  return <DynamicPDFDocument />;
};

export default Page;
