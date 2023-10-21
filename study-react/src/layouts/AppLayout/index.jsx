import { Header } from "@/layouts/AppLayout/Header";

export const AppLayout = (props) => {
  return (
    <div className="flex flex-col mx-auto items-center px-2 min-h-screen max-w-2xl">
      <Header />
      {props.children}
    </div>
  );
};
