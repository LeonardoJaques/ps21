import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leonardo Jaques</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.firstSection}>
        <Section
          icon={<Image src="/maloik.svg" width={60} height={60} />}
          title={
            "Oi, Eu sou o Leonardo. Sou um Profissional: De Marketing, Analista de Sistemas & Gestor de Projetos"
          }
          text={
            <div>
              <p>
                "Experiência não é o que acontece com você, mas o que você faz
                com o que lhe aconteceu" Aldous Huxley
              </p>
              <p>
                Brasileiro, apaixonado por Marketing, Tecnologia e Design.
                Trabalhei em agências de publicidade, empresa de tecnologia,
                editoras e finanças.
              </p>
              <p>
                No meu repositório você encontrará projetos relacionados à área
                mobile, trabalhos acadêmicos e pessoais.
              </p>
            </div>
          }
          imgURl="/EU81.png"
        />
      </div>

      <Section />
      <Footer />
    </div>
  );
}
