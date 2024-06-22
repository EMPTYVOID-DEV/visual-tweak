import Card from "@/lib/client/components/card";
import { operations } from "@/lib/client/const.client";
import { Boxes } from "@client/components/boxes";

export default function Page() {
  return (
    <div className="w-svw min-h-svh relative overflow-hidden bg-backgroundColor flex flex-col gap-16 items-center justify-center px-[2.5%] py-8 md:py-16">
      <Boxes />
      <section className="w-3/5 md:w-[90%] flex flex-col gap-4  items-center z-50">
        <h1 className="text-primaryColor ">Visual tweak</h1>
        <span className="text-foregroundColor/70 text-center font-semibold">
          Turbocharge Your Images: Free Pro-Level Tools at Your Fingertips!
          Resize, enhance, compress, and more. One-click magic for stunning
          photos. Transform your visuals now!
        </span>
      </section>
      <section className="w-full grid grid-cols-4 auto-rows-fr  gap-4 md:grid-cols-1 z-50">
        {operations.map((el) => (
          <Card key={el.href} {...el} />
        ))}
      </section>
    </div>
  );
}
