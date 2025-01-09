import "./App.css";
import records from "./components/records.jsx";

const App = () => {
  return (
    <div>
      <h1>学習記録一覧</h1>
      <ul>
        {records.map((item, index) => (
          <li key={index}>
            {item.title}...{item.time}時間
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
