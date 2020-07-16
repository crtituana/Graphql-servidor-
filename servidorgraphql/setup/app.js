const express = require('express'),
  bodyParser = require('body-parser'),
  connectDb = require('../config/db'),
  passport = require('passport'),
  cors = require('cors'),
  parseurl = require('parseurl');

let app = express(),
  session = require('express-session'),
  usuarioRutas = require('../rutas/usuarios.Ruta'),
  cursoRoutas = require('../rutas/curso.Ruta'),
  rolRoutas = require('../rutas/curso.Ruta'),
  multerRutas = require('../rutas/multer.Ruta'),
  db = connectDb ()
  sess = {
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    name: 'sessionID',
    cookie: {
        httpOnly: false,
        naxAge: parseInt(process.env.TIEMPO)
    }  
},
  corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
  };

app.use(bodyParser.urlencoded({
    extended: false, 
  }));

app.use(bodyParser.json());

//Cors 
app.use(cors(corsOptions));

//Session
app.use(session(sess));

//Passport
app.use(passport.initialize());
app.use(passport.session());

//ejemplo de config
app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {}
  }
  let pathname = parseurl(req).pathname;
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;
  next();
});

app.get("/", (req, res) => {
  res.send(
    `Inicio de sesion ${req.sessionID}, nuemro de visitas: ${req.session.views["/"]} tiempo`
  );
});

app.use("/api", usuarioRutas);
app.use("/api", cursoRoutas);
app.use("/api", rolRoutas);
app.use("/api", multerRutas);

module.exports = app;
