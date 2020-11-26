import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 400,
    width: 380,
  },
  paperPost: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 220,
    width: 200,
  },
}));

export default function Home() {
  const classes = useStyles();

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
            "Oi, sou um Profissional: De Marketing, Analista de Sistemas & Gestor de Projetos"
          }
          text={
            <div>
              <p>
                "Experiência não é o que acontece com você, mas o que você faz
                com o que lhe aconteceu" Aldous Huxley
              </p>
              <p>
                Sou brasileiro, apaixonado por Marketing, Tecnologia e Design.
                Trabalhei em agências de publicidade, empresa de tecnologia,
                editoras e finanças.
              </p>
              <p>
                No meu repositório você encontrará projetos relacionados à área
                mobile, trabalhos acadêmicos e pessoais.
              </p>
            </div>
          }
          imgURl={
            <div className={styles.sectionImageContainer}>
              <img
                className={styles.sectionImage}
                src="/EU81.png"
                alt="Minha foto"
                title="Leonardo Jaques"
              />
            </div>
          }
        />
      </div>

      <Section
        title="Como eu posso ajudar:"
        text={
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={5}
          >
            <Grid item>
              <Paper className={classes.paper}>
                <div className={styles.textSecond}>
                  <h3>Gestão Marketing:</h3>
                  <p>• Estratégias de Marketing</p>
                  <p>• Posicionamento de Marca</p>
                  <p>• Apresentação e Vendas</p>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div className={styles.textSecond}>
                  <h3>Análise de Sistemas:</h3>
                  <p>• Desenvolvimento de Apps (Android e ReactJS)</p>
                  <p>• Desenvolvimento Web</p>
                  <p>• Requerimento e Análises de Projetos</p>
                  <p>• Design e Modelagem de Sistemas</p>
                  <p>• Implementação e codificação</p>
                  <p>• Testes e implentação</p>
                  <p>• Manutenção de sistemas</p>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div className={styles.textSecond}>
                  <h3>Gestão de projetos:</h3>
                  <p>• GES. de Escopo</p>
                  <p>• GES. do Cronograma</p>
                  <p>• GES. de Custos</p>
                  <p>• GES. de Qualidade</p>
                  <p>• GES. dos Recursos</p>
                  <p>• GES. das Comunicações</p>
                  <p>• GES. de Riscos </p>
                  <p>• GES. de Aquisições do projeto</p>
                  <p>• GES. de Partes Interessadas do projeto</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        }
      />
      <Section
        title="Projetos & Clientes:"
        text={
          <div>
            <p>
              Nesse Momento, atuo como consultor em projetos, desenvolvendo
              aplicações para empresas em setores variados criando aplicações em
              ReactJS e Kotlin em android com banco de dados firebase e mongoDB
            </p>
            <p>
              Anteriormente, fiz parte da squad de migração das tecnologias
              mobile ionic 3 e angular 8 para o ionic 4 que atendia a ONS. Bem
              como apoio em programação front-end através do usando typescript
              para desenvolver em html, sass, css, nodeJS e JavaScript.
            </p>
          </div>
        }
      />
      <Section
        title="Post Ressente:"
        subtitle={
          <div>
            <h4 className={styles.postTextSub}>
              <p>#Gestão Marketing</p>
              <p>PostTítulo</p>
              <p>Sábado 14/11/2020</p>
            </h4>
            <p>
              <hr className={styles.postLine} />
            </p>
          </div>
        }
        postText={
          <div className={styles.postText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              aliquam lectus ante, eu molestie enim convallis eget. Sed id metus
              nisi. Integer ante massa, vehicula et nibh eget, pretium vulputate
              tortor. Suspendisse dolor lacus, vulputate et malesuada id,
              hendrerit ut justo. Phasellus semper dolor in mi aliquam aliquet.
              Etiam a blandit arcu, vel convallis risus. Ut ut luctus elit, sit
              amet maximus magna. tiam non mi quis lectus sagittis rhoncus et
              finibus orci. Donec pretium fringilla porta. Cras lobortis ac arcu
              in lacinia. Proin porttitor odio sed hendrerit porta. Donec ac
              quam et lectus blandit venenatis et nec erat. Praesent porttitor
              pharetra felis, nec ultrices ante elementum vitae. Fusce non
              facilisis
            </p>
            <a>Leia mais...</a>
          </div>
        }
      />
      <Section
        title="Posts Anteriores:"
        text={
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Paper className={classes.paperPost}>
                <div className={styles.textSecond}>
                  <h3>#Gestão Marketing:</h3>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paperPost}>
                <div className={styles.textSecond}>
                  <h3>#Analise de Sistemas:</h3>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                </div>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paperPost}>
                <div className={styles.textSecond}>
                  <h3>#Gestão de projetos:</h3>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                  <p>• titulo da postagem</p>
                </div>
              </Paper>
            </Grid>
          </Grid>
        }
      />

      <Footer />
    </div>
  );
}
