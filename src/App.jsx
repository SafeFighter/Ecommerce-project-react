import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./App.css";
import Landing from "./pages/landing";

function App() {
  return (
    <>
      <Landing />
    </>
  );
}

export default App;
