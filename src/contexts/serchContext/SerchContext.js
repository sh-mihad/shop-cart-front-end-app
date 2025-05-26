import { createContext, useContext } from "react";

export const SearchContext = createContext("")

export const useSearch = ()=>{
    const searchTerms = useContext(SearchContext)
    return searchTerms
}