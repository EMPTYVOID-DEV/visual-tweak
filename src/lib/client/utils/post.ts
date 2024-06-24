import axios, { AxiosError } from "axios";
import { Either, left, right } from "fp-ts/lib/Either";
import { arrayBufferToJSON } from "./arrayBufferToJson";

export async function Post(
  url: string,
  data: Record<string, any>
): Promise<Either<string[], Blob>> {
  const fd = new FormData();
  Object.entries(data).forEach((el) => fd.append(el[0], el[1]));

  try {
    const response = await axios.post(url, fd, {
      responseType: "arraybuffer",
    });

    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    return right(blob);
  } catch (error) {
    let errorMessages: string[] = [];
    if (error instanceof AxiosError) {
      const jsonData = arrayBufferToJSON<string[]>(error.response?.data);
      if (jsonData._tag == "Some") errorMessages = jsonData.value;
    }
    return left(errorMessages);
  }
}
