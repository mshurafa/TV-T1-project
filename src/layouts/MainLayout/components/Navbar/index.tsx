import { Logo, Link } from "components";
import { URL_PATHS } from "data";
import NavLinks from "../NavLinks";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white p-1 shadow-md">
      <div className="inline-flex items-center">
        <Link href={URL_PATHS.HOME}>
          <Logo className="cursor-pointer" />
        </Link>
        <span className="text-base font-medium tracking-wider text-center">
          Talents Valley
        </span>
      </div>
      <NavLinks />
    </nav>
  );
};
