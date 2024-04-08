import { createTheme, MantineProvider } from '@mantine/core';
import "./globals.css";
import "./app.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const metadata = {
  title: "Genbai",
  description: "A Project management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
