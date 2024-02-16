//import Image from "next/image";
//import styles from "./page.module.css";
import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca de</a>
        </nav>

        <div>
          <h1>Yeimy Belen Huchim Onofre</h1>
        </div>
        <div>
          <h2>TI03SM-22</h2>
        </div>
        <br></br>
        <br></br>
        <div> 
        <img
            src="https://imgs.search.brave.com/_EOhSSr-IHzoRz_DS0TDbGk389EDXuxAtc2EJ7TI2d0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDgx/NDQzNi5qcGc"
            alt="Killjoy Valorant"
            width="400" />
        </div>
      </div>
    </main>
  );
}
