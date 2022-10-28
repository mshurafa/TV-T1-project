import Card from "components/Card";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout
      title="Talents Valley"
      pageDescription="Home page description"
      withoutNavbar
    >
      <Card>
        <h1 className="text-3xl font-bold underline text-blue">Hello world!</h1>
        <h1 className="text-3xl font-bold underline text-blue-light">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-blue-dark">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline text-blue-900">
          Hello world!
        </h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Card>
    </MainLayout>
  );
}
