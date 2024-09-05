import axios, { AxiosError } from "axios";
import { Either, left, right } from "fp-ts/lib/Either";
import { arrayBufferToJSON, recordToFormData } from "./transformers";

export async function Post(
  endpoint: string,
  data: Record<string, string | Blob>
): Promise<Either<string, File>> {
  const fd = recordToFormData(data);
  const url=`${process.env.NEXT_PUBLIC_API_HOST}/api/${endpoint}`

  try {
    const response = await axios.post(url, fd, {
      responseType: "arraybuffer",
    });

    const file = new File([response.data], "result", {
      type: response.headers["content-type"],
    });

    return right(file);
  } catch (error) {
    let errorMessage: string = '';
    if (error instanceof AxiosError) {
      const jsonData = arrayBufferToJSON<{error:string}>(error.response?.data);
      if (jsonData._tag == "Some") errorMessage = jsonData.value.error;
    }
    return left(errorMessage);
  }
}
