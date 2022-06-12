import { Button } from "@mantine/core";
import React, { useContext } from "react";
import { MoneyContext } from "../../context/moneyContext";

const Settings = () => {
  const { display } = useContext(MoneyContext);

  return (
    <div
      className="Settings"
      style={{
        width: "100vw",
        height: "100vh",
        display: display.Settings ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>🔧 Settings</h1>
    </div>
  );
};

export default Settings;
