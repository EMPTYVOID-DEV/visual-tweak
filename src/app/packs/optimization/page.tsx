"use client";

import {
  optimizationPackOptions,
  optimizationPackSettings,
} from "@client/optimizationPack";
import ServerPacksWrapper from "@components/serverPacksWrapper";

function Operations() {
  return (
    <div className="w-svm min-h-svh overflow-hidden bg-backgroundColor flex flex-col justify-center items-center px-[2.5%] py-[2.5%]">
      <ServerPacksWrapper
        settingsMap={optimizationPackSettings}
        operations={optimizationPackOptions}
      />
    </div>
  );
}

export default Operations;
