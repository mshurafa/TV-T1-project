import Image from "next/image";
import type { LogoType } from "components/types";

export const Logo: LogoType = ({
  src = "/assets/img/logo.png",
  alt = "Talents Valley Logo",
  ...rest
}) => {
  return <Image alt={alt} src={src} width={120} height={60} {...rest} />;
};

export default Logo;
