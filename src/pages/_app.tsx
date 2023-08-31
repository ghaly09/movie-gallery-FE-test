import { AppProps } from "next/app";
import "../styles/globals.css";
import { store } from "../stores/store";
import { Provider } from "react-redux";
import Layout from "../layouts";
import NextNProgress from "nextjs-progressbar";

const App = ({ Component, pageProps }: AppProps) => {
  const colorLoadingBar =
    "linear-gradient(rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))";
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
