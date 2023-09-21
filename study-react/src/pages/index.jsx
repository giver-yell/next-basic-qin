import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { useCallback } from 'react';

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href)
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index"/>
    </>
  )
}
