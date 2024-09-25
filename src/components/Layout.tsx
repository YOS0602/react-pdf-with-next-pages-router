import Link from "next/link";
import { Button } from "./Button";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      {children}
      <div className="my-6 text-center">
        <Link href="/">
          <Button>Top</Button>
        </Link>
      </div>
    </>
  );
}
