import Hero from "./components/Hero";
import "./styles/global.css";

function App() {
  return (
    <>
      <Hero />

      <section
        id="works"
        style={{
          minHeight: "100vh",
          background: "#111",
          color: "white",
          padding: "100px 9%"
        }}
      >
        <h2>Selected Works</h2>
        <p>Projects will appear here.</p>
      </section>
    </>
  );
}

export default App;
