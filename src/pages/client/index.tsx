"use client";

import PDFDocument from "@/components/PDFDocument";
import { Font } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import type { NextPageWithLayout } from "../_app";

// パス解決の問題でFont設定を分ける必要がありそう
Font.register({
  family: "HackGen35",
  fonts: [
    {
      src: "/fonts/HackGen35-Regular.ttf", // client
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: "/fonts/HackGen35-Bold.ttf", // client
      fontStyle: "normal",
      fontWeight: "bold",
    },
  ],
});

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
