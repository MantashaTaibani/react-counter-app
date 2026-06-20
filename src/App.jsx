import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "white" : "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "3px solid gray",
          borderRadius: "20px",
          padding: "40px",
          width: "400px",
          textAlign: "center",
          backgroundColor: darkMode ? "#333" : "white",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}> Counter App</h1>

        <h2
          style={{
            fontSize: "60px",
            color:
              count >= 50
                ? "green"
                : count >= 20
                ? "orange"
                : "red",
          }}
        >
          {count}
        </h2>

        <h3>
          {count === 0
            ? "🚀 Start Counting!"
            : count === 100
            ? "🎉 Maximum Reached!"
            : `Current Count: ${count}`}
        </h3>

        <button
          onClick={increment}
          disabled={count === 100}
          style={{
            margin: "10px",
            padding: "10px 18px",
            borderRadius: "10px",
            background: "green",
            color: "white",
            border: "none",
            cursor: count === 100 ? "not-allowed" : "pointer",
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          disabled={count === 0}
          style={{
            margin: "10px",
            padding: "10px 18px",
            borderRadius: "10px",
            background: "red",
            color: "white",
            border: "none",
            cursor: count === 0 ? "not-allowed" : "pointer",
          }}
        >
          Decrement
        </button>

        <button
          onClick={reset}
          style={{
            margin: "10px",
            padding: "10px 18px",
            borderRadius: "10px",
            background: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reset
        </button>

        <br />

        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "10px",
            background: darkMode ? "#ffd700" : "#444",
            color: darkMode ? "black" : "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <div
          style={{
            marginTop: "30px",
            width: "100%",
            height: "20px",
            background: "#ccc",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${count}%`,
              height: "100%",
              background: 
                     count >= 50
                    ? "green"
                     : count >= 20
                     ? "orange"
                     : "red",
              transition: "0.3s",
            }}
          />
        </div>

        <p>{count}% of Maximum (100)</p>
        <hr style={{ margin: "20px 0" }} />

<footer
  style={{
    fontSize: "14px",
    color: darkMode ? "#ccc" : "#666",
  }}
>
  🚀 Built with React • Made with ❤️ by Mantasha
</footer>
        
      </div>
    </div>
  );
}


export default App;