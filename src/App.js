import Container from "./componentes/Container";
import Header from "./componentes/Header";
import Welcome from "./Welcome";
import CharacterContainer from "./componentes/CharacterContainer";
import { useState } from "react";

function App() {

  const [character, setCharacter] = useState('');

  const reqApi = async () => {
    const api = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=3');
    const frases = await api.json();
    setCharacter(frases);
  }

  return (
    <Container>
      <Header/>
      {!character ?  <Welcome reqApi={reqApi}/>
        : <CharacterContainer characters={character} reqApi={reqApi}/>
      }
    </Container>
  );
}

export default App;
