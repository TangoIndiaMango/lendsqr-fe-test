import { Link, useNavigate } from "react-router-dom";
import { navItems } from "../../lib/navitems";
interface SidebarProps {
  showSidebar: boolean;
}
const Sidebar = ({ showSidebar }: SidebarProps) => {
  const navigate = useNavigate();

  const isRouteActive = (route: string) => {
    return window.location.pathname === route;
  };

  return (
    <div className={`sidebar ${showSidebar ? "show" : ""}`}>
      <div className="sidebar-header">
        <img src="/logo.svg" alt="Lendsqr Logo" className="logo" />
      </div>
      <ul className="menu-list">
        {navItems.map((item) => {
          const isActive = isRouteActive(item.link);
          return item.header ? (
            <li key={item.id} className="sidebar-item-header">
              <span>{item.title}</span>
            </li>
          ) : (
            <Link key={item.id} to={item.link}>
              <li className={`sidebar-menu-item ${isActive ? "active" : ""}`}>
                <img src={item.icon} alt={item.title} />
                <span>{item.title}</span>
                {item.id === 1 && (
                  <span>
                    <img
                      src="/assets/icons/down-arrow.svg"
                      alt="Dropdown arrow"
                    />
                  </span>
                )}
              </li>
            </Link>
          );
        })}
      </ul>

      <div className="logout">
        <div>
          <img
            src="/assets/icons/logout-icon.svg"
            alt="Logout"
            onClick={() => navigate("/")}
          />
          <span>Logout</span>
        </div>
        <span className="version">v1.2.0</span>
      </div>
    </div>
  );
};

export default Sidebar;
