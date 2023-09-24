function createUrl(pathname: string, params: URLSearchParams): string {
  const paramsString: string = params.toString()
  const queryString: string = `${paramsString.length ? "?" : ""}${paramsString}`

  return `${pathname}${queryString}`
}

function ensureStartsWith(stringToCheck: string, startsWith: string): string {
  return stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`
}

const clsx = (...classes: string[]) => classes.filter(Boolean).join(" ")

export { createUrl, ensureStartsWith, clsx }
