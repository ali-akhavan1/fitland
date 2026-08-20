import { Outlet, useMatches } from "react-router";

import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Topbar from "../components/ui/Topbar";

function AppLayout() {
  const matches = useMatches();
  const hasTopbar = matches.some((match) => match.handle?.hasTopbar);

  return (
    <>
      {hasTopbar && (
        <Topbar>
          <p>با عضویت در فیت لند اولین ارسال را مهمون ما باش :)</p>
        </Topbar>
      )}
      <div className="container">
        <div>
          <Header />

          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
