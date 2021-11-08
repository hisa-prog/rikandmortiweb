import {
    PageOfEpisodes,
    ShowCasesEpisodes,
    BlockInfoEpisodes,
    InfoEpisodesInBlock,
    InfoAboutEpisode,
    NameOfEpisode,
    DateOfEpisode,
    CharactersOfEpisode,
    Wrapper,
    Button,
    NumOfCurrentPage

} from '../components/layouts/index'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Locations() {

    const [Episodes, setEpisodes] = useState ([])
    const [maxPagesEpisodes, setMaxPagesEpisodes] = useState(0)
    const [pageEpisodes, setPageEpisodes] = useState(1)

  useEffect(() => {
    async function  GetInfoCharacter (value: number) {
      let data = await axios.post('/api/GetInfoEpisodes', {Page: value})
      setEpisodes(data.data.data.results)
      setMaxPagesEpisodes(data.data.data.info.pages)
      console.log(maxPagesEpisodes)
    }
    GetInfoCharacter(pageEpisodes)
  }, [pageEpisodes])


  function increment() {
    if(pageEpisodes < maxPagesEpisodes){
        setPageEpisodes((prevCounter: number ) => {
            return prevCounter + 1
      })
    }
  }

  function decrement() {
    if(pageEpisodes > 1)
    {
        setPageEpisodes((prevCounter: number ) => {
            return prevCounter - 1
      })
    }
  }

    return (
        <PageOfEpisodes>
            <ShowCasesEpisodes>
            {Episodes.map((item: any) => (
                    <BlockInfoEpisodes>
                        <InfoEpisodesInBlock>
                            <InfoAboutEpisode>
                                Episode : {item.episode}
                            </InfoAboutEpisode>
                            <NameOfEpisode>
                                Name Of Episode : {item.name}
                            </NameOfEpisode>
                            <DateOfEpisode>
                                Air Date Of Episode : {item.air_date}
                            </DateOfEpisode>
                            <CharactersOfEpisode>
                                Characters :
                            </CharactersOfEpisode>
                        </InfoEpisodesInBlock>
                    </BlockInfoEpisodes>
                ))}
            </ShowCasesEpisodes>
            <Wrapper>
                <Button onClick={decrement} style = {{visibility: pageEpisodes === 1 ? 'hidden' : 'visible'}}> Пред страница </Button>
                <NumOfCurrentPage> Текущая страница: {pageEpisodes} </NumOfCurrentPage>
                <Button onClick={increment} style = {{visibility: pageEpisodes === maxPagesEpisodes ? 'hidden' : 'visible'}}> След страница </Button>
            </Wrapper>
        </PageOfEpisodes>
    )
}
