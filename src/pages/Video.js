import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import V1 from "../assets/images/sbv-1.jpg";
import V2 from "../assets/images/sbv-2.jpg";
import V3 from "../assets/images/sbv-3.jpg";
import V4 from "../assets/images/sbv-4.jpg";
import V5 from "../assets/images/sbv-5.jpg";
import V6 from "../assets/images/sbv-6.jpg";
import V7 from "../assets/images/sbv-7.png";

import { Link } from "react-router-dom";

export const Video = () => {
  return (
    <main className="main">
      <section className="container container__presentation">
        <div className="content">
          <div className="left">
            <h1>Sketch-based UX</h1>
            <h2>Sobre o projeto</h2>
            <p>
              Comunicar a visão de uma experiência para stakeholders e usuários
              de uma forma engajante pode ser um problema complexo,
              principalmente quando ainda não existem demos ou protótipos de
              alta fidelidade. Pensando nisso, nosso time imaginou comunicar a
              experiência do produto de uma forma rápida e principalmente
              humanizada para todos os envolvidos nos processo usando sketches e
              storytelling.
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
                Mostrando a jornada do usuário em uma língua comum a todos
              </h2>

              <div className="container__projchunk">
                <p>
                  Em projetos de pesquisa, os desafios para os designers
                  envolvidos são muitos: A incerteza do resultado, que depende
                  de resultados de pesquisa; e a diversidade do background dos
                  envolvidos. No time extendido do nosso projeto, trabalhamos
                  com engenheiros, geólogos, geofísicos, especialistas em AI,
                  Data Scientists, entre outros. Pesquisadores da área de
                  tecnologia estão acostumados a{" "}
                  <strong>tratar problemas de forma linear</strong>, enquanto
                  designers trabalham de forma iterativa. Para isso, descobrimos
                  que{" "}
                  <strong>
                    user journeys contados em forma de histórias em vídeo
                  </strong>{" "}
                  poderiam nos ajudar a comunicar os insights da pesquisa com os
                  usuários e nossas ideias de um jeito que todos os stakeholders
                  e clientes pudessem compreender.
                </p>

                <div>
                  <img src={V1} alt="" />
                </div>
              </div>

              <div className="container__projchunk">
                <p>
                  O primeiro caso onde aplicamos essa técnica foi no de{" "}
                  <strong>
                    assistentes baseados em AI para a indústria de petróleo e
                    gás
                  </strong>
                  . Após diversas atividades de campo para delinear a jornada do
                  usuário, foi criado um <strong>storyboard ilustrado</strong>,
                  que serviu de base para o storyboard escrito. O objetivo era{" "}
                  <strong>
                    comunicar de que formas nossa solução poderia se incorporar
                    ao trabalho dos clientes, mostrando seus pain points e
                    destacando as oportunidades
                  </strong>{" "}
                  de melhora. Construir o storyboard foi um processo iterativo e
                  colaborativo entre time e stakeholders.
                </p>
                <div className="image">
                  <img src={V2} alt="" />
                  <p>
                    Parte de um storyboard inicial de um dos vídeos. Os
                    storyboards são validados com especialistas do campo, para
                    garantir que além de comunicar a jornada, ele seja
                    tecnicamente fiel.
                  </p>
                </div>
              </div>

              <div className="container__projchunk">
                <p>
                  Os storyboards iniciais se tornaram desenhos mais detalhados,
                  basados em aspectos técnicos reais coletados no trabalho de
                  campo, principalmente conceitos complexos de AI e Geologia.
                  Meu papel aqui foi o de{" "}
                  <strong>
                    compreender as descobertas de campo dos User Researchers e
                    os conceitos técnicos, e imaginar analogias visuais para
                    comunicá-los
                  </strong>
                  , como ilustrações e animações simples. Para cada ponto do
                  storyboard, imaginamos personagens (baseados nas Personas),
                  situações e cenários. Usando iPad e mesa digitalizadora, fiz
                  diversas ilustrações que lembram sketches no papel. Pensei em
                  um formato de ilustração que fosse{" "}
                  <strong>rápido de reproduzir e de manipular</strong>: nesse
                  estilo de ilustração, podemos brincar com os destaques de cada
                  cena para comunicar mensagens diferentes.
                </p>
                <div className="image">
                  <img src={V3} alt="" />
                  <p>
                    Uma das ilustrações feitas por mim para serem usadas nos
                    vídeos.
                  </p>
                </div>
              </div>

              <div className="container__projchunk">
                <img src={V4} alt="" />
                <img src={V5} alt="" />
              </div>

              <div className="container__projchunk">
                <p>
                  Os vídeos alcançaram bem os objetivos que imaginamos,{" "}
                  <strong>
                    passando a mensagem de forma clara e criando uma visão comum
                    entre stakeholders, desenvolvedores, especialistas na área e
                    designers
                  </strong>
                  . Como é um meio humanizado de comunicar as ideias, usando
                  personagens e cenários reais, o vídeo agiu como uma forma de
                  introduzir novas ideias. Ver como a solução entraria na vida
                  diária dos usuários criou uma ligação importante.
                </p>
                <img src={V6} alt="" />
              </div>

              <div className="container__projchunk">
                <p>
                  User flows como conhecemos não comunicariam tão bem o valor da
                  solução, e não considerariam o contexto de forma tão forte.
                  Por outro lado, mockups de alta fidelidade não dariam a visão
                  global e humanizada que pretendíamos mostrar, especialmente no
                  início do projeto. Percebemos que o sketch-based video trouxe
                  inovação na comunicação de conceitos, quando aplicado como
                  ferramenta junto com métodos mais tradicionais de UX. O
                  resultado, além de{" "}
                  <strong>
                    ter se tornado uma prática comum no time, foi comunicado num{" "}
                    <a href="https://dl.acm.org/doi/10.1145/3334480.3375221">
                      paper publicado na CHI 2020
                    </a>
                  </strong>{" "}
                  (Conference on Human Factors in Computing Systems).
                </p>
                <img src={V7} alt="" />
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
