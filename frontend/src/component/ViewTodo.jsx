import axios from 'axios';

const ViewTodo = ({ todo, setTodo }) => {
  const msg = todo.length === 0 ? "No todo here " : "";

  const handleDelete = async(id) => {
   try{
      const token=localStorage.getItem('token')

      await axios.delete(`http://localhost:5000/delete/${id}`,{
        headers:{Authorization:`Bearer ${token}`}
      });
      setTodo(todo.filter((t)=>t._id!==id))
   }
   catch(error)
   {
    console.log("error",error)
   }
  };

  const handleEdit = async(id,oldvalue) => {
    const newValue = prompt("Edit your todo",oldvalue);

      if (!newValue || newValue.trim() === "") return;
      try{
        const token=localStorage.getItem('token')

        const res=await axios.put(`http://localhost:5000/update/${id}`,
          {todo:newValue},
          {
            headers:{Authorization:`Bearer ${token}`}
          }
        )
        if(!res)
          return;
        const updated=todo.map((t)=>
        t._id===id?{...t,desc:newValue}:t
        )
        setTodo(updated)
      }catch(error){
        console.log("error:",error)
      }
  };

  return (
    <div>
      <p style={{ textAlign: "center", color: "#777" }}>{msg}</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todo.map((value) => (
          <li key={value._id} style={itemStyle}>
            <span>{value.desc}</span>
            <div>
              <button
                onClick={() => handleEdit(value._id,value.desc)}
                style={{ ...btnStyle, background: "#22c55e" }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(value._id)}
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
