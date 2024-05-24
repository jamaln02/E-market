import { ThemeProvider } from "@/clientExports";

import { Provider } from "@/clientExports";

import { store } from "@/clientExports";
import Header from "../component/HeaderComponent/Header";
import Footer from "../component/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900">
      <ThemeProvider>
        <Provider store={store}>
          <Header />
          <div className="container mx-auto">{children}</div>
          <Footer />
        </Provider>
      </ThemeProvider>
    </div>
  );
};

export default MainLayout;
