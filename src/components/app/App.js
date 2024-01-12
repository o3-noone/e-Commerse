import "./App.css";
import AppCheck from "./app-check/AppCheck";
import AppHeader from "./app-header/AppHeader";
function App() {
  return (
    <div className="appBox">
      <div className="app">
        <AppHeader />
      </div>
      <div className="appCheck">
        <AppCheck />
      </div>
    </div>
  );
}

export default App;
