import {
  HomePage,
  HeaderHomePage,
  HeaderTitleHomePage,
  TitleHomePage,
  Wrapper,
  ShowCasesCharacters,
  BlockInfoCharacter,
  ImageCharacterInBlock,
  InfoCharacterInBlock,
  NameCharacterInBlock,
  StatusCharacterInBlock,
  SpeciesCharacterInBlock,
  Button
} from "../components/layouts"
import Image from 'next/image'
import logo from '../../rikandmortiweb/public/icons/RickAndMortiLogo.png'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Home() {

  const [Characters, setCharacters] = useState ([])
  const [pageCharacters, setPageCharacters] = useState(1)

  useEffect(() => {
    async function  GetInfoCharacter (value: number) {
      let data = await axios.post('/api/GetInfoCharacters', {Page: value})
      setCharacters(data.data.data.results)
      console.log(data.data.data.results)
    }
    GetInfoCharacter(pageCharacters)
  }, [pageCharacters])

  function increment() {
    setPageCharacters((prevCounter: number ) => {
      return prevCounter + 1
    })
  }

  function decrement() {
    setPageCharacters((prevCounter: number ) => {
      return prevCounter - 1
    })
  }

  
  return (
    <HomePage>
      <HeaderHomePage>
        <HeaderTitleHomePage>
          <TitleHomePage>
            Rick And Morti Web
          </TitleHomePage>
        </HeaderTitleHomePage>
        <Image src={logo}
            width={60}
            height={60} 
        />
      </HeaderHomePage>
        <ShowCasesCharacters>
          {Characters.map((item: any) => (
          <BlockInfoCharacter>
            <ImageCharacterInBlock>
             <img src = {item.image}
                width={225}
                height={225}
              />
            </ImageCharacterInBlock>
            <InfoCharacterInBlock>
              <NameCharacterInBlock>
                {JSON.stringify(item.name)}
              </NameCharacterInBlock>
              <StatusCharacterInBlock>
                {JSON.stringify(item.status)}
              </StatusCharacterInBlock>
              <SpeciesCharacterInBlock>
                {JSON.stringify(item.species)}
              </SpeciesCharacterInBlock>
            </InfoCharacterInBlock>
          </BlockInfoCharacter>
          ))}
        </ShowCasesCharacters>
      <Wrapper>
        <Button onClick={decrement}> Пред страница </Button>
        <Button> {pageCharacters} </Button>
        <Button onClick={increment}> След страница </Button>
      </Wrapper>
    </HomePage>
  )
}

//{JSON.stringify(item)}