import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Content, CustomProvider, Footer, Header } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "./App.css";
import FooterContainer from "./component/Footer/FooterContainer";
import LoadingPage from "./component/Loading/LoadingPage/LoadingPage";
import routes from "./component/Routes/routes";
import TopNavService from "./component/TopNav/TopNavService";

function App() {
  const Routing = () => {
    return (
      <Routes>
        {routes.map((route, i) => {
          return (
            <Route
              key={i}
              path={route.path}
              element={<route.element />}
              exact={route.exact}
            />
          );
        })}
      </Routes>
    );
  };
  return (
    <CustomProvider theme="dark">
      <div className="App">
        <Suspense fallback={<LoadingPage />}>
          <Router>
            <Container>
              <Header style={{ position: "fixed", zIndex: 99, width: "100%" }}>
                <TopNavService />
              </Header>
              <Content className="main">{Routing()}</Content>
              <Footer>
                <FooterContainer />
              </Footer>
            </Container>
          </Router>
        </Suspense>
      </div>
    </CustomProvider>
  );
}

export default App;
