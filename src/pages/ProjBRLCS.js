import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";

export const BRLCS = () => {
  return (
    <main className="main">

    <section className="container container__fullproject">
      <h1>BRL Common Styles</h1>
      <div className="content">
        <aside className= "project-data">
          <h2>Sobre o projeto</h2>
          <p>O BRL Common Styles (BRL significa "Brazil Lab") foi uma biblioteca de estilos em Sketch e CSS criada para ser usada nos projetos internos do meu time e de outros no IBM Research.
            Nesse projeto, eu participei desde o estudo inicial dos estilos existentes, passando pelo levantamento dos estilos que seriam criados, até a criação e implementação em HTML e CSS da biblioteca. Para 
            fazer esse projeto, me inspirei junto ao time em Design Systems amplamente usados como o Material Design (Google), Lightning (Salesforce) e o Design System da IBM, o Carbon. Quando estagiei no IBM Research, o Carbon ainda era um sistema
            dando seus primeiros passos. Para se adaptar às necessidades do nosso time naquele momento, vimos a necessidade criar em pouco tempo nosso próprio "Design System": leve, adaptável e pouco intrusivo, que se incorporasse sem esforço aos projetos que já existiam.
          </p>
        </aside>

        <article>
          <section>
            <h1>O problema</h1>
            <h2>Criando um "Design System" leve e não-intrusivo para projetos complexos</h2>
            <p>
            Enquanto eu fazia a revisão do HTML e CSS de páginas novas e antigas dos projetos que trabalhava no IBM Research, percebi que haviam algumas inconsistências em termos de design e componentes
            que poderiam estar sendo corrigidas com o uso de uma biblioteca de estilos comum. Depois de alguns anos de um projeto em curso, nós notamos que apesar de tarefas e fluxos se repetirem no sistema, haviam diversas inconsistências visuais para significados iguais. Como vários designers e desenvolvedores entraram e deixaram o projeto nesse tempo, 
            várias ideias e métodos estavam sendo usados para construir conceitos semelhantes. Por isso, trouxe para o time a ideia de reformular os estilos que já usávamos e criar uma nova biblioteca mais adaptada aos projetos atuais.
            </p>

           <p>
           Buscando acelerar e criar consistência no design e desenvolvimento front-end do nosso time, decidimos
           construir uma biblioteca em Sketch + HTML + CSS para os nossos projetos.

           </p>

           <div>
          {<img src="https://via.placeholder.com/750" alt="" className="src" />}
           </div>

           <p>O BRL-CS precisava ser, antes de tudo, não-intrusivo. As aplicações que construímos no laboratório são baseadas em informações e dados complexos, complexidade que se traduz nas interfaces. Os elementos de UI teriam que dar suporte a esses processos e guiar o usuário, sem desviar a
             atenção dos elementos principais, criar poluição visual ou mensagens confusas. Por isso, decidimos adotar uma única accent color, junto com as cores operacionais (Sucesso, erro, info, alerta) e um set de cores neutras. Todos os elementos não-interativos seriam brancos ou em cinzas neutros. O BRL-CS foi projetado para ser escalável, atômico e requerer o mínimo de classes 
             CSS para implementar elementos básicos, como cards, barras laterais, navegações, entre outros.</p>
             <div>
          {<img src="https://via.placeholder.com/750" alt="" className="src" />}
           </div>
           <p>
           A cada nova feature ou iteração, meu processo começava estruturando os insights da fase de pesquisa com os usuários em intenções, prioridades e necessidades que iriam guiar o design da interface. Comecei transformando essas direções em conceitos rápidos em protótipos de papel ou no quadro. Dessa forma, conseguia rapidamente validar
           os conceitos com o time antes de investir tempo em um protótipo complexo de alta fidelidade.
           </p>

           <p>Quando sei que estamos no caminho certo, começo a experimentar com os componentes de UI que já eram usados em outras partes do projeto. Como essa aplicação já estava implementada, precisei considerar tudo que já era feito de linguagem visual e código antes de criar as telas. Usei o Sketch e libraries de estilo para fazer protótipos de alta fidelidade, e participei junto aos desenvolvedores front-end das implementações.</p>
           <div>
          {<img src="https://via.placeholder.com/750" alt="" className="src" />}
           </div>
           
          </section>
        </article>
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
                Desenvolvido por Beatriz de Paulo e <br /> Leonardo Gonçalves
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
