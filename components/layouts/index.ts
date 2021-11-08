import styled from 'styled-components'


export const HomePage = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgb(36, 40, 47);
`
export const HeaderHomePage = styled.div`
    min-height: 65px;
    display: flex;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    background-color: white;
`
export const HeaderTitleHomePage = styled.div`
    width: 100%;
    text-align: center;
`

export const TitleHomePage = styled.h1`
    font-family: Zapf Chancery, cursive;
    font-stretch: condensed;
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 1.5;
    letter-spacing: 0.0075em;
    white-space: nowrap;
    color: rgb(36, 40, 47);
`

export const Wrapper = styled.div`
    height: 100px;   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    text-align: center;
    overflow: hidden;
`

export const Pagination = styled.div`
    height: 100px;   
    display: grid;
    grid-column-gap: 15px;
    text-align: center;
    overflow: hidden;
`

export const ButtonPagination = styled.button`
    width: 30px;
    height: 30px;
    background-color: rgb(47, 50, 56);
    color: white;
    text-align: center;
    margin: 20px auto;
    font: normal 17px arial;
    border-radius: 50%;
    box-shadow: 0 0 10px #444;
`

export const ShowCasesCharacters = styled.div`
    min-height: 100vh;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    padding: 50px;
    background-color: rgb(36, 40, 47);
`

export const BlockInfoCharacter = styled.div`
    width: 555px;
    height: 225px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 10px #444;
    background-color: rgb(47, 50, 56);
`
export const ImageCharacterInBlock = styled.div`
    height: 225px;
    width: 225px;
    border-radius: 10px;
`

export const InfoCharacterInBlock = styled.div`
    height: 225px;
    width: 330px;
    padding-bottom: 250px;
    padding-left: 5px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
`

export const NameAndStatusCharacterInBlock = styled.h2`
    margin-top: 10px;
    margin-bottom: 5px;
    word-break: break-all;
    color: white;
`

export const StatusCharacterInBlock = styled.div`
    height: 10px;
    width: 10px;
`

export const SpeciesAndTypeCharacterInBlock = styled.h3`
    margin: 0;
    word-break: break-all;
    color: white; 
`

export const Button = styled.button`
    width: 150px;
    height: 30px;
    background-color: rgb(47, 50, 56);
    color: white;
    text-align: center;
    margin: 20px auto;
    font: normal 17px arial;
    border-radius: 7px;
    box-shadow: 0 0 10px #444;
`

export const NumOfCurrentPage = styled.h3`
    word-break: break-all;
    color: white;
`

export const SidebarLayout = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    transform: translateX(0%);
    transition: transform 0.3s ease-out 0.3s;
  }

  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px,
    rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  z-index: 5;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out 0.3s;
`

export const SidebarBody = styled.div.attrs((props) => ({
  className: props.className,
}))`
  &.active {
    transform: translateX(0%);
    transition: transform 0.3s ease-out 0.3s;
  }
  padding-top: 20px;
  position: fixed;
  min-width: 240px;
  height: 100%;
  background-color: #fff;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out 0.3s;
  z-index: 10;
`

export const NavListcontainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`

export const CloseSidebarArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding-right: 10px;
`

export const PageOfLocations = styled.div`
  min-height: 100vh;
  min-width: 100vw; 
  background-color: rgb(36, 40, 47);
`

export const ShowCasesLocations = styled.div`
  min-height: 100vh;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding: 50px;
` 

export const BlockInfoLocations = styled.div`
    width: 555px;
    height: 325px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 10px #444;
    background-color: rgb(47, 50, 56);
`

export const InfoLocationsInBlock = styled.div`
    height: 225px;
    width: 100%;
    padding-bottom: 250px;
    padding-left: 5px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
`

export const NameLocationsInBlock = styled.h3`
    margin-top: 10px;
    margin-bottom: 5px;
    word-break: break-all;
    color: white;
`
export const TypeLocationsInBlock = styled.h2`
    margin-top: 10px;
    margin-bottom: 5px;
    word-break: break-all;
    color: white;
`
export const DimensionLocationsInBlock = styled.h4`
    margin-top: 10px;
    margin-bottom: 5px;
    word-break: break-all;
    color: white;
`
export const RezidentsLocationsInBlock = styled.h5`
    margin-top: 10px;
    margin-bottom: 5px;
    word-break: break-all;
    color: white;
`

export const PageOfEpisodes = styled.div`
  min-height: 100vh;
  min-width: 100vw; 
  background-color: rgb(36, 40, 47);
`

export const ShowCasesEpisodes = styled.div`
  min-height: 100vh;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding: 50px;
` 

export const BlockInfoEpisodes = styled.div`
    width: 550px;
    height: 355px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 0 10px #444;
    background-color: rgb(47, 50, 56);
`

export const InfoEpisodesInBlock = styled.div`
    height: 100%;
    width: 100%;
    padding-bottom: 250px;
    padding-left: 5px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
`

export const InfoAboutEpisode = styled.h1`
  margin-top: 10px;
  margin-bottom: 5px;
  word-break: break-all;
  color: white;
`

export const NameOfEpisode = styled.h2`
  margin: 0;
  word-break: break-all;
  color: white;
`

export const DateOfEpisode = styled.h3`
  margin: auto;
  word-break: break-all;
  color: white;
`

export const CharactersOfEpisode = styled.h4`
  word-break: break-all;
  color: white;
`

