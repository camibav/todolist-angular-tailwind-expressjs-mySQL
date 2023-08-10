const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1161202CAmi",
  database: "db_homework",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos MySQL.");
});

app.use(cors());
app.use(express.urlencoded({ extended: true })); //para que pueda leer los datos que vienen del formulario
app.use(express.json()); //express json convierte los datos que vienen del formulario a json

// Ruta para obtener todos las tareas
app.get("/homework", (req, res) => {
  const sql = "SELECT * FROM homework";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

//Ruta para obtener una tarea
app.get('/homework/:id',(req,res)=>{
const id = req.params.id;
const sql = "SELECT * FROM homework WHERE id = ?";
connection.query(sql,[id],(err,result)=>{
  if(err) throw err;
  res.json(result);
})

});

//Ruta para crear una tarea
app.post("/homework", (req, res) => {
  const { tarea, fecha } = req.body;
  if (!tarea || !fecha) {
    res.status(400).send("Faltan campos por llenar");
    return;
  }

  const sql = "INSERT INTO homework (tarea, fecha) VALUES (?, ?)";
  connection.query(sql, [tarea, fecha], (err, result) => {
    if (err) {
      console.error("Error al crear la tarea:", err);
      res.status(500).send("Error al crear la tarea");
      return;
    }
    
    // Si la consulta se realizó con éxito, enviar respuesta de éxito
    res.status(200).json({ message: "Tarea creada con éxito." });
  });
});

//ruta para actualizar una tarea
app.put('/homework/:id',(req,res)=>{
  const id= req.params.id;
  const {tarea,fecha} = req.body;
  if(!tarea || !fecha){
    res.status(400).send("Faltan campos por llenar");
    return;
  }
  const sql = "UPDATE homework SET tarea = ?, fecha = ? WHERE id = ?";
  connection.query(sql,[tarea,fecha,id],(err,result)=>{
    if(err){
      console.error("Error al actualizar la tarea:", err);
      res.status(500).send("Error al actualizar la tarea");
      return;
    }
    res.status(200).json({ message: "Tarea actualizada con éxito." });
  });
});

//ruta para eliminar una tarea
app.delete("/homework/:id", (req, res) => {
  const sql = "DELETE FROM homework WHERE id = ?";
  const id = req.params.id;
  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error al eliminar la tarea:", err);
      res.status(500).send("Error al eliminar la tarea");
      return;
    }
    res.status(200).json({ message: "Tarea eliminada con éxito." });
  });
});



// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});
