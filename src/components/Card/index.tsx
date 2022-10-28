import type { CardType } from "components/types";

export const Card: CardType = ({ children, className, ...rest }) => {
  const cardClassName = `bg-white p-4 rounded-[20px] shadow-md ${
    className || ""
  }`.trim();

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
