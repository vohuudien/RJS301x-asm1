import React from 'react'
import searchData from "../../../data/search.json"
import SearchListItem from './SearchListItem/SearchListItem';
import "./SearchList.css"

const SearchList = () => {
console.log(searchData);
  return (
    <div className='searchList'>
    {searchData.map(item=><SearchListItem key={Math.random().toString(2)} item={item}/>)}
    </div>
  )
}

export default SearchList