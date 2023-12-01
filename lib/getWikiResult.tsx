
export default async function getWikiResult(searchTerm: string) {

    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '10',
        prop: 'pageimages|extracts',
        exchars: '200',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })
    const res = await fetch (`https://en.wikipedia.org/w/api.php? + ${searchParams}`)
    const data = await res.json()

  return data
}
