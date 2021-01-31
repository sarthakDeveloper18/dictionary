import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Definitions from './components/definitions';
import Header from './components/header';

function App() {

  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState('');
  const [category, setCategory] = useState("en");
  const [lightMode, setlightMode] = useState(false);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictionaryApi();
  }, [word, category])

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ height: '100vh', backgroundColor: lightMode ? '#fff' : '#282c34', color: lightMode ? 'black' : 'white', transition: "all 0.5s linear" }}>
      <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-evenly' }}>
        <div style={{ position: 'absolute', top: 0, right: 15 }}>
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch checked={lightMode} onChange={() => setlightMode(!lightMode)} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightTheme={lightMode} />
        {meanings && (<Definitions word={word} meanings={meanings} category={category} lightTheme={lightMode} />)}
      </Container>
    </div>
  );
}

export default App;
