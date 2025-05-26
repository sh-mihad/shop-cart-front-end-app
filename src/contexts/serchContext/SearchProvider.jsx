import { useState } from 'react'
import { SearchContext } from './SerchContext'

export default function SearchProvider({children}) {
  const [searchTerms,setSearchTerms] = useState("")
  return (
     <SearchContext.Provider value={{searchTerms,setSearchTerms}}>
      {children}
     </SearchContext.Provider>
  )
}
