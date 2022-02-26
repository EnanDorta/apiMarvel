import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Card } from "../Card";
import { Container } from "./styles";
import md5 from "md5";

// Const for make a request in API
const publicKey = 'fa4cc28dbfa7e19e8dc99236d7c17145'
const privateKey = '754ed529d0f109510f762bd96c28af3cb6ba97d2'
const timezone = Number(new Date())
const hash = md5(timezone + privateKey + publicKey)

interface Characters {
  id: number,
  name: string,
  thumbnail: {
    path: string,
    extension: string,
  }
}
  
export function Content() {
  //state for characters returned from API
  const [characters, setCharacters] = useState<Characters[]>([])
  console.log(characters)


  useEffect(() => {
    // get in API for save in setCharacters
    api.get(`characters?ts=${timezone}&apikey=${publicKey}&hash=${hash}`)
    .then(response => setCharacters(response.data.data.results))
  }, [])

  return (
    <Container >
      {
        //map in characters for return a unic character, and send for props for component Card
        characters.map((character) => {
          return <Card key={character.id} characters={character}/>
        })
      }
    </Container>
  )
}