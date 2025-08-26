"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const patient = {
  id: 1,
  name: "Jane Doe",
  picture: "/patients/jane.jpg", // make sure to place a jane.jpg file in public/patients/
  age: 32,
  gender: "Female",
  department: "Neurology",
  problem: "Migraine",
  medication: "Sumatriptan 50mg as needed",
  doctor: "Dr. Smith",
  lastVisit: "2025-08-22",
  // ✅ Health details
  bodyTemperatureC: 37.2,
  bodyTemperatureF: 98.9,
  weightKg: 62,
  heightCm: 165,
  bloodPressure: "120/80 mmHg",
  heartRate: 76,
  spo2: "98%",
  allergies: "Penicillin",
};

export default function PatientDashboard() {
  // Calculate BMI
  const bmi = (patient.weightKg / ((patient.heightCm / 100) ** 2)).toFixed(1);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Patient Dashboard</h1>

      {/* Patient Profile Panel */}
      <Card className="rounded-2xl shadow-lg max-w-md mx-auto mb-6">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <Image
            src={patient.picture}
            alt={patient.name}
            width={100}
            height={100}
            className="rounded-full border shadow"
          />
          <h2 className="text-xl font-semibold mt-4">{patient.name}</h2>
          <p className="text-muted-foreground text-sm">
            {patient.age} years • {patient.gender}
          </p>

          <div className="mt-4 text-left w-full space-y-2">
            <p><span className="font-medium">Department:</span> {patient.department}</p>
            <p><span className="font-medium">Problem:</span> {patient.problem}</p>
            <p><span className="font-medium">Medication:</span> {patient.medication}</p>
            <p><span className="font-medium">Doctor:</span> {patient.doctor}</p>
            <p><span className="font-medium">Last Visit:</span> {patient.lastVisit}</p>
          </div>
        </CardContent>
      </Card>

      {/* Health Details Panel */}
      <Card className="rounded-2xl shadow-lg max-w-md mx-auto">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">Health Details</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">Body Temperature:</span>{" "}
              {patient.bodyTemperatureC}°C / {patient.bodyTemperatureF}°F
            </p>
            <p>
              <span className="font-medium">Weight:</span> {patient.weightKg} kg
            </p>
            <p>
              <span className="font-medium">Height:</span> {patient.heightCm} cm
            </p>
            <p>
              <span className="font-medium">BMI:</span> {bmi}
            </p>
            <p>
              <span className="font-medium">Blood Pressure:</span> {patient.bloodPressure}
            </p>
            <p>
              <span className="font-medium">Heart Rate:</span> {patient.heartRate} bpm
            </p>
            <p>
              <span className="font-medium">SpO₂:</span> {patient.spo2}
            </p>
            <p>
              <span className="font-medium">Allergies:</span> {patient.allergies}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
