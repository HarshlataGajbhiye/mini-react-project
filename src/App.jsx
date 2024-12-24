import Card from "./components/Card";
import "./index.css";
import TextExpander from "./components/TextExpander";
import DateCounter from "./components/dateCounter";
import StarRating from "./components/StarRating";
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
            <div>
                <StarRating color="#be4bdb" defaultRating={3} size={5} />
                <StarRating color="#ffd43b" defaultRating={4} size={6} />
                <StarRating color="#40c057" defaultRating={5} size={9} />
            </div>
        </div>
    );
}
export default App;
