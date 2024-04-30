import { createTheme, MantineProvider } from '@mantine/core';
import "./globals.css";
import "./app.css";
import { AuthProvider } from '@/context/AuthContext';
import { UserProvider } from '@/context/UserContext';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const metadata = {
  title: "Genbai",
  description: "A Project management app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UserProvider>
            <MantineProvider theme={theme}>
              {children}
            </MantineProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}


export default RootLayout;