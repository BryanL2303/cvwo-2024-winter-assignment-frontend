import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

export const SearchContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", function(){}])

export const SearchProvider = (props: {children: ReactNode}) => {
    const [search, setSearch] = useState<string>("")
    const [cookies, setCookie] = useCookies(['search']);

	return(
		<SearchContext.Provider value={[search, setSearch]}>
			{props.children}
		</SearchContext.Provider>
	)
}