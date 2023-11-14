export function getUrl(searchValue: string | null | undefined): string {
  const filter = searchValue ? '/?name=' + searchValue : '';
  return 'https://rickandmortyapi.com/api/character' + filter;
}
