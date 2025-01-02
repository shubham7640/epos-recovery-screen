import { useRef } from "react";

const SearchBar = ({setSearchCategory,searchApplication}) => {
  let searchCat = "";
  const searchVal = useRef();
  return (
    <div className="pb-4 bg-white dark:bg-gray-900" style={{ marginTop: '80px'}}>    
      <form className="max-w-lg mx-auto">
        <div className="flex">
        <label htmlFor="searchlist" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2"></label>
        <select id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={() => {setSearchCategory(event.target.value)}}>
          <option selected>Search Category</option>
          <option value="Application">Application Number</option>
          <option value="Status" >Status</option>
        </select>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Application" required ref={searchVal}/>
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => searchApplication(searchVal.current.value)}
            >
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
  </form>
</div>
  );
};
export default SearchBar;
