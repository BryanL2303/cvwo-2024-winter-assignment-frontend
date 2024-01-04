import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios'

type category = {id: string, label_name: string}
export const CategoriesContext = createContext<[category[], React.Dispatch<React.SetStateAction<category[]>>]>([[], function(){}])

export const CategoriesProvider = (props: {children: ReactNode}) => {
    const [categories, setCategories] = useState<category[]>([])
    const [cookies, setCookie] = useCookies(['categories']);

    useEffect(() => {
        if (cookies.categories == null) {
            axios.post('/get_labels')
            .then(resp => {
                if (resp.data.status === 0) {
                    setCategories(resp.data.labels)
                    setCookie('categories', resp.data.labels)
                }
            })
            .catch(resp => console.log(resp))
        } else {
            setCategories(cookies.categories)
        }
    }, [])

	return(
		<CategoriesContext.Provider value={[categories, setCategories]}>
			{props.children}
		</CategoriesContext.Provider>
	)
}