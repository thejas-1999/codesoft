import { Container } from "react-bootstrap";
import "./assets/styles/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screen/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
