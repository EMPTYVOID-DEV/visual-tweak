import { NextResponse } from "next/server";

export function createResponse<A>(
  data: BodyInit,
  status: number,
  headers: Record<string, string> = {}
) {
  const response = new NextResponse(data, { status });
  for (let header in headers) {
    response.headers.append(header, headers[header]);
  }
  return response;
}
