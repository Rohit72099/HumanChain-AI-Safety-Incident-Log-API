import express from "express";
import {
  getAllIncidents,
  createIncident,
  getIncidentById,
  deleteIncident
} from "../controllers/incidentController";

const router = express.Router();


// Define routes for incidents;

router.get("/incidents", getAllIncidents);
router.post("/incidents", createIncident);

router.get("/incidents/:id", getIncidentById);
router.delete("/incidents/:id", deleteIncident);

export default router;
