const ViewTodo = ({ todo, setTodo }) => {
  const msg = todo.length === 0 ? "No todo here " : "";

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };

  const handleEdit = (index) => {
    const newValue = prompt("Edit your todo", todo[index]);

    if (newValue !== null && newValue.trim() !== "") {
      const updatedTodo=[...todo];
      updatedTodo[index]=newValue;
      setTodo(updatedTodo);
      localStorage.setItem("todo",JSON.stringify(updatedTodo));
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center", color: "#777" }}>{msg}</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todo.map((value, index) => (
          <li key={index} style={itemStyle}>
            <span>{value}</span>
            <div>
              <button
                onClick={() => handleEdit(index)}
                style={{ ...btnStyle, background: "#22c55e" }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                style={{ ...btnStyle, background: "#ef4444" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTodo;

const itemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 10px",
  marginBottom: "8px",
  background: "#fff",
  color:"black",
  borderRadius: "6px",
  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
};

const btnStyle = {
  marginLeft: "6px",
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
};
