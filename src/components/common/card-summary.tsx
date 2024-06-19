
type Props = {
  title: string;
  icon: string;
  count: string;
};

const CardSummary = (props: Props) => {
  return (
    <div className="card-summary">
      <img src={props.icon} alt="Cars Summary" />
      <h3>{props.title}</h3>
      <p>{props.count}</p>
    </div>
  );
};

export default CardSummary;
