import { Outlet, useNavigate } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import SearchOrder from "../features/order/SearchOrder";
function AppLayout() {
  const navigation = useNavigate();
  const isLoading = navigation.state === "loading";
  console.log("isLoading", isLoading);
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <SearchOrder/>
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
