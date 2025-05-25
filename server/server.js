const express = require('express');
const mysql = require('mysql2')
const cors = require('cors');
const path = require('path')


const app = express();

app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json());

const port = 8080

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "filohori",
  database: "meding"
})
//endpoint
app.post('/register', (req, res)=>{
  sql = "INSERT INTO pazienti ('nomePaziente', 'cognomePaziente', 'codFiscPaziente', 'dataNascita', 'luogoNascita', 'telefonoPaziente', 'emailPaziente', 'residenzaPaziente', 'viaPaziente') VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [
    req.body.nomePaziente,
    req.body.cognomePaziente,
    req.body.codFiscPaziente,
    req.body.dataNascita,
    req.body.luogoNascita,
    req.body.telefonoPaziente,
    req.body.emailPaziente,
    req.body.residenzaPaziente,
    req.body.viaPaziente
  ]
  db.query(sql.values, (err, result)=>{
    if(err) return res.json({message: "qualche cosa è andato storto" + err})
      return res.json({success: "Il paziente è stato inserito in anagrafica"})
  })
})




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 