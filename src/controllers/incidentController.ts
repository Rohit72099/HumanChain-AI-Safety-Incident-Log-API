import { RequestHandler } from 'express';
import Incident from '../models/Incident';
// import { Incident as IncidentType } from "../types/Incident";

// GET /incidents
export const getAllIncidents: RequestHandler = async (req, res) => {
  const incidents = await Incident.find();
  res.status(200).json(incidents);
};

// GET /incidents/:id
export const getIncidentById: RequestHandler = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    // Check if the incident was found
    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }

    res.status(200).json(incident); 
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

// POST /incidents
export const createIncident: RequestHandler = async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    if (!title || !description || !severity) {
      res.status(400).json({ message: 'All fields are required' });
      return;
    }
    const allowedSeverities = ['Low', 'Medium', 'High'];
    if (!allowedSeverities.includes(severity)) {
      res.status(400).json({ message: 'Invalid severity level' });
      return;
    }
    const incident = await Incident.create({ title, description, severity });
    res.status(201).json(incident);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /incidents/:id
export const deleteIncident: RequestHandler = async (req, res) => {
  try {
    // Check if the ID is valid
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ message: 'Invalid ID format' });
      return;
    }

    // Attempt to find and delete the incident
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }
    res.status(200).json({ message: 'Incident deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
