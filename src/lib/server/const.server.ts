export const conversionOptions = {
  jpeg: {
    quality: 90,
    chromaSubsampling: "4:4:4",
    mozjpeg: true,
  },
  png: {
    compressionLevel: 9,
    adaptiveFiltering: true,
    palette: true,
  },
  webp: {
    quality: 90,
    lossless: false,
    nearLossless: false,
    smartSubsample: true,
  },
  avif: {
    quality: 90,
    lossless: false,
    effort: 9,
  },
  tiff: {
    quality: 90,
    compression: "lzw",
    predictor: "horizontal",
  },
};
