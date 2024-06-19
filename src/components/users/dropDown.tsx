/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { DropdownItem } from "../../utils/types";
interface Props {
  items: DropdownItem[];
  onItemClick: (action: string) => void;
  userId: any;
}

const InfoDropDown = ({ items, onItemClick, userId }: Props) => {
  const navigate = useNavigate();

  const handleItemClick = (item: DropdownItem) => {
    if (item.text === "View Details") {
      navigate(`/user-details/${userId}`);
    } else {
      onItemClick(item.text);
    }
  };
  return (
    <div className="options-dropdown">
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(item)}>
            <img src={item.icon} alt={`${item.text} icon`} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoDropDown;
