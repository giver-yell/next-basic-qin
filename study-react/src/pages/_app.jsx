import "@/styles/globals.css";
import { useBgLightBlue } from "@/hooks/useBgColor";
import { useCounter } from "@/hooks/useCounter";
import { useInputArray } from "@/hooks/useInputArray";
import { Layout } from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Layout>
        <Component {...pageProps} {...counter} {...inputArray} />
      </Layout>
    </>
  );
}
