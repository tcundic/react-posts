import {useEffect, useState} from "react";
import {greet} from "../utils/helperFunctions";

const useFilter = ({greeting, type, placeholder}: { greeting: string, type: string, placeholder: string }) => {
    useEffect(() => greet(greeting, useFilter.name), [greeting]);

    const [searchTerm, setSearchTerm] = useState<string>("");

    const input = <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} type={type} placeholder={placeholder} />;

    return [searchTerm, input];
};

export default useFilter;