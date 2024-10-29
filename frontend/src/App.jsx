import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Hello world</h1>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
