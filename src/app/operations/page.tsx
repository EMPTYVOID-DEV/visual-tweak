import { Boxes } from "@/lib/client/components/boxes";
import Transformer from "@client/components/transformer";

function Operations() {
  return (
    <div className="w-svm min-h-svh relative overflow-hidden bg-backgroundColor flex flex-col justify-center items-center px-[2.5%]">
      <Boxes />
      <Transformer />;
    </div>
  );
}

export default Operations;
