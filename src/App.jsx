import "./style.css";

export default function App() {
  return (
    <div className="App">
      <div className="header-profile">

        <img
          src="https://avatars.githubusercontent.com/u/44807772?s=400&amp;u=e8aa89f743d29f3f8f386d86cef980f7eb6bf3ba&amp;"
          width="200"
          height="200"
          alt="@gomes1876"
          className="profile-image"
        />
        <div className="description">

          <span
            className="text-default"
          >
            Gabriel Gomes de Oliveira
          </span>
          <span
            className="text-default"
          >
            Desenvolvedor Front-End Pleno
          </span>
          <span
            className="text-default"
          >
            React Native (CLI e Expo), React
          </span>
        </div>
      </div>

      <hr className="divider" />

      <div className="work-area">
        <AreaAtuacao CompanyName={"Code'n App"} time={"Dezembro - 2022 a Fevereiro - 2024"} workArea={"React, React Native, Flutter"} />
        <AreaAtuacao CompanyName={"R2 Soluções"} time={"Fevereiro - 2022 a Dezembro - 2022"} workArea={"React Native"} />

      </div>
      <div className="work-area" style={{
        marginTop: 40
      }}>
        <AreaAtuacao CompanyName={"Clarivi SA"} time={"Maio - 2021 a Fevereiro - 2022"} workArea={"React Native"} />
        <AreaAtuacao CompanyName={"Estágio Bradesco SA"} time={"Março - 2019 a Agosto - 2020"} workArea={"Angular, Java, Testes com Selenium"} />
      </div>

      <hr className="divider" />

      <div className="work-integration">
        <span className="text-default">
          Ferramente de comum uso:
        </span>
        <div className="image-group">

          <img src="https://miro.medium.com/v2/resize:fit:1400/1*OwTgC3_fZg3lUg7Nc17F8Q.png" width={90} height={30} />
          <img class="larger" src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" width={90} height={90} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width={90} height={90} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width={90} height={90} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" width={90} height={90} />
        </div>
      </div>

      <hr className="divider" />

      <div className="container-libs">

        <span className="text-default">
          Libs de comum uso:
        </span>
        <div className="libs">

          <img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" width={170} height={90} />
          <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width={160} height={90} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/2560px-SQLite370.svg.png" width={160} height={90} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Axios_%28computer_library%29_logo.svg/2560px-Axios_%28computer_library%29_logo.svg.png" width={160} height={26} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" width={90} height={90} />
        </div>
      </div>

      <hr className="divider" />
      <div className="container-projects" style={{ maxWidth: 800 }}>

        <span className="text-default">
          Projetos pessoais, presentes em meu github:
        </span>
        <div style={{
          display: "flex",
          flexDirection: "row"
        }}>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 20
          }}>
            <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/stock.png?raw=true" width={60} height={60} style={{
              borderRadius: 14,
              marginTop: 20
            }} />
            <div style={{ gap: 10 }}>

              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/stock_example_1.jpg?raw=true" width={220} height={430} />
              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/stock_example_2.jpg?raw=true" width={220} height={430} style={{ margin: "0 10px 0 10px" }} />
              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/stock_example_3.jpg?raw=true" width={220} height={430} />
            </div>
          </div>
          <span className="text-default">

            Aplicativo de controle de estoque com persistência de dados
          </span>
        </div>


        <div style={{
          width: "100vw"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 20
            }}>
              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/clima.png?raw=true" width={60} height={60} style={{
                borderRadius: 14, marginTop: 20
              }} />
              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/clima_example.jpg?raw=true" width={250} height={450} />
            </div>
            <div style={{
              color: "white",
              marginLeft: 40,
              marginTop: 80
            }}>
              Aplicativo de clima, muda de cor conforme a indicação de clima, atualiza em tempo real conforme a localização
            </div>
            <div>
            </div>

          </div>
        </div>
        <div style={{
          width: "100vw"
        }}>
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 20
            }}>
              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/doe_sangue.png?raw=true" width={60} height={60} style={{
                borderRadius: 14, marginTop: 20
              }} />
              <img src="https://github.com/gomes1876/portifolio/blob/main/images/my_apps/doe_sangue_example_3.png?raw=true" width={250} height={450} />
            </div>
            <div style={{
              color: "white",
              marginLeft: 40,
              marginTop: 80
            }}>
              Gerenciados de estoque de sangue e agendamento, ganhador de Hackathon
            </div>
            <div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
}

function AreaAtuacao({
  CompanyName, time, workArea
}) {
  return (
    <div className="conteainter-interprise">
      <span
        className="text-default"
      >
        {CompanyName}
      </span>
      <span
        className="text-default"
      >
        {time}
      </span>
      <hr />
      <span className="text-default">
        Atuação:
      </span>
      <span className="text-default">
        {workArea}
      </span>
    </div>
  )
}
