import { makePDF } from "@/server/makePDF";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fileName, fileURL }) => {
  return (
    <>
      <p>サーバーサイドで作成したPDFを表示しています。</p>
      <object
        className="mx-auto"
        title={fileName}
        data={fileURL}
        type="application/pdf"
        width={1000}
        height={1200}
      />
    </>
  );
};

export const getServerSideProps = (async () => {
  const { fileName, url } = await makePDF();
  return { props: { fileName, fileURL: url } };
}) satisfies GetServerSideProps<{ fileName: string; fileURL: string }>;

export default Page;
