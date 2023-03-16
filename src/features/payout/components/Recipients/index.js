import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Skeleton } from "components";
import { API_ENDPOINT } from "data";
import { off } from "process";
import { Fragment, useEffect, useState } from "react";
import { getAuthorizationHeader } from "utils";

const Recipients = ({ openModal }) => {
  const authHeader = getAuthorizationHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipients, setSelectedRecipients] = useState(null);

  useEffect(() => {
    const fetchRecipients = async () => {
      setIsLoading(true);
      const response = await fetch(`${API_ENDPOINT}/recipient/list`, {
        method: "GET",
        headers: authHeader,
      });
      const data = await response.json();
      setIsLoading(false);
      setRecipients(data.data.recipients);
      setSelectedRecipients(data.data.recipients[0]);
    };
    fetchRecipients();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton className="mb-5" height={66}></Skeleton>
      ) : (
        <div className="mb-5">
          <label
            className="relative block font-semibold text-xs text-gray-dark"
            htmlFor="office"
          >
            Recipients
            <button
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
              className="bg-transparent pl-1 text-[10px] text-blue"
            >
              Edit
            </button>
            <Listbox
              value={selectedRecipients}
              onChange={setSelectedRecipients}
            >
              <div>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left  border-[1px]  border-gray focus:border-blue focus:outline-none focus-visible:border-red-400 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <div className="text-[10px] leading-none text-gray-400">
                    <div className="flex justify-between mb-1">
                      <span></span>
                      <span className="font-semibold text-black">
                        {selectedRecipients && selectedRecipients.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        ID: {selectedRecipients && selectedRecipients.idNumber}
                      </span>
                      <span>
                        Mobile:{" "}
                        {selectedRecipients && selectedRecipients.mobile}
                      </span>
                    </div>
                  </div>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="z-10 lead absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {recipients.map((recipient, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={recipient}
                      >
                        {({ selected }) => (
                          <>
                            {/* <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {person.name}
                    </span> */}
                            {
                              <div
                                className={`text-xs ${
                                  selected ? "font-semibold" : "normal"
                                } text-gray-400`}
                              >
                                <div className="flex justify-between">
                                  <span></span>
                                  <span className="font-semibold text-black">
                                    {recipient.name}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>ID: {recipient.idNumber}</span>
                                  <span> Mobile: {recipient.mobile}</span>
                                </div>
                              </div>
                            }
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </label>
        </div>
      )}
    </>
  );
};
export default Recipients;
