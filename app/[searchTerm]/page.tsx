import getWikiResult from "@/lib/getWikiResult"
import Item from "./components/Item"


type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResults> = await getWikiResult(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replace('%20', ' ')

    if(!data.query?.pages) {
        return {
            title: `No results found for ${displayTerm}`,
        }
    }
     return {
            title: `Search results for ${displayTerm}`,
            description: `Search results for ${displayTerm}`,
        }
}

export default async function SearchResults({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResults> = await getWikiResult(searchTerm)
    const data = await wikiData

    const results : Result[] | undefined = data.query?.pages ? Object.values(data.query.pages) : []   
    
    const displayTerm = searchTerm.replace('%20', ' ')

    const renderContent = (
        <main className="container mx-auto p-4 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center">Search Results for {displayTerm}</h1>
                {results.map((result) => {
                    return <Item key={result.pageid} result={result} />
                })
            }        
        </main>

    )


  return renderContent
}
