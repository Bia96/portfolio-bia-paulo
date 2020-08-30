import React from "react";
import Logo from "../assets/images/logo/logo-light.svg";
import RX1 from "../assets/images/rex-1.jpg";
import RX2 from "../assets/images/rex-2.jpg";
import CS3 from "../assets/images/brlcs-3.png";


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
             O projeto Research Experiences tem como objetivo
              encontrar em pouco tempo uma maneira inovadora e engajante de se comunicar as pesquisas feitas no IBM Research. Nesse projeto, trabalhei na parte de User Research e Ideação, 
              realizando desde entrevistas inicias até workshops de ideação.
            </p>
          </div>

        </div>
</section>

    <section className="container container__fullproject">
     
      <div className="content">
    

        <article>
          <section>
            <h1>O problema</h1>
            <h2>Comunicando para clientes, pesquisadores e para a sociedade a pesquisa da IBM</h2>

            <div className="container__projchunk">
              <p>
                Cientistas encaram problemas de um jeito parecido, mas bastante diferente de designers e profissionais mais orientados a negócios. Um problema de pesquisa pode ser analisado por anos ou décadas até que vire uma solução
                palpável ou um produto que realmente se incorpora na vida das pessoas. Por isso, para muitos pesquisadores, comunicar o que eles fazem, como, por quê e para quem, pode ser um desafio. Pensando nisso, resolvemos conversar com pesquisadores, potenciais clientes e pessoas da área de vendas da IBM para
                entender como poderíamos comunicar melhor as pesquisas e soluções que são construídas no laboratório.
              </p>
           </div>

           <div className="container__projchunk">
            <p>
              Começamos traçando um plano de entrevistas, onde todos os pesquisadores do laboratório explicariam sua pesquisa um para o outro em turnos. Nessa fase,
              eu atuei elaborando o plano com o time e facilitando entrevistas entre os pesquisadores. O objetivo foi compreender os recursos e pain points dos pesquisadores 
              ao apresentarem suas pesquisas para diferentes audiências. Também entrevistamos pessoas interessadas em tecnologia e pessoas da IBM na área de vendas.
            </p>
              <div>
              <img src={RX1} alt="" />
            </div>
           </div>

           <div className="container__projchunk">
            <p>
              Para entender melhor as boas práticas de comunicação científica e experiências imersivas, fizemos um
              mapa de Benchmarking onde todos os envolvidos no projeto puderam colaborar com referências livremente.
              Eu categorizei as referências que o time trouxe e tirei insights de cada uma delas, que mais tarde iam ajudar na fase de ideação.
            </p>
          <img src={RX2} alt="" />
          </div>

          <div className="container__projchunk">
            <p>
              Com base nas entrevistas, o passo seguinte foi a descoberta das Personas. Fizemos um workshop com o time e com o time extendido para conversar sobre nossos insights e categorizá-los, 
              o que resultaria em algumas personas de pesquisador, cliente/vendedor e audiência. Descobrindo as personas, queríamos descobrir os maiores pain points de cada uma para compreender uma pesquisa científica.
            </p>
          <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
            <p>
              Outro outcome da fase de entrevistas foi um mapa interativo de todas as pesquisas, áreas, pesquisadores e resultados
              do Laboratório. Junto com o time, eu trabalhei conceituando o Mapa, desde rascunhos até protótipos interativos. O feedback nessa parte foi bastante positivo, porque tornou mais claras conexões 
              que passavam despercebidas cruzando dados como área de expertise, tempo no Laboratório, time, skills, entre outras.
            </p>
          </div>

          <div className="container__projchunk">
              <img src={CS3} alt="" />
              <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
            <p>
              Na análise dos dados, eu também participei na criação do modelo de análise das entrevistas. Como esse foi um projeto aberto para pesquisadores com 
              diversas skills contribuírem, criamos um modelo que pessoas sem um background de design ou pesquisa qualitativa pudessem usar como ferramenta. Usando esse modelo, chegamos em uma série de insights sobre pain points dos pesquisadores,
              dificuldades e recursos que funcionam para explicar suas pesquisas.
            </p>
            <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
            <p>
              Com as descobertas da primeira fase de pesquisa com usuários, criamos os Hills/Need Statements pra cada Persona, fizemos uma votação das melhores referências de benchmarking, e facilitamos um workshop de Ideação com todo o time.
              Meu papel nesse workshop foi de planejamento e facilitação - como eu participei um pouco de cada parte da pesquisa, pude ter uma visão global dos insights até aquela hora, e isso ajudou bastante na fase de ideação.
            </p>
            <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
              <img src={CS3} alt="" />
              <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
            <p>
              Criamos vários conceitos de formas de comunicar uma pesquisa, chegando a um MVP baseado em um projeto real. Ajudei a criar ilustrações e wireframes desses conceitos para começar a implementação e validação.
            </p>
            <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
              <img src={CS3} alt="" />
              <img src={CS3} alt="" />
          </div>

          <div className="container__projchunk">
            <p>
              Os principais outcomes desse projeto até o momento foram os conceitos, levantados em menos de um mês; e a criação de uma cultura de comunicação científica e orientação a negócios dentro do laboratório, antes muito restrita a alguns times. Muitos 
              pesquisadores nunca tinham pensado em como explicar a pesquisa para alguém fora da área de Computação ou para alguém da área de vendas. Mesmo ainda na fase inicial, o projeto já conseguiu trazer questionamentos pra os pesquisadores e conexões novas.
            </p>
            <img src={CS3} alt="" />
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
