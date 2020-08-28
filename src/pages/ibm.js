import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import IBM1 from "../assets/images/IBM1.png";
import IBM2 from "../assets/images/IBM2.png";
import IBM4 from "../assets/images/IBM4.jpg";

import { Link } from "react-router-dom";

export const IBM = () => {
  return (
    <main className="main">

      <section className="container container__presentation">
        <div className="content">
          <div className="left">
            <h1>Design na IBM Research</h1>
            <p>
                Na IBM, eu atuei em vários pontos de projetos com clientes: Pesquisa com usuários, criação de conceitos de UI e descoberta de entregáveis de UX e implementação de protótipos de alta fidelidade.
                O grande desafio que encontrei nesses projetos foi o de capturar
                processos de tomada de decisão complexos e construir interfaces que suportem esses processos para os
                usuários?
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
                Estruturando e suportando decisões com AI na indústria de Óleo e
                Gás
              </h2>
              <div className="container__projchunk">
                <p>
                  No IBM Research, trabalhei junto com outros designers e
                  especialistas para desenvolver interfaces e fluxos para projetos
                  baseados em AI e Machine Learning. Aqui, o desafio foi traduzir processos complexos que agregam
                  muitos dados em interfaces simples, intuitivas, que suportassem
                  a interpretação mantendo a coerência e boa usabilidade Um desses
                  projetos foi o Subsurface Interpretation Advisor, desenvolvido
                  em parceria com a empresa portuguesa Galp Energia.

                
                  Quando entrei na IBM como estagiária, o projeto estava na fase
                  de implementação e iterações. Meu papel no time foi o de rever e
                  melhorar fluxos que já existiam e integrá-los a features novas.
                  Eu analisei entregáveis de UX como mapas de empatia e user
                  journeys para extrair requisitos e ideias para protótipos de UI.
                
  
                </p>

                <img src={IBM1} alt="" />
              </div>

              <div className="container__projchunk reverse">

                  <p>
                  Meu processo começava
                  estruturando os insights da fase de User Research em
                  intenções, prioridades e necessidades. Usei essas direções para fazer conceitos
                  rápidos em protótipos de papel ou no quadro. Dessa forma,
                  conseguia rapidamente validar os conceitos com o time antes de
                  investir tempo em um protótipo complexo de alta fidelidade.
                  </p>
          
                  <img src={IBM2} alt="" />
              
              </div>

              <div className="container__projchunk">
                <p>
                Quando sei que estamos no caminho certo, começo a experimentar
                    com os componentes de UI que já eram usados em outras partes do
                    projeto. Como essa aplicação já estava implementada, precisei
                    considerar tudo que já era feito de linguagem visual e código
                    antes de criar as telas. Usei o Sketch e libraries de estilo
                    para fazer protótipos de alta fidelidade, e participei junto aos
                    desenvolvedores front-end das implementações em HTML e CSS. Como os projetos B2B que participei estão
                    protegidos por NDAs e/ou em fase inicial, não é possível mostrar os conceitos implementados - mas você pode ver mais sobre eles <a href="https://www.ibm.com/blogs/ibm-comunica/ibm-desvenda-uso-da-ia-no-setor-de-energia-na-rio-oil-gas-2018/">aqui </a>  
                     e <a href="https://www.galp.com/corp/pt/media/comunicados-de-imprensa/comunicado/id/834">aqui.</a>
                </p>
                
                  <img src={IBM4} alt="" />
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
