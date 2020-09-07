import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import RX1 from "../assets/images/rex-1.jpg";
import RX2 from "../assets/images/rex-2.jpg";
import RX3 from "../assets/images/rex-3.jpg";
import RX4 from "../assets/images/rex-4.jpg";
import RX5 from "../assets/images/rex-5.jpg";
import RX6 from "../assets/images/rex-6.jpg";
import RX7 from "../assets/images/rex-7.jpg";
import RX8 from "../assets/images/rex-8.jpg";
import RX9 from "../assets/images/rex-9.jpg";
import RX10 from "../assets/images/rex-10.jpg";
import RX11 from "../assets/images/rex-11.jpg";
import RX12 from "../assets/images/rex-12.jpg";
import RX13 from "../assets/images/rex-13.jpg";
import RX14 from "../assets/images/rex-14.jpg";

import { Link } from "react-router-dom";

export const Rex = () => {
  return (
    <main className="main">
      <section className="container container__presentation">
        <div className="content">
          <div className="left">
            <h1>Research Experiences</h1>
            <h2>Sobre o projeto</h2>
            <p>
              O projeto Research Experiences tem como objetivo encontrar em
              pouco tempo uma maneira inovadora e engajante de se comunicar as
              pesquisas feitas no IBM Research. Nesse projeto, trabalhei na
              parte de User Research e Ideação, realizando desde entrevistas
              inicias até workshops de ideação.
            </p>
          </div>
        </div>
      </section>

      <section className="container container__fullproject">
        <div className="content">
          <article>
            <section>
              <h1>O problema</h1>
              <h2>
                Comunicando para clientes, pesquisadores e para a sociedade a
                pesquisa da IBM
              </h2>

              <div className="container__projchunk">
                <p>
                  Cientistas encaram problemas de um jeito parecido, mas
                  bastante diferente de designers e profissionais mais
                  orientados a negócios. Um problema de pesquisa pode ser
                  analisado por anos ou décadas até que vire uma solução
                  palpável ou um produto que realmente se incorpora na vida das
                  pessoas. Por isso, para muitos pesquisadores, comunicar o que
                  eles fazem, como, por quê e para quem, pode ser um desafio.
                  Pensando nisso, resolvemos conversar com pesquisadores,
                  potenciais clientes e pessoas da área de vendas da IBM para
                  entender{" "}
                  <strong>
                    como poderíamos comunicar melhor as pesquisas e soluções que
                    são construídas no laboratório
                  </strong>
                  .
                </p>
              </div>

              <div className="container__projchunk">
                <p>
                  Começamos traçando um <strong>plano de entrevistas</strong>,
                  onde todos os pesquisadores do laboratório explicariam sua
                  pesquisa um para o outro em turnos. Nessa fase, eu atuei
                  elaborando o plano com o time e facilitando entrevistas entre
                  os pesquisadores. O objetivo foi{" "}
                  <strong>
                    compreender os recursos e pain points dos pesquisadores ao
                    apresentarem suas pesquisas para diferentes audiências
                  </strong>
                  . Também entrevistamos pessoas interessadas em tecnologia e
                  pessoas da IBM na área de vendas.
                </p>
                <div>
                  <img src={RX1} alt="" />
                </div>
              </div>

              <div className="container__projchunk">
                <p>
                  Para entender melhor as boas práticas de comunicação
                  científica e experiências imersivas, fizemos um
                  <strong>mapa de Benchmarking</strong> onde todos os envolvidos
                  no projeto puderam colaborar com referências livremente. Eu{" "}
                  <strong>
                    categorizei as referências que o time trouxe e tirei
                    insights de cada uma delas
                  </strong>
                  , que mais tarde iam ajudar na fase de ideação.
                </p>
                <img src={RX2} alt="" />
              </div>

              <div className="container__projchunk">
                <p>
                  Com base nas entrevistas, o passo seguinte foi a{" "}
                  <strong>descoberta das Personas</strong>. Fizemos um{" "}
                  <strong>workshop com o time e com o time estendido</strong>{" "}
                  para conversar sobre nossos insights e categorizá-los, o que
                  resultaria em algumas{" "}
                  <strong>
                    personas de pesquisador, cliente/vendedor e audiência
                  </strong>
                  . Descobrindo as personas, queríamos detalhar os maiores pain
                  points de cada uma para compreender uma pesquisa científica.
                </p>

                <div className="image">
                  <img src={RX3} alt="" />
                  <p>
                    Algumas das personas para cada audiência que descobrimos,
                    com suas principais características.
                  </p>
                </div>
              </div>

              <div className="container__projchunk">
                <p>
                  Outro outcome da fase de entrevistas foi um{" "}
                  <strong>mapa interativo de todas as pesquisas</strong>, áreas,
                  pesquisadores e resultados do Laboratório. Junto com o time,
                  eu trabalhei{" "}
                  <strong>
                    conceituando o Mapa, desde rascunhos até protótipos
                    interativos
                  </strong>
                  . O feedback nessa parte foi bastante positivo, porque tornou
                  mais claras conexões que passavam despercebidas cruzando dados
                  como área de expertise, tempo no Laboratório, time, skills,
                  entre outras.
                </p>
              </div>

              <div className="container__projchunk">
                <img src={RX4} alt="" />
                <img src={RX5} alt="" />
              </div>

              <div className="container__projchunk">
                <img src={RX6} alt="" />
                <img src={RX7} alt="" />
              </div>

              <div className="container__projchunk">
                <p>
                  Na análise dos dados, eu participei na criação do modelo de{" "}
                  <strong>análise das entrevistas</strong>. Como esse foi um
                  projeto aberto para pesquisadores com diversas skills
                  contribuírem, criamos um modelo pra que pessoas{" "}
                  <strong>sem um background de design</strong> ou pesquisa
                  qualitativa pudessem usar como ferramenta. Usando esse modelo,
                  chegamos em uma série de{" "}
                  <strong>insights sobre pain points dos pesquisadores</strong>,
                  dificuldades e recursos que funcionam para explicar suas
                  pesquisas.
                </p>
                <img src={RX8} alt="" />
              </div>

              <div className="container__projchunk">
                <p>
                  Com as descobertas da primeira fase de pesquisa com usuários,
                  criamos os{" "}
                  <strong>Hills/Need Statements pra cada Persona</strong>,
                  fizemos uma votação das melhores{" "}
                  <strong>referências de benchmarking</strong>, e facilitamos um{" "}
                  <strong>workshop de Ideação</strong> com todo o time. Meu
                  papel nesse workshop foi de{" "}
                  <strong>planejamento e facilitação</strong> - como eu
                  participei um pouco de cada parte da pesquisa, pude ter uma
                  visão global dos insights até aquela hora, e isso ajudou
                  bastante na fase de ideação.
                </p>
                <div className="image">
                  <img src={RX9} alt="" />
                  <p>
                    Exemplo de algumas Hills que criamos para cada persona:
                    Leigos (audiência), cliente potencial e pesquisador.
                  </p>
                </div>
              </div>

              <div className="container__projchunk">
                <img src={RX10} alt="" />
                <img src={RX11} alt="" />
              </div>
              <div className="container__projchunk">
                <p>
                  <i>Conceitos que gerei em rascunho no workshop de ideação.</i>
                </p>
              </div>
              <div className="container__projchunk">
                <p>
                  Criamos vários{" "}
                  <strong>conceitos de formas de comunicar uma pesquisa</strong>
                  , chegando a um MVP baseado em um projeto real. Ajudei a{" "}
                  <strong>
                    criar ilustrações e wireframes desses conceitos
                  </strong>{" "}
                  para começar a implementação e validação.
                </p>
                <div className="image">
                  <img src={RX12} alt="" />
                  <p>
                    Um dos wireframes que criei de um possível site para
                    comunicar as pesquisas do laboratório, que demonstra uma
                    pesquisa como uma linha do tempo.
                  </p>
                </div>
              </div>

              <div className="container__projchunk">
                <img src={RX13} alt="" />
                <img src={RX14} alt="" />
              </div>

              <div className="container__projchunk">
                <p>
                  <i>
                    Uma ilustração que criei para ser usada no MVP, e um
                    wireframe mais detalhado de como comunicar conceitos
                    complexos da pesquisa individualmente, e de forma visual.
                  </i>
                </p>
              </div>

              <div className="container__projchunk">
                <p>
                  Os principais outcomes desse projeto até o momento foram os{" "}
                  <strong>conceitos, levantados em menos de um mês</strong>; e a
                  criação de uma cultura de{" "}
                  <strong>
                    comunicação científica e orientação a negócios
                  </strong>{" "}
                  dentro do laboratório, antes muito restrita a alguns times.
                  Muitos pesquisadores nunca tinham pensado em como explicar a
                  pesquisa para alguém fora da área de Computação ou para alguém
                  da área de vendas. Mesmo ainda na fase inicial, o projeto já
                  conseguiu trazer questionamentos pra os pesquisadores e
                  conexões novas.
                </p>
              </div>
            </section>
          </article>
        </div>

        <div className="button-container">
          <Link to="/">
            <button className="ghost-button" type="button">
              Página inicial
            </button>
          </Link>
        </div>
      </section>

      <section className="container container__footer">
        <footer className="footer">
          <div>
            <h1 className="footer__title">
              Onde mais <br /> me encontrar
            </h1>
            <ul>
              <li>
                <a
                  href="https://github.com/Bia96"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Meu Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bia-paulo/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Meu LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/biapart/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Meu Instagram de arte digital
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="footer__title">Feito por</h1>
            <ul>
              <li>
                <p>Design por Beatriz Paulo</p>
              </li>
              <li>
                <p>
                  Desenvolvido por Beatriz de Paulo e <br />{" "}
                  <a
                    href="https://github.com/leogoncalves"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Leonardo Gonçalves
                  </a>
                </p>
              </li>
            </ul>

            <picture>
              <img src={Logo} alt="" />
            </picture>
          </div>
        </footer>
      </section>
    </main>
  );
};
