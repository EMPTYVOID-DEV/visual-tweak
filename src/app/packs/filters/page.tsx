"use client";

import { filtersPackOptions, filtersPackSettings } from "@client/filtersPack";
import ServerPacksWrapper from "@components/serverPacksWrapper";

function Operations() {
  return (
    <div className="w-svm min-h-svh overflow-hidden bg-backgroundColor flex flex-col justify-center items-center px-[2.5%] py-[2.5%]">
      <ServerPacksWrapper
        settingsMap={filtersPackSettings}
        operations={filtersPackOptions}
      />
    </div>
  );
}

export default Operations;
