import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { Pages } from "./route";
import { AppInit } from "./app_init";
import { AuthProvider, AuthStore } from "../auth/service";

// local store service
const authStore = AuthStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider store={authStore}>
        <AppInit>
          <Pages />
        </AppInit>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
