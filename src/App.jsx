import { useState } from "react";
import "./App.css";
import { Button, Stack } from "@chakra-ui/react";
import { LuCalendarClock } from "react-icons/lu";
import { IoMdClock } from "react-icons/io";
import Timer from "./components/Timer";
import ConfigTimer from "./components/ConfigTimer";

function App() {
  const [showTimer, setShowTimer] = useState(false);
  const [timeMode, setTimeMode] = useState('24');

  return (
    <>
      <Stack direction="row" spacing={4}>
        <Button
          onClick={() => setShowTimer(false)}
          leftIcon={<LuCalendarClock />}
          colorScheme="teal"
          variant="outline"
        >
          Details
        </Button>
        <Button
          onClick={() => setShowTimer(true)}
          rightIcon={<IoMdClock />}
          colorScheme="teal"
          variant="outline"
        >
          Timer
        </Button>
      </Stack>
      {showTimer ? <Timer timeMode={timeMode} /> : <ConfigTimer timeMode={timeMode} setTimeMode={setTimeMode} />}
    </>
  );
}

export default App;
