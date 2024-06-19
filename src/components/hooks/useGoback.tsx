import { useNavigate } from "react-router-dom";

const useGoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const getGoBackButton = () => {
    return (
      <button onClick={handleGoBack} className="back-button">
        <img src="/assets/icons/back-icon.svg" alt="back" /> <span>Back to Users</span>
      </button>
    );
  };

  return {
    getGoBackButton,
    handleGoBack
  };
};

export default useGoBack;
