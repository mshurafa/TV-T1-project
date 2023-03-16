import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Skeleton } from "components";
import { API_ENDPOINT } from "data";
import { off } from "process";
import { Fragment, useEffect, useState } from "react";
import { getAuthorizationHeader } from "utils";

const Offices = () => {
  const authHeader = getAuthorizationHeader();

  const [isLoading, setIsLoading] = useState(false);
  const [offices, setOffices] = useState([]);
  const [selectedOffice, setSelectedOffice] = useState(null);

  useEffect(() => {
    const fetchOffices = async () => {
      setIsLoading(true);
      const response = await fetch(`${API_ENDPOINT}/withdraw/office-list`, {
        method: "GET",
        headers: authHeader,
      });
      const data = await response.json();
      setIsLoading(false);
      setOffices(data.data);
      setSelectedOffice(data.data[0]);
    };
    fetchOffices();
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
            Office
            <Listbox value={selectedOffice} onChange={setSelectedOffice}>
              <div>
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left  border-[1px]  border-gray focus:border-blue focus:outline-none focus-visible:border-red-400 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <div className="text-[10px] leading-none text-gray-400">
                    <div className="flex justify-between mb-1">
                      <span>
                        ساعت العمل :{" "}
                        {selectedOffice && selectedOffice.startingHour} صباحا -{" "}
                        {selectedOffice && selectedOffice.endingHour} مساء
                      </span>
                      <span className="font-semibold text-black">
                        {selectedOffice && selectedOffice.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {selectedOffice && selectedOffice.fees
                          ? "شيقل" + selectedOffice.fees
                          : "بدون عمولة"}{" "}
                      </span>
                      <span>{selectedOffice && selectedOffice.address}</span>
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
                    {offices.map((office, personIdx) => (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={office}
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
                                  <span>
                                    {office.fees
                                      ? "شيقل" + selectedOffice.fees
                                      : "بدون عمولة"}{" "}
                                  </span>
                                  <span className="font-semibold text-black">
                                    {office.name}
                                  </span>
                                </div>
                                <div className="flex justify-between">
                                  <span>{office.fees}</span>
                                  <span>{office.location}</span>
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
export default Offices;
