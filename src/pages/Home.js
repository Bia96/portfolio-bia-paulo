import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import mob from "../assets/images/mob-hero-1.png";
import brlcs from "../assets/images/brlcs-1.png";
import ibm from "../assets/images/IBM4.jpg";
import sbv from "../assets/images/sbv-3.jpg";
import rex from "../assets/images/rex-6.jpg";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="main">
      <section className="container container__presentation">
        <div className="content">
          <div className="left">
            <picture>
              <img src={Logo} alt="" />
            </picture>
            <h1>
              Oi! eu sou a <br /> Beatriz Paulo.
            </h1>
            <p>
              Sou uma UX e Visual Designer do Rio com um perfil mão na massa.
              Busco sempre entender bem as necessidades e desejos das pessoas
              para criar conceitos, gerar e testar ideias.
            </p>
          </div>

          <div className="right">
            <img src={brlcs} alt="" />
            <img src={mob} alt="" />
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="title-section">Projetos</h1>
        <div className="container__projects">
          <div className="project-card">
            <Link to="/projeto-5">
              <div className="card-blur">
                <div className="card-info">
                  <h1>Research Experiences</h1>
                  <p>Ilustração, UX Design, UX Research, UI Design</p>
                  <button>Ver projeto</button>
                </div>
              </div>
              <img src={rex} alt="" />
            </Link>
          </div>

          <div className="project-card">
            <Link to="/projeto-2">
              <div className="card-blur">
                <div className="card-info">
                  <h1>Sketch-based UX</h1>
                  <p>Ilustração, UX Design</p>
                  <button>Ver projeto</button>
                </div>
              </div>
              <img src={sbv} alt="" />
            </Link>
          </div>

          <div className="project-card">
            <Link to="/projeto-4">
              <div className="card-blur">
                <div className="card-info">
                  <h1>Subsurface Interpretation Advisor</h1>
                  <p>UI Design, UX Design</p>
                  <button>Ver projeto</button>
                </div>
              </div>
              <img src={ibm} alt="" />
            </Link>
          </div>
          <div className="project-card">
            <Link to="/projeto-3">
              <div className="card-blur">
                <div className="card-info">
                  <h1>Common Styles</h1>
                  <p>UI Design, HTML/CSS</p>
                  <button>Ver projeto</button>
                </div>
              </div>
              <img src={brlcs} alt="" />
            </Link>
          </div>

          <div className="project-card">
            <Link to="/projeto-1">
              <div className="card-blur">
                <div className="card-info">
                  <h1>Mob Design</h1>
                  <p>UI Design, HTML/CSS</p>
                  <button>Ver projeto</button>
                </div>
              </div>
              <img src={mob} alt="" href="/projeto-1" />
            </Link>
          </div>
        </div>
      </section>
      <section className="container container__experiences">
        <h1 className="title-section">Experiência</h1>
        <div className="content">
          <aside>
            <h1>Educação</h1>

            <ul>
              <li>
                <h2>Universidade Federal Fluminense</h2>
                <p>Bacharel em Desenho Industrial</p>
              </li>
              <li>
                <h2>
                  PUC/Rio/Laboratório de Ergodesign e Usabilidade de interfaces
                  (LEUI)
                </h2>
                <p>Mestrado em Design (em curso)</p>
              </li>
            </ul>
          </aside>
          <article>
            <section>
              <h1>IBM Research</h1>
              <h2>Estágio em UX Design, 2018-2020</h2>
              <p>
                IBM Research é o laboratório de pesquisa da IBM, focado em
                desenvolver soluções em AI para diversas indústrias. Como
                estagiária de Design, atuei entendendo entregáveis de UX (user
                journeys, mapas de empatia) para projetar interfaces de várias
                aplicações para empresas de petróleo e gás. Trabalhei junto com
                desenvolvedores front-end para conceber e implementar
                resultados. Também atuei com UX Researchers em entrevistas,
                testes de usabilidade e em workshops de design thinking
                diretamente com usuários.
              </p>
            </section>

            <section>
              <h1>Ministério Público do Estado do Rio de Janeiro</h1>
              <h2>Estágio em Design, 2016-2018</h2>
              <p>
                No MPRJ, trabalhei na Gerência de Portal e Programação Visual
                com criação de cartazes, revistas e cartilhas para diversas
                iniciativas. Também trabalhei junto a desenvolvedores fornecendo
                assets para interfaces da intranet e portal do MPRJ.
              </p>
            </section>
          </article>
        </div>
        <h1 className="contact-invite">Vamos conversar?</h1>
        <div className="button-container">
          <a
            href="https://www.linkedin.com/in/bia-paulo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="send-email" type="button">
              Meu LinkedIn
            </button>
          </a>
          <p>Ou se preferir, mande um email: beatrizsandp@gmail.com</p>
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
                  Desenvolvido por Beatriz de Paulo e <br />
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
