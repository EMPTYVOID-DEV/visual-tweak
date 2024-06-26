import axios, { AxiosError } from "axios";
import { Either, left, right } from "fp-ts/lib/Either";
import { arrayBufferToJSON, recordToFormData } from "./transformers";

export async function Post(
  url: string,
  data: Record<string, string | Blob>
): Promise<Either<string[], File>> {
  const fd = recordToFormData(data);

  try {
    const response = await axios.post(url, fd, {
      responseType: "arraybuffer",
    });

    const file = new File([response.data], "result", {
      type: response.headers["content-type"],
    });

    return right(file);
  } catch (error) {
    let errorMessages: string[] = [];
    if (error instanceof AxiosError) {
      const jsonData = arrayBufferToJSON<string[]>(error.response?.data);
      if (jsonData._tag == "Some") errorMessages = jsonData.value;
    }
    return left(errorMessages);
  }
}
