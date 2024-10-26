import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import StoryPage from "./components/StoryPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/story" component={StoryPage} />
      </Switch>
    </div>
  );
}

export default App;
