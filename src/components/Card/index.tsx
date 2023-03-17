import type { CardType } from "components/types";

export const Card: CardType = ({ children, className, ...rest }) => {
  const cardClassName = `bg-white rounded-lg shadow-md ${className ?? ""}`;

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
