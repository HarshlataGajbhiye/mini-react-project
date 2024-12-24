import Card from "./components/Card";
import "./index.css";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/dateCounter";
import StarRanting from "./components/StarRanting";
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
            <StarRanting />
        </div>
    );
}
export default App;
