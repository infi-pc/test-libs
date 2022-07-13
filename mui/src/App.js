import { Box, Button, Tab, Tabs, TextField, Chip } from "@mui/material";
import { useState } from "react";
import MyDialog from "./MyDialog";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Chip label="Chip Filled" />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={setValue} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      xxx
      <MyDialog />
    </div>
  );
}

export default App;
