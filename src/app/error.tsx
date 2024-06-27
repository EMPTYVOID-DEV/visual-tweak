"use client";

import Button from "@/lib/client/components/button";
import Link from "next/link";

type Props = { error: Error; reset: () => void };

function Error({ error }: Props) {
  return (
    <div className="w-svw h-svh flex flex-col gap-4 bg-gradient-to-b from-backgroundColor to-dangerColor">
      <h1 className="text-dangerColor">Oop</h1>
      <span className="text-foregroundColor">
        {error.message || "It seems something went wrong"}
      </span>
      <Button variant="danger">
        <Link href="/" className="text-backgroundColor">
          Go back to home
        </Link>
      </Button>
    </div>
  );
}

export default Error;
