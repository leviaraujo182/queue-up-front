const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWithAuth(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const token = localStorage.getItem("token");
  const headers = new Headers(init?.headers);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const url =
    typeof input === "string" && !input.startsWith("http")
      ? `${baseURL}${input}`
      : input;

  return window.fetch(url, {
    ...init,
    headers,
  });
}

export async function fetchWithoutAuth(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const headers = new Headers(init?.headers);

  const url =
    typeof input === "string" && !input.startsWith("http")
      ? `${baseURL}${input}`
      : input;

  return window.fetch(url, {
    ...init,
    headers,
  });
}
