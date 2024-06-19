/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSearch } from "../hooks/SearchContext";
import { Bell, Search, SearchIcon } from "lucide-react";
interface HeaderProps {
  toggleSidebar: () => void;
  showSidebar: boolean;
}
const Header = ({ toggleSidebar, showSidebar }: HeaderProps) => {
  const { search, setSearch } = useSearch();
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <header className="header">
      <nav className="nav-container">
        <img src="/logo.svg" alt="Company Logo" className="logo" />
        <div className="nav-left">
          <form
            className={`search-input ${showSearchInput ? "show-search" : ""}`}
            onSubmit={handleSearch}
          >
            <input
              type="text"
              placeholder="Search for anything"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              <Search />
            </button>
          </form>

          <div className="user-nav-info">
            <ul className="info-list">
              <li>
                <NavLink to="/docs">Docs</NavLink>
              </li>
              <li>
                <Bell />
              </li>
              <li className="user-nav-profile">
                <img src="/avatar.svg" alt="User Avatar" />
                <p>Adedeji</p>
                <img
                  src="/assets/icons/dropdown-icon.svg"
                  alt="Dropdown Arrow"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="search-mobile" onClick={toggleSearchInput}>
          <SearchIcon />
        </div>

        <div onClick={toggleSidebar} className="menu-icon">
          <img
            src={`/assets/icons/${showSidebar ? "close-icon" : "menu"}.svg`}
            alt="menu icon"
          />
        </div>
      </nav>
    </header>
  );
};
{
  /* <img src={`/images/icons/${isMenuOpen ? "close-icon" : "menu"}.svg`} alt="menu icon" /> */
}

export default Header;
