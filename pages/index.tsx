import {
  HomePage,
  Wrapper,
  Pagination,
  ButtonPagination,
  ShowCasesCharacters,
  BlockInfoCharacter,
  ImageCharacterInBlock,
  InfoCharacterInBlock,
  NameCharacterInBlock,
  StatusCharacterInBlock,
  StatusAndSpeciesCharacterInBlock,
  RowWithStatusAndSpeciesCharacterInBlock,
  InformationOfLocationAnsEpisodeCharacterInBlock,
  OriginAndLocationCharacterInBlock,
  Button,
  NumOfCurrentPage,

} from "../components/layouts"
import axios from 'axios'
import {useEffect, useState} from 'react'
import { useRouter } from "next/router"

export default function Home() {

  const [Characters, setCharacters] = useState ([])
  const [maxPagesCharacters, setMaxPagesCharacters] = useState(0)
  const [pageCharacters, setPageCharacters] = useState(1)
  const router = useRouter()

  useEffect(() => {
    async function  GetInfoCharacter (value: number) {
      let data = await axios.post('/api/GetInfoCharacters', {Page: value})
      setCharacters(data.data.data.results)
      setMaxPagesCharacters(data.data.data.info.pages)
      console.log(maxPagesCharacters)
    }
    GetInfoCharacter(pageCharacters)
  }, [pageCharacters])

  function increment() {
    if(pageCharacters < maxPagesCharacters){
      setPageCharacters((prevCounter: number ) => {
        return prevCounter + 1
      })
    }
  }

  function decrement() {
    if(pageCharacters > 1)
    {
      setPageCharacters((prevCounter: number ) => {
        return prevCounter - 1
      })
    }
  }

  const goToLocation = (locationId : string) => {
    router.push(`/Locations/${locationId}`)
  }
  

  return (
    <HomePage>
        <ShowCasesCharacters>
          {Characters.map((item: any) => (
          <BlockInfoCharacter>
            <ImageCharacterInBlock>
             <img src = {item.image}
                width={220}
                height={220}
                style = {{borderRadius: "10px 0px 0px 10px"}}
              />
            </ImageCharacterInBlock>
            <InfoCharacterInBlock>
              <NameCharacterInBlock>
                {item.name}
              </NameCharacterInBlock>
              <RowWithStatusAndSpeciesCharacterInBlock>
                <StatusCharacterInBlock style={{backgroundColor: item.status === 'Alive' ? 'Lime' : item.status === 'Dead' ? 'red' : 'gray'}}>
                </StatusCharacterInBlock>
                <StatusAndSpeciesCharacterInBlock>
                  {item.status} - {item.species}
                </StatusAndSpeciesCharacterInBlock>
              </RowWithStatusAndSpeciesCharacterInBlock>
              <InformationOfLocationAnsEpisodeCharacterInBlock>
                Origin location:
                <OriginAndLocationCharacterInBlock onClick={ () => goToLocation(item.id) }>
                  {item.origin.name}
                </OriginAndLocationCharacterInBlock>
                First seen in:
                <OriginAndLocationCharacterInBlock onClick={ () => goToLocation(item.id) }>
                  {item.location.name}
                </OriginAndLocationCharacterInBlock>
              </InformationOfLocationAnsEpisodeCharacterInBlock>
            </InfoCharacterInBlock>
          </BlockInfoCharacter>
          ))}
        </ShowCasesCharacters>
      <Wrapper>
        <Button onClick={decrement} style = {{visibility: pageCharacters === 1 ? 'hidden' : 'visible'}}> Пред страница </Button>
        <NumOfCurrentPage> Текущая страница: {pageCharacters} </NumOfCurrentPage>
        <Button onClick={increment} style = {{visibility: pageCharacters === 42 ? 'hidden' : 'visible'}}> След страница </Button>
      </Wrapper>
      <Pagination>
        <ButtonPagination>
          1
        </ButtonPagination>
      </Pagination>
    </HomePage>
  )
}

//ошибка в направлении на локации и эпизоды, id нужно брать именно эпизода, а не самого персонажа, проеб, ну да