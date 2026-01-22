import { useState, useEffect } from "react";
import ViewTodo from "./ViewTodo";

const AddTodo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [todo, setTodo] = useState([]);

 
  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todo")) || [];
    setTodo(Array.isArray(storedTodo) ? storedTodo : []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputTodo.trim() === "") return;

    const updatedTodo = [...todo, inputTodo];
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
    setInputTodo("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}> Todo App</h2>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSubmit} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ViewTodo todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default AddTodo;


const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    background: "#f9fafb",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "8px 14px",
    background: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
