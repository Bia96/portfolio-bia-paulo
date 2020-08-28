import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";

import { Link } from "react-router-dom";

export const Eixo = () => {
  return (
    <main className="main">

    <section className="container container__fullproject">
      <h1>Eixo</h1>
      <div className="content">
        <aside className= "project-data">
          <h2>Sobre o projeto</h2>
          <p>O Subsurface Interpretation Advisor foi o projeto público que mais atuei dentro da IBM. Ao longo do meu período
            de estágio, também trabalhei desde a pesquisa com usuários até a prototipagem de diversos outros projetos. O maior desafio foi: como capturar processos de tomada de decisão complexos
            na indústria de óleo e gás, e construir interfaces que suportem esses processos para os usuários?
          </p>
        </aside>

        <article>
          <section>
            <h1>O problema</h1>
            <h2>Estruturando e suportando decisões com AI na indústria de Óleo e Gás</h2>
            <p>
            No IBM Research, trabalhei junto a outros designers e especialistas para desenvolver interfaces e fluxos para projetos de computação cognitiva. Meus maiores desafios foram projetar UIs que comunicavam processos complexos, como analisar o risco de um prospecto de exploração de petróleo, ou descobrir as características de uma região de cubo sísmico. Participei diretamente de projetos com diversos clientes. Um desses projetos foi o
            Subsurface Interpretation Advisor, desenvolvido em parceria com a empresa portuguesa Galp Energia.
            </p>

           <p>
           O SIA é um sistema baseado em AI para acelerar a interpretação sísmica na indústria de óleo e gás. Os principais usuários são geólogos e geofísicos, que analisam uma série de dados (anotações, artigos científicos, mapas estratigráficos, cubos sísmicos, cases anteriores) para decidir o futuro de prospectos para exploração de óleo e gás. O sistema ajuda os profissionais a agregar esses dados, e fornece
           sugestões e evidências. O conhecimento é agregado e construído ao longo do tempo a cada novo projeto.
           </p>

           <div>
          {<img src="https://via.placeholder.com/750" alt="" className="src" />}
           </div>

           <p>Quando entrei na IBM como estagiária, o projeto estava na fase de implementação e iterações. Meu papel no time foi o de rever e melhorar fluxos que já existiam, e integrá-los a features novas. Eu analisei entregáveis de UX como mapas de empatia e user journeys para extrair requisitos e ideias para protótipos de UI. Aqui, o desafio foi traduzir processos complexos que agregam muitos dados em
             interfaces simples, intuitivas, que suportassem a interpretação mantendo a coerência e boa usabilidade. </p>
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

      <div className="button-container">
        
        <Link to="/Home">
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
