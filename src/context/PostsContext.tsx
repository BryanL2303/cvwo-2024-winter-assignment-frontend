import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

type post = { id: string, title: string, description: string, date: string, author: string, created_at: string, updated_at: string, user_id: string, label_id: string }
//type post = {id: string, title: string, description: string}
export const PostsContext = createContext<[post[], React.Dispatch<React.SetStateAction<post[]>>]>([[], function(){}])

export const PostsProvider = (props: {children: ReactNode}) => {
    const [posts, setPosts] = useState<post[]>([])
    const [cookies, setCookie] = useCookies(['posts']);

	return(
		<PostsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</PostsContext.Provider>
	)
}