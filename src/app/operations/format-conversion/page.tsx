import Back from "@components/back";
import Converter from "@containers/format-conversion/converter";

function FormatConversion() {
  return (
    <div className="w-svw h-svh bg-backgroundColor flex flex-col items-center justify-center gap-8 px-[2.5%] ">
      <Back />
      <Converter />
      <p className="text-foregroundColor/70 text-center font-semibold ">
        The accepted formats for uploaded and target images are JPEG, JPG, PNG,
        WebP, AVIF and TIFF.
        <br /> The file size should not exceed 5MB.
      </p>
    </div>
  );
}

export default FormatConversion;
