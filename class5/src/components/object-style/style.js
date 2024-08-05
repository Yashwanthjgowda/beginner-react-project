/* let h2 = document.createElement("h2");
h2.innerHTML ="Hello React Style";

h2.style.background = "red";
h2.style.color = "red";
h2.style.display = "flex";
h2.style.flexDirection = "column"; */

const Container = {
    // Property => Key: value
    display: "flex",
    flexDirection: "column",
};

const Header = {
    padding: "20px 20px",
    textAlign: "center",
    color: "white",
    background: "#000",
    margin: "15px",
    borderRadius: "10px",
};

export const styles = {
    Container,
    Header,
};