import {
    PageOfLocations,
    ShowCasesLocations,
    BlockInfoLocations,
    InfoLocationsInBlock,
    NameLocationsInBlock,
    TypeLocationsInBlock,
    DimensionLocationsInBlock,
    RezidentsLocationsInBlock,
    Wrapper,
    Button,
    NumOfCurrentPage

} from '../components/layouts/index'
import banner from './../../public/RickAndMortyBackground.png'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Locations() {

    const [Locations, setLocations] = useState ([])
    const [maxPagesLocations, setMaxPagesLocations] = useState(0)
    const [pageLocations, setPageLocations] = useState(1)

  useEffect(() => {
    async function  GetInfoCharacter (value: number) {
      let data = await axios.post('/api/GetInfoLocations', {Page: value})
      setLocations(data.data.data.results)
      setMaxPagesLocations(data.data.data.info.pages)
      console.log(maxPagesLocations)
    }
    GetInfoCharacter(pageLocations)
  }, [pageLocations])


  function increment() {
    if(pageLocations < maxPagesLocations){
        setPageLocations((prevCounter: number ) => {
            return prevCounter + 1
      })
    }
  }

  function decrement() {
    if(pageLocations > 1)
    {
        setPageLocations((prevCounter: number ) => {
            return prevCounter - 1
      })
    }
  }


    return(
        <PageOfLocations>
            <ShowCasesLocations>
                {Locations.map((item: any) => (
                    <BlockInfoLocations>
                        <InfoLocationsInBlock>
                            <TypeLocationsInBlock>
                                Type : {item.type}
                            </TypeLocationsInBlock>
                            <NameLocationsInBlock>
                                Name of {item.type} : {item.name} 
                            </NameLocationsInBlock>
                            <DimensionLocationsInBlock>
                                Dimension : {item.dimension}
                            </DimensionLocationsInBlock>
                            <RezidentsLocationsInBlock>
                                Residents : 
                            </RezidentsLocationsInBlock>
                        </InfoLocationsInBlock>
                    </BlockInfoLocations>
                ))}
            </ShowCasesLocations>
            <Wrapper>
                <Button onClick={decrement} style = {{visibility: pageLocations === 1 ? 'hidden' : 'visible'}}> Пред страница </Button>
                <NumOfCurrentPage> Текущая страница: {pageLocations} </NumOfCurrentPage>
                <Button onClick={increment} style = {{visibility: pageLocations === maxPagesLocations ? 'hidden' : 'visible'}}> След страница </Button>
            </Wrapper>
        </PageOfLocations>
    )
}

{/* <ShowCasesLocations style = {{backgroundImage : url('./../../public/RickAndMortyBackground.png')}}>
            123
        </ShowCasesLocations> */}