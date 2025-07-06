import "./App.css";
import "./output.css";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="container text-center m-auto">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
