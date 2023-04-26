import Header from "@/components/Header";
import Left from '@/components/Main/Left';
import Center from "@/components/Main/Center";
import Right from "@/components/Main/Right";
import Spacer from "@/components/Spacer";

import styles from '@/App.module.scss';

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <div className="container">
          <div className={styles.content}>
            <Left />
            <Center />
            <Right />
          </div>
        </div>
      </main>
      <Spacer />
      <Spacer />
    </>
  )
}

export default App;