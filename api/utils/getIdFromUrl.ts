export function getIdFromUrl(url: string): string {
  const id = url.split('/').at(-2);

  if (!id || isNaN(Number(id))) {
    throw new Error(`Не удалось получить ID из URL: ${url}`);
  }

  return id;
}
