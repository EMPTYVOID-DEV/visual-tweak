import { ArrowBigLeft } from "lucide-react";

import Link from "next/link";

function Back() {
  return (
    <Link
      className="fixed top-[2%] right-[2%] p-3 border-2 border-primaryColor rounded-[50%] hover:bg-primaryColor/60"
      href="/"
    >
      <ArrowBigLeft className="fill-foregroundColor stroke-foregroundColor w-5 h-5 " />
    </Link>
  );
}

export default Back;
