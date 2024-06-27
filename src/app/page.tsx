import Card from "@client/components/card";
import { packs } from "@client/const.client";
import { Boxes } from "@components/boxes";

export default function Page() {
  return (
    <div className="w-svw min-h-svh relative overflow-hidden bg-backgroundColor flex flex-col gap-16 items-center justify-center px-[2.5%] py-8 md:py-16">
      <Boxes />
      <section className="z-50 flex flex-col items-center justify-center gap-4">
        <h1 className="text-primaryColor ">Visual tweak</h1>
        <span className="text-foregroundColor/70 text-center text-balance font-semibold">
          Image Processing Tools for Developers API-driven packs for image
          optimization, filters, enhancements and more. Efficiently process and
          transform images for your applications.
        </span>
      </section>
      <section className="w-full grid grid-cols-2 auto-rows-fr  gap-4 md:grid-cols-1 z-50">
        {packs.map((el) => (
          <Card key={el.href} {...el} />
        ))}
      </section>
    </div>
  );
}
