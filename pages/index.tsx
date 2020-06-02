import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import deepOrange from '@material-ui/core/colors/deepOrange';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ColorPicker } from 'material-ui-color';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepOrange,
    secondary: blueGrey,
    background: { default: '#080808', paper: '#121212' },
  },
});

const Home = () => {
  const handleChange = () => {
    // setColor(newValue);
    // action('changed')(newValue);
  };
  return <ThemeProvider theme={theme}>
  <CssBaseline />
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Test material-ui-color-components with Typescript
      </Typography>
      <div><ColorPicker defaultValue='#fff' onChange={handleChange} /></div>
    </Box>
  </Container>
</ThemeProvider>
}

export default Home