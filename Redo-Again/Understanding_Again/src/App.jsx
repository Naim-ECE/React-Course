import "bootstrap/dist/css/bootstrap.min.css"
import KGbutton from "./KGbutton";
import Button_battle, { Random_number } from "./button_battle";
import { Buttonrush } from "./button_battle";

function App() {
  return <>
    <Buttonrush />
    <Buttonrush />
    <h1>
      Hello There!
    </h1>
    <Random_number />
    <Random_number />
    <Random_number />
    <Random_number />
    <Random_number />
  <KGbutton />
  <br />
  <Button_battle />
  </>
}

export default App;