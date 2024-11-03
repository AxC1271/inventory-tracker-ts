import { MantineProvider } from '@mantine/core'
import { Login } from './assets/Components/Login/Login'
import { PaperProps } from '@mantine/core'
import '@mantine/core/styles.css'
import './App.css'

const App: React.FC = () => {
  const paperProps: PaperProps = {
    radius: 'md',
    p: 'xl',
    withBorder: true,
  };
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <Login {...paperProps} />
    </MantineProvider>
  )
}

export default App
