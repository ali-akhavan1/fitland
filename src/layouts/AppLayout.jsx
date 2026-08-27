import { Outlet, useMatches } from "react-router";

import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import Topbar from "../components/ui/Topbar";
import { AuthProvider } from "@/context/Auth";

function AppLayout() {
  const matches = useMatches();
  const hasTopbar = matches.some((match) => match.handle?.hasTopbar);

  return (
    <AuthProvider>
      {hasTopbar && (
        <Topbar>
          <p>با عضویت در فیت لند اولین ارسال را مهمون ما باش :)</p>
        </Topbar>
      )}
      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default AppLayout;
