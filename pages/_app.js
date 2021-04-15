import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
import { formatWithValidation } from "next/dist/next-server/lib/utils";

export default MyApp


