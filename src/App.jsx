import React from "react";
import TopButton from "./components/TopButton";
import InputField from "./components/InputField";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import ForeCast from "./components/ForeCast";

const App = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-cyan-700 to-blue-700">
      <TopButton />
      <InputField />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <ForeCast title="HOURLY FORECAST" />
      <ForeCast title="WEEKLY FORECAST" />
    </div>
  );
};

export default App;
