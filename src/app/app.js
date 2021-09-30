import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Pages } from "./route";
import { AuthProvider } from "../auth/service/auth_provider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
