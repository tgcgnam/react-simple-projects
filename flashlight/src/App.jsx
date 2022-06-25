import { useState } from "react";
import Room from "./components/room";
import Sun from "./components/sun";
import Switch from "./components/switch";

const App = () => {
  const [flashOn, setFlashOn] = useState(false);

  const handleSwitch = () => {
    setFlashOn(!flashOn);
  };

  return (
    <Room light={flashOn}>
      <Sun isOn={flashOn}></Sun>
      <Switch isOn={flashOn} onClick={handleSwitch} />
    </Room>
  );
};

export default App;
