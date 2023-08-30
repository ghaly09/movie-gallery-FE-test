import { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../stores/store";
import { Provider } from "react-redux";
import Layout from "../layouts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
