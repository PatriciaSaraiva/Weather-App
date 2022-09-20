import { Header, Main, Footer } from "./layouts";
import Home from "../src/views/Home/Home";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
};

export default App;
