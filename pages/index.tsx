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
  Button,
  NumOfCurrentPage,

} from "../components/layouts"
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Home() {

  const [Characters, setCharacters] = useState ([])
  const [maxPagesCharacters, setMaxPagesCharacters] = useState(0)
  const [pageCharacters, setPageCharacters] = useState(1)

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


  
  return (
    <HomePage>
        <ShowCasesCharacters>
          {Characters.map((item: any) => (
          <BlockInfoCharacter>
            <ImageCharacterInBlock>
             <img src = {item.image}
                width={225}
                height={225}
                style = {{borderRadius: "10px"}}
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