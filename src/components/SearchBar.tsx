import { Search } from 'lucide-react'
import { ComponentProps } from "react";
import { useAppDispatch } from "../store/store";
import { setSearchTerm } from '../store/features/searchSlice';

type SearchBarProps = ComponentProps<"div">

function SearchBar({ ...props }: SearchBarProps) {
    const dispatch= useAppDispatch();

    return <div {...props} className="w-auto m-5 border flex sticky top-5">
        <Search className="my-2 ml-2"/>
        <input type='search' placeholder='Search' className="w-screen p-2" onChange={(e) => dispatch(setSearchTerm({searchTerm: e.target.value}))}>
        </input>
    </div>
}

export default SearchBar;