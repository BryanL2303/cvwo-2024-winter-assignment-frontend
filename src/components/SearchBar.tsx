import { Search } from 'lucide-react'
import { ComponentProps, useContext } from "react";

import  { SearchContext } from '../context/SearchContext'

type SearchBarProps = ComponentProps<"div">

function SearchBar({ ...props }: SearchBarProps) {
    const [search, setSearch] = useContext(SearchContext)

    return <div {...props} className="w-auto m-5 border flex sticky top-5">
        <Search className="my-2 ml-2"/>
        <input type='search' placeholder='Search' className="w-screen p-2" onChange={(e) => setSearch(e.target.value)}>
        </input>
    </div>
}

export default SearchBar;