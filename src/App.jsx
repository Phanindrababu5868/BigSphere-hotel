import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import AppLayout from "./layout/app-layout";
import BookingConfirmationPage from "./pages/BookingConfirmation";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookingSummary",
        element: <BookingPage />,
      },
      {
        path: "/bookingConfirmation",
        element: <BookingConfirmationPage />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <RouterProvider router={router} />
      </main>
    </ThemeProvider>
  );
}

export default App;
