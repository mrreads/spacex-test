import Header from "./components/Header";

import styles from './App.module.scss';
import Feature from "./components/Feature";
import Spacer from "./components/Spacer";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <div className="container">

          <div className={styles.content}>

            <div className={styles.left}>
              <h2 className={styles.title}>ПУТЕШЕСТВИЕ</h2>
              <p className={styles.subtitle}>на красную планету</p>
            </div>

            <div className={styles.center}>
              <div className={styles.planet} />
            </div>

            <div className={styles.right}>
              <div className={styles.features}>
                <Feature topText="мы" centerText="1" bottomText="на рынке" hoverPosition="top-left" />
                <Feature topText="гарантируем" centerText="50" bottomText="безопасность" hoverPosition="top-right" />
                <Feature topText="календарик за" centerText="2001" bottomText="в подарок" hoverPosition="bottom-left" />
                <Feature topText="путешествие" centerText="597" bottomText="дней" hoverPosition="bottom-right" />
              </div>
            </div>


          </div>

        </div>
      </main>
      <Spacer />
      <Spacer />
    </>
  )
}

export default App
