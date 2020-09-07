import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import CS1 from "../assets/images/brlcs-1.png";
import CS4 from "../assets/images/brlcs-4.png";
import CS2 from "../assets/images/brlcs-2.png";
import CS3 from "../assets/images/brlcs-3.png";

import { Link } from "react-router-dom";

export const BRLCS = () => {
  return (
    <main className="main">
      <section className="container container__presentation">
        <div className="content">
          <div className="left">
            <h1>BRL Common Styles</h1>
            <h2>Sobre o projeto</h2>
            <p>
              O BRL Common Styles (BRL significa "Brazil Lab") foi uma{" "}
              <strong>biblioteca de estilos em Sketch e CSS</strong> criada para
              ser usada nos projetos internos do meu time e de outros no IBM
              Research. Nesse projeto, eu{" "}
              <strong>
                participei desde o estudo inicial dos estilos existentes, até a
                criação e implementação em HTML e CSS
              </strong>{" "}
              da biblioteca. Me inspirei junto ao time em Design Systems
              amplamente usados como o Material Design (Google), Lightning
              (Salesforce) e o Design System da IBM, o Carbon. Para se adaptar
              às necessidades do nosso time naquele momento, vimos a necessidade
              criar em pouco tempo nosso próprio "Design System":{" "}
              <strong>leve, adaptável e pouco intrusivo</strong>, que se
              incorporasse sem esforço aos projetos que já existiam.
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
                Criando um "Design System" leve e não-intrusivo para projetos
                complexos
              </h2>

              <div className="container__projchunk">
                <p>
                  Enquanto fazia a revisão do HTML e CSS de páginas novas e
                  antigas dos projetos que trabalhava no IBM Research, percebi
                  que haviam algumas{" "}
                  <strong>inconsistências em termos de design</strong> e
                  componentes que poderiam estar sendo corrigidas com o uso de
                  uma biblioteca de estilos comum. Por isso, trouxe para o time
                  a ideia de reformular os estilos que já usávamos e{" "}
                  <strong>
                    criar uma nova biblioteca mais adaptada aos projetos atuais
                  </strong>
                  , buscando acelerar e criar consistência no design e
                  desenvolvimento front-end.
                </p>

                <div>
                  <img src={CS1} alt="" />
                </div>
              </div>

              <div className="container__projchunk reverse">
                <p>
                  O BRL-CS precisava ser, antes de tudo,{" "}
                  <strong>não-intrusivo</strong>. As aplicações que construímos
                  no laboratório são baseadas em informações e dados complexos,
                  complexidade que se traduz nas interfaces. Os elementos de UI
                  teriam que{" "}
                  <strong>
                    dar suporte a esses processos e guiar o usuário
                  </strong>
                  , sem desviar a atenção dos elementos principais, criar
                  poluição visual ou mensagens confusas. Por isso, decidimos
                  adotar <strong>uma única accent color</strong>, junto com as
                  cores operacionais (Sucesso, erro, info, alerta) e um set de
                  cores neutras. Todos os elementos não-interativos seriam
                  brancos ou em cinzas neutros. O BRL-CS foi projetado para ser
                  escalável, atômico e requerer o mínimo de classes CSS para
                  implementar elementos básicos, como cards, barras laterais,
                  navegações, entre outros.
                </p>
                <div>
                  <img src={CS2} alt="" />
                </div>
              </div>

              <div className="container__projchunk">
                <p>
                  Meu primeiro passo foi{" "}
                  <strong>procurar as inconsistências</strong> pelos projetos
                  que já estávamos construindo. O maior projeto na época já era
                  maduro o suficiente para apresentar vários fluxos, componentes
                  e elementos de UI que já eram usados mas que não tinham uma
                  padronização consistente. Depois de{" "}
                  <strong>fazer um levantamento</strong> dos vários jeitos
                  diferentes que os elementos eram criados, determinei alguns
                  elementos que eram fundamentais na biblioteca e suas
                  características (por exemplo, botões que poderiam ser cheios
                  ou outline, dropdowns múltiplas, tooltips, elementos de
                  formulário, entre outros).
                  <strong>Seguindo os princípios do atomic design</strong>, os
                  primeiros elementos a serem construídos foram as cores e
                  tipografia, logo depois formas básicas, para por fim
                  padronizar cards, modais e sidebars.
                </p>

                <div className="image">
                  <img src={CS3} alt="" />
                  <p>
                    Um exemplo de como os elementos básicos constroem os maiores
                    no BRLCS, seguindo a prática do atomic design para design
                    systems.
                  </p>
                </div>
              </div>

              <div className="container__projchunk reverse">
                <p>
                  Uma vez completamente projetado, a biblioteca foi testada por
                  algumas semanas apenas como uma library do Sketch, com os
                  designers. Nesse pequeno tempo, já pudemos melhorar bastante o
                  projeto, incluindo/removendo elementos e mudando regras.
                  Depois, começamos a desenvolver o código CSS e HTML, sempre em
                  alinhamento com o design. Queríamos que os devs pudessem{" "}
                  <strong>
                    implementar as interfaces usando o máximo dos nossos tokens
                  </strong>
                  , sem recorrer a “atalhos” ou modificando a library para fazer
                  uma interface. Usamos Sass para facilitar a construção da
                  library, e eu desenvolvi uma página de documentação que
                  concentrava o código-base e o design de cada elemento do
                  BRL-CS. O sistema começou a ser mantido de forma colaborativa
                  pelos designers e devs do time, crescendo e evoluindo para
                  continuar útil e consistente.
                </p>

                <img src={CS4} alt="" />
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
