import {
    Button,
    PageOfEpisode, 
    Wrapper,
    EpisodeBlock,
    NameOfEpisode,
    InfoAboutEpisode,
    DateOfEpisode,
    NameCharacterInBlock,
} from '../../components/layouts/index'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Location({locationId, residents, location} : any) {

    const router = useRouter()
    const goToPageLocations = () => {
        router.push(`/Locations`)
      }
    const goToCharacters = () => {
        router.push(`/`)
      }
    const goToCharacterPage = (characterId : string) => {
        router.push(`/Character/${characterId}`)
      }  
//на название блоков не смотрите) Устал создавать новые и просто использовал с блоков от эпизодов
 return (
        <PageOfEpisode> 
            <EpisodeBlock style = {{fontSize : '25px', paddingTop : '10px', paddingLeft : '10px'}}>
                Location :
            </EpisodeBlock>
            <InfoAboutEpisode style = {{fontSize : '40px'}}>
                {location.name}
            </InfoAboutEpisode>
            <EpisodeBlock style = {{fontSize : '25px', paddingTop : '10px', paddingLeft : '10px'}}>
                Type of Location :
            </EpisodeBlock>
            <NameOfEpisode style = {{fontSize : '40px'}}>
                {location.type}
            </NameOfEpisode>
            <EpisodeBlock style = {{fontSize : '25px', paddingTop : '10px', paddingLeft : '10px'}}>
                Dimension :
            </EpisodeBlock>
            <DateOfEpisode style = {{fontSize : '40px'}}>
                {location.dimension}
            </DateOfEpisode>
            <EpisodeBlock style = {{fontSize : '25px', paddingTop : '10px', paddingLeft : '10px'}}>
                residents in this episode  :
            </EpisodeBlock>
                {residents.map((item: any) => (
                    <NameCharacterInBlock onClick={ () => goToCharacterPage(item.id) }>
                        {item.name}
                    </NameCharacterInBlock>
                ))}                
            <Wrapper>
                <Button onClick={ () => goToPageLocations() } style = {{height : '55px'}}>Вернуться к локациям</Button>
                <Button onClick={ () => goToCharacters() } style = {{height : '55px'}}>Вернуться к Персонажам</Button>
            </Wrapper>
            
        </PageOfEpisode>
 )
}

export async function getServerSideProps(ctx : any) {

    const { locationId } = ctx.query
    const location = (await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)).data
    let residents : string | any = ''

    for (let i = 0; i < location.residents.length; i++){
        let tmp = location.residents[i].split('/')
        tmp = tmp[tmp.length - 1]
        residents = i === location.residents.length - 1 ? residents + tmp : residents + tmp + ','
    } 
    residents = (await axios.get(`https://rickandmortyapi.com/api/character/${residents}`)).data
    residents = location.residents.length === 1 ? [{...residents as any}] : residents

    return {
      props: {locationId, residents, location}, 
    }
  }