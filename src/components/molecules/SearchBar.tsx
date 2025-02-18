import { useState } from "react";
import IconButton from "../atoms/IconButton";
import SearchIcon from "../atoms/SearchIcon";
import { twMerge } from "tailwind-merge";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

export default function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={twMerge("w-full max-w-full}", className)}>
      <div className="relative w-50">
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-md font-medium shadow-md text-primary-900 focus:border focus:border-gray-100 rounded-full"
          placeholder="O que você gostaria hoje?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <IconButton
          type="submit"
          variant="primary"
          className="absolute right-2.5 bottom-2.5 text-sm px-4 py-2"
          icon={<SearchIcon />}
        />
      </div>
    </form>
  );
}
