import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

type category = {id: string,label_name: string}
export const SelectedCategoryContext = createContext<[category, React.Dispatch<React.SetStateAction<category>>]>([{id: '0', label_name: "All"}, function(){}])

export const SelectedCategoryProvider = (props: {children: ReactNode}) => {
    const [selectedCategory, setSelectedCategory] = useState<category>({id: '0', label_name: "All"})
    const [cookies, setCookie] = useCookies(['category']);

    useEffect(() => {
        if (cookies.category != null) {
            setSelectedCategory(cookies.category)
        }
    }, [])

    useEffect(() => {
        setCookie("category", selectedCategory)
    }, [selectedCategory])

	return(
		<SelectedCategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
			{props.children}
		</SelectedCategoryContext.Provider>
	)
}