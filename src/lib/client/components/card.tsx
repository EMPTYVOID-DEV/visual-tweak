import Link from "next/link";
import { Pack } from "../types.client";

function Card({ title, description, href }: Pack) {
  return (
    <Link
      href={`/packs/${href}`}
      className="flex flex-col gap-2 rounded-bdr border-2 border-foregroundColor shadow-md shadow-foregroundColor p-3 hover:bg-primaryColor/30"
    >
      <span className="text-primaryColor/80 font-semibold">{title}</span>
      <p className="text-foregroundColor">{description}</p>
    </Link>
  );
}

export default Card;
