import { useMemo, useState, useCallback } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const usePasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(
    () => setShowPassword((prevShowPassword) => !prevShowPassword),
    []
  );

  const passwordIconProps = useMemo(
    () => ({
      className: "w-6 h-6 cursor-pointer",
      onClick: toggleShowPassword,
    }),
    [toggleShowPassword]
  );

  const passwordInputIcon = showPassword ? (
    <EyeIcon {...passwordIconProps} />
  ) : (
    <EyeSlashIcon {...passwordIconProps} />
  );

  const passwordInputType = showPassword ? "text" : "password";

  return { passwordInputType, passwordInputIcon };
};

export default usePasswordInput;
