import "../styles/globals.css";
import "../styles/swiper.css";
import { store } from "redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
