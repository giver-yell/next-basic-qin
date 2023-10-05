import '@/styles/globals.css'
import { useBgLightBlue } from '@/hooks/useBgColor';
import { useCounter } from '@/hooks/useCounter';
import { useInputArray } from '@/hooks/useInputArray';

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return <Component {...pageProps} {...counter} {...inputArray} />
}
