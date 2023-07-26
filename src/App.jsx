import AppRouter from "./routes/AppRouter";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5D2A42",
    },
    secondary: {
      main: "#FB6376",
    },
    text: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: [],
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
