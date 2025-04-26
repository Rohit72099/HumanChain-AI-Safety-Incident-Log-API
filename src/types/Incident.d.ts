export interface Incident {
    title: string;
    description: string;
    severity: "Low" | "Medium" | "High";
    reported_at: Date;
  }
  