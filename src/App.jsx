import Card from "./components/Card";
import "./index.css";
import TextExpander from "./components/TextExpander";
const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "rrem",
    padding: "4rem 0",
};
function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
        </div>
    );
}
export default App;
