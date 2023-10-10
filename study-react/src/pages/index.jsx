import { Header } from "@/components/Header";
import styles from "@/styles/Home.module.css";

const Index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIをいろいろ叩いてみるよ</p>
    </div>
  );
};

export default Index;
