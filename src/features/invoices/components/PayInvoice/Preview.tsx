import { Card, Logo } from "components";

const Preview = () => {
  return (
    <Card className="mb-4 shadow-sm border py-8 px-11">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">
          Invoice <span className="text-xs font-normal">#INV-003</span>
        </h4>
        <Logo className="cursor-pointer" />
      </div>
      <div className="flex justify-between">
        <div>
          <h5 className="text-gray-dark mt-5 mb-4">From</h5>
          <h6>Talents Valley LLC</h6>
          <p className="text-gray-dark text-sm flex flex-col">
            <span>30 North Gould St.</span>
            <span>Sheridan, Wyoming 82801</span>
            <span>United States</span>
            <span>+1 307-217-6666</span>
          </p>
        </div>
        <div>
          <h5 className="text-gray-dark mt-5 mb-4">Bill To</h5>
          <p>John Doe</p>
          <span className="text-gray-dark text-sm">Email@mail.com</span>
          <p className="mt-3">Issue Date</p>
          <span className="text-gray-dark text-sm">July 27 ,2022</span>
        </div>
      </div>
      <div className="flex justify-between items-start mt-14">
        <div>
          <p className="text-gray-dark mb-2">Service</p>
          <span>UI/UX Design for Noon Website</span>
        </div>
        <div>
          <p className="text-gray-dark mb-2">Amount</p>
          <span>$ 300</span>
        </div>
      </div>
      <div className="h-px my-3 bg-gray" />
      <div className="ml-auto max-w-max min-w-[150px] px-4 text-gray-dark text-sm">
        <p className="flex">
          Sub Total
          <span className="ml-auto">$..</span>
        </p>
        <p className="flex">
          Fees
          <span className="ml-auto">$..</span>
        </p>
        <p className="flex">
          Total
          <span className="ml-auto">$..</span>
        </p>
      </div>
    </Card>
  );
};

export default Preview;
