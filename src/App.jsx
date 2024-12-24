import Card from "./components/Card";
import "./index.css";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/dateCounter";
const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1rem",
    padding: "4rem 0",
};
function App() {
    return (
        <div style={appStyle}>
            <Card />
            <TextExpander />
            <DateCounter />
        </div>
    );
}
export default App;
