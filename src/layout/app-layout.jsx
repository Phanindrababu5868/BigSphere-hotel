import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      React Router Dom Tutorial
      {/* Header */}
      <Header />
      {/* loading */}
      {isLoading && <div>Loading...</div>}
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
