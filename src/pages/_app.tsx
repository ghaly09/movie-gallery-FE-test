import { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../stores/store";
import { Provider } from "react-redux";
import Layout from "../layouts";
import NextNProgress from "nextjs-progressbar";
import { colorLoadingBar } from "../configs/config";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <NextNProgress
        color={colorLoadingBar}
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
