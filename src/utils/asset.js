// Resolve caminhos de arquivos da pasta public/ considerando o base path
// do Vite (necessário no GitHub Pages, que serve o site numa subpasta).
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
}
