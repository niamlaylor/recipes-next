import { useSession, signOut } from 'next-auth/react';
import Header from '../components/navigation/Header';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

export default function Account({ theme }) {

  const { data: session } = useSession();

  if (session) {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Container component="main" maxWidth="xs">

        </Container>
      </ThemeProvider>
    )
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    )
  }
}