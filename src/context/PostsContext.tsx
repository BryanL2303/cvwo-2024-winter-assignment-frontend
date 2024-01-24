import React, { ReactNode, createContext, useState } from 'react'

type post = { id: string, title: string, description: string, date: string, author: string, created_at: string, updated_at: string, user_id: string, label_id: string }
export const PostsContext = createContext<[post[], React.Dispatch<React.SetStateAction<post[]>>]>([[], function(){}])

export const PostsProvider = (props: {children: ReactNode}) => {
    const [posts, setPosts] = useState<post[]>([])

	return(
		<PostsContext.Provider value={[posts, setPosts]}>
			{props.children}
		</PostsContext.Provider>
	)
}