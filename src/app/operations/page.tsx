"use client";

import Transformer from "@client/components/transformer";
import { Provider } from "jotai";

function Operations() {
  return (
    <div className="w-svm min-h-svh overflow-hidden bg-backgroundColor flex flex-col justify-center items-center px-[2.5%] pt-8 pb-32">
      <Provider>
        <Transformer />;
      </Provider>
    </div>
  );
}

export default Operations;
