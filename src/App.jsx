import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <SummaryCards />
      </main>
    </div>
  );
}

export default App;