import Button from "@client/components/button";
import { Boxes } from "@components/boxes";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-svw h-svh relative overflow-hidden bg-backgroundColor flex flex-col px-[2.5%] items-center justify-center">
      <Boxes />
      <div className="z-50 flex flex-col items-center justify-center gap-4">
        <h1 className="text-primaryColor ">Visual tweak</h1>
        <span className="text-foregroundColor/70 text-center text-balance font-semibold">
          Turbocharge Your Images: Free Pro-Level Tools at Your Fingertips!
          Convert formats ,resize, compress ,filters and more. One-click magic
          for stunning photos.
        </span>
        <Button className="shadow-primaryColor shadow-lg">
          <div className="flex items-center gap-1">
            <Link className="font-bold text-backgroundColor" href="/operations">
              Let tweak
            </Link>
            <ArrowRightCircle />
          </div>
        </Button>
      </div>
    </div>
  );
}
