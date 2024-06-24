import Card from "@components/card";
import { operations } from "@client/const.client";

function Cards() {
  return (
    <section className="w-full grid grid-cols-4 auto-rows-fr  gap-4 md:grid-cols-1 z-50">
      {operations.map((el) => (
        <Card key={el.href} {...el} />
      ))}
    </section>
  );
}

export default Cards;
