import "./App.css";
import "./output.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="container text-center">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
