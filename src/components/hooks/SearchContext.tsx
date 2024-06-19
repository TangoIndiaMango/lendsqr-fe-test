import { ReactNode, createContext, useContext, useState } from "react";
import useDebounce from "./useDebounce";

interface SearchContextType {
  search: string;
  debouncedSearch: string;
  setSearch: (search: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

type SearchContextProp = {
  children: ReactNode;
};

export const SearchProvider = ({ children }: SearchContextProp) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 300);

  return (
    <SearchContext.Provider value={{ search, debouncedSearch, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

//directly call our useContext here
// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a search provider");
  }
  return context;
};
