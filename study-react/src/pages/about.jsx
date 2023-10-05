import { Header } from '@/components/Header'
import { Main } from '@/components/Main'

const About = (props) => {
  return (
    <>
      <Header />
      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={() => {props.handleDisplay()}}>{props.isShow ? "非表示" : "表示"}</button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="about"/>
    </>
  )
}

export default About
