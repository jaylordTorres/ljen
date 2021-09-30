import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Pages } from "./route";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
