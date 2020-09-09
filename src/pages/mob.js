import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import Mob1 from "../assets/images/mob-1.jpg";
import Mob2 from "../assets/images/mob-2.jpg";
import Mob3 from "../assets/images/mob-3.jpg";
import Mob4 from "../assets/images/mob-4.png";

import { Link } from "react-router-dom";

export const Mob = () => {
  return (
    <main className="main">
      <section className="container container__presentation">
        <div className="content">
          <div className="left">
            <h1>Mob Design Assistivo</h1>
            <h2>Sobre o projeto</h2>
            <p>
              A Mob é uma startup criada por estudantes de Design em 2017 que
              busca prestar consultoria em projetos de design assistivo. Em
              2019, fiz o design e a implementação inicial do site institucional
              da Mob.
            </p>
          </div>
        </div>
      </section>

      <section className="container container__fullproject">
        <div className="content">
          <article>
            <section>
              <h1>Mob Design</h1>
              <h2>Criando um site simples e cativante para uma startup</h2>

              <div className="container__projchunk">
                <p>
                  A Mob é uma <strong>startup de Design Assistivo</strong> que
                  presta desde consultoria a projetos a desenvolvimento de
                  produtos assistivos. Eu participei junto aos outros fundadores
                  das ideações iniciais para a identidade visual, e conversei
                  bastante com eles para entender o{" "}
                  <strong>propósito e a proposta de valor da startup</strong>.
                  Alguns bootcamps e pitches depois, percebemos que precisávamos
                  de{" "}
                  <strong>
                    um site rápido e que comunicasse tudo que a Mob podia fazer
                    pelos clientes
                  </strong>
                  , de forma clara e concisa. O maior desafio foi pensar no
                  design e no desenvolvimento de um site onde ainda não teríamos
                  muito conteúdo, mas uma mensagem para passar e informar.
                  Apesar da maturidade inicial da empresa, precisávamos cativar
                  os clientes.
                </p>

                <div>
                  <img src={Mob1} alt="" />
                </div>
              </div>

              <div className="container__projchunk reverse">
                <p>
                  O primeiro site da Mob precisava ser{" "}
                  <strong>
                    simples, mas ter a cara da startup e falar com os clientes
                  </strong>{" "}
                  da forma certa. Pra isso, comecei elegendo algumas cores e
                  tipografias para serem usadas. A cor predominante da
                  identidade visual da Mob é o azul turquesa. Porém, para alguns
                  CTAs, adicionamos um amarelo de destaque. Por ser legível e
                  ter uma família robusta, escolhemos a Open Sans como principal
                  fonte.
                </p>
                <div>
                  <img src={Mob2} alt="" />
                </div>
              </div>

              <div className="container__projchunk">
                <p>
                  Começamos fazendo alguns rascunhos, no papel e em forma de
                  wireframes. Discutimos desde o formato de apresentação das
                  missões até o melhor formato para o Hero, até chegar em um
                  conceito inicial. A partir daí, usei o boilerplate{" "}
                  <a href="https://taniarascia.github.io/primitive/">
                    Primitive
                  </a>{" "}
                  para começar o desenvolvimento do site. Defini as variáveis de
                  cor e tipografia, e usei apenas HTML e CSS para criar um
                  protótipo navegável. Fizemos várias{" "}
                  <strong>iterações e experimentos</strong> até chegar em um MVP
                  para divulgação.
                </p>
                <img src={Mob3} alt="" />
              </div>

              <div className="container__projchunk full">
                <img clasName="full" src={Mob4} alt="" />
              </div>
              <p>
                Ilustrações vetoriais por{" "}
                <a
                  href="https://www.behance.net/shirleysantosps"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Shirley Santos
                </a>
              </p>
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
