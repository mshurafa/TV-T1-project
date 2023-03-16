import { Button, Card, Input } from "components";
import Link from "next/link";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import Offices from "features/payout/components/Offices";
import Recipients from "features/payout/components/Recipients";
import MyModal from "components/Modal";
import RecipientContainer from "features/payout/components/RecipientContainer";

const WithdrowForm = () => {
  const router = useRouter();
  const routes = router.pathname.split("/");
  routes.shift();

  let [isOpenRecipients, setIsOpenRecipients] = useState(false);
  function closeModal() {
    setIsOpenRecipients(false);
  }
  function openModal() {
    setIsOpenRecipients(true);
  }

  return (
    <div className="flex flex-col w-6/12 gap-2">
      <Card className="inline text-sm p-3">
        {routes.map((route, index) => {
          return (
            <>
              {index === 0 ? (
                <>
                  <Link
                    className="text-gray-dark font-semibold underline"
                    href={"/" + route}
                  >
                    {route}
                  </Link>
                  {index !== routes.length - 1 ? (
                    <span className="text-gray-dark mx-2 font-bold">&#62;</span>
                  ) : null}
                </>
              ) : (
                <>
                  <Link
                    className="text-gray-dark font-semibold"
                    href={"/" + route}
                  >
                    {route}
                  </Link>
                  {index !== routes.length - 1 ? (
                    <span className="text-gray-dark mx-2 font-bold">&#62;</span>
                  ) : null}
                </>
              )}
            </>
          );
        })}
      </Card>
      <Card className="p-3">
        <div className="w-11/12 mx-auto flex justify-between pb-1 border-b-2	border-b-gray-200 items-center">
          <h3 className="text-sm font-semibold">Choose Payment Method</h3>
          <svg
            onClick={() => router.back()}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4  cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <form>
          <div className="w-8/12 mx-auto mt-5 mb-5">
            <Tab.Group>
              <Tab.List className="flex justify-between gap-12 mb-5">
                <Tab
                  className={({ selected }) => {
                    return selected
                      ? "basis-6/12 border-[1px] hover:border-[1px] rounded-md border-blue"
                      : "basis-6/12 border-[1px] hover:border-[1px]	rounded-md border-gray-300 ";
                  }}
                >
                  <label
                    htmlFor="cash"
                    className="flex align-middle justify-between p-3"
                  >
                    <div>
                      <input
                        className="mr-3"
                        type="radio"
                        id="cash"
                        name="method"
                        value="cash"
                        checked
                      />
                      <span className="text-sm">Cash</span>
                    </div>
                    <Image
                      src="/assets/img/cash.png"
                      width="25"
                      height="25"
                      alt="cash method"
                    />
                  </label>
                </Tab>
                <Tab
                  className={({ selected }) => {
                    return selected
                      ? "basis-6/12 border-[1px] hover:border-[1px] rounded-md border-blue"
                      : "basis-6/12 border-[1px] hover:border-[1px]	rounded-md border-gray-200 ";
                  }}
                >
                  <label
                    htmlFor="bank"
                    className="flex align-middle justify-between p-4"
                  >
                    <div>
                      <input
                        className="mr-3"
                        type="radio"
                        id="bank"
                        name="method"
                        value="bank"
                      />
                      <span className="text-sm">Bank</span>
                    </div>
                    <Image
                      src="/assets/img/bank-method.png"
                      width="25"
                      height="25"
                      alt="cash method"
                    />
                  </label>
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="mb-5">
                    <label htmlFor="amount">
                      <div className="flex justify-between align-baseline">
                        <span className="font-semibold text-xs text-gray-dark">
                          Amount
                        </span>
                        <span className="text-xs">
                          Available
                          <span className="text-sm text-blue font-medium pl-1">
                            $240.19
                          </span>
                        </span>
                      </div>
                      <input
                        className="block w-full p-3 rounded-lg border-gray border-[1px]"
                        type="text"
                        value="$240"
                        name="amount"
                      />
                    </label>
                  </div>

                  <Offices />

                  <MyModal
                    title="Add Recipient"
                    isOpenRecipients={isOpenRecipients}
                    openModal={openModal}
                    closeModal={closeModal}
                  >
                    <RecipientContainer closeModal={closeModal} />
                  </MyModal>
                  <Recipients
                    openModal={openModal}
                    isOpenRecipients={isOpenRecipients}
                  />

                  <Button className="w-full" type="submit">
                    Withdraw
                  </Button>
                </Tab.Panel>
                <Tab.Panel>Content 2</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default WithdrowForm;
