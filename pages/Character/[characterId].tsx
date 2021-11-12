import {
    PageOfCharacter, 
    Wrapper,
    Button,
    ShowInformationAboutCharacter,
    InfoAboutCharacter,
    ShowImageAndOtherAboutCharacter,
    ShowEpisodesOfCharacter,
    StatusCharacterInPage,
    RowWithStatusAndSpeciesCharacterInBlock,
    CharacterBlock,
    OriginLocationCharacterOnPage,
    LastLocationCharacterOnPage,
    EpisodesCharacterPage
} from '../../components/layouts/index'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Character({characterId, episodes, character} : any) {

    const router = useRouter()
    const goToCharacters = () => {
        router.push(`/`)
      }

    const goToEpisode = (episodeId : string) => {
        router.push(`/Episodes/${episodeId}`)
      }

    const goToLocation = (locationId : string) => {
        router.push(`/Locations/${locationId}`)
      }
    
    const TakeLocationId = ($LocationUrl : string) => {
        if ($LocationUrl === '') {
          alert('Location not found ');
        }
        else{
          let $newsString = $LocationUrl.substr($LocationUrl.lastIndexOf('/') + 1);
        goToLocation($newsString)
        }
      }

 return (
        <PageOfCharacter>
            <ShowInformationAboutCharacter>
                <ShowImageAndOtherAboutCharacter>
                    <img src = {character.image}
                        width={300}
                        height={300}
                        style = {{borderRadius: "50%", padding: '20px'}}
                    />
                    <InfoAboutCharacter style = {{fontSize : '35px', paddingTop:  '20px'}}>
                        {character.name}
                        <RowWithStatusAndSpeciesCharacterInBlock>
                            <StatusCharacterInPage style={{backgroundColor: character.status === 'Alive' ? 'Lime' : character.status === 'Dead' ? 'red' : 'gray', marginLeft: '15px', marginTop: '15px'}}>
                            </StatusCharacterInPage>
                            <CharacterBlock style={{color: 'white', fontSize: '25px', marginLeft: '15px'}}>
                                {character.status} - {character.species}
                            </CharacterBlock>
                        </RowWithStatusAndSpeciesCharacterInBlock>
                        <OriginLocationCharacterOnPage onClick={ () => TakeLocationId(character.origin.url)} style={{fontSize: '25px', marginLeft: '37px', marginTop: '8px'}}>
                            Origin location - {character.origin.name}
                        </OriginLocationCharacterOnPage>
                        <LastLocationCharacterOnPage onClick={ () => TakeLocationId(character.location.url)} style={{fontSize: '25px', marginLeft: '15px'}}>
                            First seen in - {character.location.name}
                        </LastLocationCharacterOnPage>
                        <CharacterBlock style={{color: 'white', fontSize: '25px', visibility: character.gender === 'unknown' ? 'hidden' : 'visible'}}>
                            Gender - {character.gender}
                        </CharacterBlock>
                    </InfoAboutCharacter>
                </ShowImageAndOtherAboutCharacter>
                <CharacterBlock style={{fontSize: '25px', marginLeft: '37px', marginTop: '8px'}} >
                    Episodes this character participated in 
                </CharacterBlock>
                <ShowEpisodesOfCharacter style={{display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)', gridColumnGap: '20px', paddingLeft: '10px'}}>
                {episodes.map((item: any) => (
                    <EpisodesCharacterPage onClick={ () => goToEpisode(item.id)}>
                        {item.episode}
                    </EpisodesCharacterPage>
                ))}
                </ShowEpisodesOfCharacter>
            </ShowInformationAboutCharacter>
            <Wrapper>
                <Button onClick={ () => goToCharacters() } style = {{height : '55px'}}>Вернуться к Персонажам</Button>
            </Wrapper>
        </PageOfCharacter>
        
 )
}

export async function getServerSideProps(ctx : any) {

    const { characterId } = ctx.query
    const character = (await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)).data
    let episodes : string | any = ''

    for (let i = 0; i < character.episode.length; i++){
        let tmp = character.episode[i].split('/')
        tmp = tmp[tmp.length - 1]
        episodes = i === character.episode.length - 1 ? episodes + tmp : episodes + tmp + ','
    } 
    episodes = (await axios.get(`https://rickandmortyapi.com/api/episode/${episodes}`)).data
    episodes = character.episode.length === 1 ? [{...episodes as any}] : episodes

    return {
      props: {characterId, episodes, character}, 
    }
  }