import "tailwindcss/tailwind.css";
import { AppLayout } from "@/layouts/AppLayout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
