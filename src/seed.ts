import mongoose from "mongoose";
import dotenv from "dotenv";

import Incident from "./models/Incident";






dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

const seedIncidents = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected for seeding");

    // Optional: Clear existing data
    await Incident.deleteMany({});

    // Sample data
    const sampleIncidents = [
      {
        title: "Chatbot gave biased responses",
        description: "The AI chatbot consistently gave biased political opinions.",
        severity: "High",
      },
      {
        title: "AI surveillance misidentification",
        description: "Facial recognition system misidentified a person as a suspect.",
        severity: "Medium",
      },
      {
        title: "Language model leaked sensitive data",
        description: "Model output included previously seen user private information.",
        severity: "High",
      },
    ];

    await Incident.insertMany(sampleIncidents);
    console.log("Sample incidents inserted");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

seedIncidents();
