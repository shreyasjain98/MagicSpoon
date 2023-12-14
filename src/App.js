
import MagicSpoon from "./magicSpoon/MagicSpoon";
import { BookBoxProvider } from "./contextHook/bookBoxContext";

function App() {
  return (
    <div className="App">
      {/* <Magic/> */}
      <BookBoxProvider>
        <MagicSpoon />
      </BookBoxProvider>
    </div>
  );
}

export default App;
