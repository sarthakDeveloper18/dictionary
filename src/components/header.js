import { createMuiTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import './header.css';
import categories from '../data/category';

function Header({ category, setCategory, word, setWord, lightTheme }) {

    const darkTheme = createMuiTheme({
        palette: {
            primary: {
                main: lightTheme ? '#000' : '#fff'
            },
            type: lightTheme ? 'light' : 'dark'
        }
    })

    const handleChange = (language) => {
        setCategory(language);
        setWord('');
    }

    return (
        <div className='header'>
            <span className='title'>{word ? word : 'Word Hunt'}</span>
            <div className='input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField value={word} onChange={(e) => setWord(e.target.value)} label='Search a word' className='search' />
                    <TextField className='select' value={category} onChange={(e) => handleChange(e.target.value)} select label='Language'>
                        {
                            categories.map(option => {
                                return <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            })
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Header;
