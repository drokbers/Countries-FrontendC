import { useState } from "react";

interface SearchFilterProps{
    onSearchChange: (search: string) => void;
}

function SearchFilter ({onSearchChange}: SearchFilterProps) {
    const [searchQuery, setSearchQuery] = useState("");
    return
}

export default SearchFilter;