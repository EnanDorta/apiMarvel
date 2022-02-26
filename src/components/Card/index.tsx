import { Container, Wrapper } from "./styles";

interface CharacterProps {
  characters: {
    id: number,
    name: string,
    thumbnail: {
      path: string,
      extension: string,
    }
  }
}

export function Card({ characters }: CharacterProps) {
  return (
    <Container>
      {
        <>
            <p>{characters.name}</p>
          <Wrapper>
            <img src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} alt={characters.name} />
          </Wrapper>
        </>
      }
    </Container>
  )
}