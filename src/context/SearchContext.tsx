import React, { ReactNode, createContext, useState } from 'react'

export const SearchContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", function(){}])

export const SearchProvider = (props: {children: ReactNode}) => {
    const [search, setSearch] = useState<string>("")

	return(
		<SearchContext.Provider value={[search, setSearch]}>
			{props.children}
		</SearchContext.Provider>
	)
}