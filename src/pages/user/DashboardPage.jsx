import { useLoaderData } from "react-router";

function DashboardPage() {
  const user = useLoaderData();

  return <div>DashboardPage</div>;
}

export default DashboardPage;
