import { useEffect } from "react";

const usePhoneInputMutation = () => {
  useEffect(() => {
    const mutationObserver = new MutationObserver((mutations) => {
      const flagsList = mutations[0];
      if (flagsList) {
        const inputFlagToChange = document.querySelector(".il") as HTMLElement;
        const dropdownFlagToChange = document.querySelector(
          '[data-country-code="il"] .il'
        ) as HTMLElement;
        const countryNameToChange = document.querySelector(
          '[data-country-code="il"] .country-name'
        ) as HTMLElement;
        if (inputFlagToChange) {
          inputFlagToChange.style.backgroundPosition = "-288px -264px";
        }
        if (dropdownFlagToChange) {
          dropdownFlagToChange.style.backgroundPosition = "-288px -264px";
        }
        if (countryNameToChange) {
          countryNameToChange.innerText = "Palestine";
        }
      }
    });

    const flagDropdown = document.getElementsByClassName("flag-dropdown")[0];

    mutationObserver.observe(flagDropdown, {
      childList: true,
    });

    () => mutationObserver.disconnect();
  }, []);
};

export default usePhoneInputMutation;
