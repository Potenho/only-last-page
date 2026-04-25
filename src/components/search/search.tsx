import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Title from "../title/title";
import "./search.css"

export default function Search () {

    const [search, setSearch] = useState("");
    const [searchTitle ,  setSearchTitle] = useState({
        title: '',
    })

    const handleSearchTitle = () => {
        setSearchTitle({
            title: search,
        })
        setSearch('');
    } 

    return (
        <>
        <Title />
        <div className="search">
            <div className="search-input">
                <input 
                    type="search" 
                    className="input-type"
                    placeholder="Pesquisar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchTitle()}
                />
                <div className="search-button">
                    <button onClick={handleSearchTitle}>
                        <FaSearch />
                    </button>
                </div>
            </div>
            <h4 className="search-title">Sua Pesquisa: {searchTitle.title}</h4>
        </div>
        </>
    )
}