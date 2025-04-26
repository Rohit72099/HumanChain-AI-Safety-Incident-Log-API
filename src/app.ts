import express from "express";
import incidentRoutes from "./routes/incidentRoutes";
import bodyParser from "body-parser";
import cors from "cors";


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(incidentRoutes);

export default app;
