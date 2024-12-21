import Card from "./components/Card";
import "./components/index.css";
const appStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
};
function App() {
    return (
        <div style={appStyle}>
            <Card />
        </div>
    );
}
export default App;
