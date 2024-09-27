import { makePDF } from "@/server/makePDF";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ fileName, fileURL }) => {
  return (
    <>
      <p>fileName: {fileName}</p>
      <p>fileURL: {fileURL}</p>
      <p>ssr component</p>
      <iframe
        className="mx-auto"
        title={fileName}
        src={fileURL}
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
