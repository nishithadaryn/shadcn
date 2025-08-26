import { Card, CardContent, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

// Alerts & Notifications
const alerts = [
  { id: 1, title: "BP above threshold!", badge: "Critical" },
  { id: 2, title: "Missed medication at 9AM", badge: "Warning" },
  { id: 3, title: "Next appointment tomorrow at 10:30AM", badge: "Reminder" },
];

// Appointments & Care Plan
const carePlan = [
  { id: 1, title: "Next Doctor Appointment: Aug 30, 2025 – 11:00 AM" },
  { id: 2, title: "Treatment Milestone: Completed 3 of 6 physiotherapy sessions" },
  { id: 3, title: "Pending Lab Reports: Blood Test, MRI Scan" },
];

// Patient Notes / Observations
const patientNotes = [
  { id: 1, title: "Patient reported mild dizziness in the morning." },
  { id: 2, title: "Noticed improvement in mobility after physiotherapy." },
  { id: 3, title: "Complained of difficulty sleeping last night." },
];

const AlertsList = () => {
  return (
    <div>
      {/* Alerts Section */}
      <h1 className="text-lg font-medium mb-6">Alerts & Notifications</h1>
      <div className="flex flex-col gap-2 mb-8">
        {alerts.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            </CardContent>
            <Badge
              variant={
                item.badge === "Critical"
                  ? "destructive"
                  : item.badge === "Warning"
                  ? "secondary"
                  : "default"
              }
            >
              {item.badge}
            </Badge>
          </Card>
        ))}
      </div>

      {/* Appointments & Care Plan Section */}
      <h1 className="text-lg font-medium mb-6">Appointments & Care Plan</h1>
      <div className="flex flex-col gap-2 mb-8">
        {carePlan.map((item) => (
          <Card key={item.id} className="p-4">
            <CardContent className="p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Patient Notes / Observations Section */}
      <h1 className="text-lg font-medium mb-6">Patient Notes / Observations</h1>
      <div className="flex flex-col gap-2">
        {patientNotes.map((item) => (
          <Card key={item.id} className="p-4">
            <CardContent className="p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AlertsList;
