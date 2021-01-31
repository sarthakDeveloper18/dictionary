import './definitions.css';

function Definitions({ word, category, meanings, lightTheme }) {

    return (
        <div className='meanings'>
            {
                meanings[0] && meanings[0].phonetics[0] && meanings[0].phonetics[0].audio && word && category === 'en' ? (
                    <>
                        <audio controls src={meanings[0].phonetics[0] ? meanings[0].phonetics[0].audio : ''} style={{ backgroundColor: '#fff', borderRadius: 10 }}>
                            Your browser does not support audio
                        </audio>
                    </>
                )
                    :
                    null
            }
            {
                word === "" ? <span className='subTitle'>Start By Typing a word in a search</span> :
                    (
                        meanings.map(mean => (
                            mean.meanings.map(item => (
                                item.definitions.map((def, i) => (
                                    <div key={i} className='single' style={{ backgroundColor: lightTheme ? '#3b5360' : 'white', color: lightTheme ? 'white' : 'black' }}>
                                        <p>{def.definition}</p>
                                        <hr />
                                        {
                                            def.example &&
                                            (
                                                <span>
                                                    <b>Example: </b>
                                                    {def.example}
                                                </span>
                                            )
                                        }
                                        <hr />
                                        {
                                            def.synonyms && <span>
                                                <b>Synonyms: </b>
                                                {def.synonyms.map(s => `${s}, `)}
                                            </span>
                                        }
                                    </div>
                                ))
                            ))
                        ))
                    )
            }
        </div>
    )
}

export default Definitions;