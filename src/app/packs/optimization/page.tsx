"use client";

import Back from "@components/back";
import {
  optimizationPackOptions,
  optimizationPackSettings,
} from "@client/optimizationPack";
import ServerPacksWrapper from "@components/serverPacksWrapper";

function Optimzation() {
  return (
    <div className="w-svm min-h-svh overflow-hidden bg-backgroundColor flex flex-col justify-center items-center px-[2.5%] py-[2.5%]">
      <Back />
      <ServerPacksWrapper
        settingsMap={optimizationPackSettings}
        operations={optimizationPackOptions}
      />
    </div>
  );
}

export default Optimzation;
