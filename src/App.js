import "./App.css";
import AddAppointment from "./components/AddAppointment";
import Search from "./components/Search";
import AddInfo from "./components/AddInfo";

function App() {
  return (
    <div className="App">
      <h3>예약 시스템</h3>
      <AddAppointment />
      <Search />
      <AddInfo />
    </div>
  );
}

export default App;
