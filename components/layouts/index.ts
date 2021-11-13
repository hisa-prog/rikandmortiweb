import styled from "styled-components";

export const HomePage = styled.div`
  min-height: 100vh;
  min-width: 80vw;
  background-color: rgb(36, 40, 47);
`;

export const HeaderHomePage = styled.div`
  min-height: 65px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  background-color: white;
`;

export const HeaderTitleHomePage = styled.div`
  width: 100%;
  text-align: center;
`;

export const TitleHomePage = styled.h1`
  font-family: Zapf Chancery, cursive;
  font-stretch: condensed;
  font-weight: 500;
  font-size: 2.25rem;
  line-height: 1.5;
  letter-spacing: 0.0075em;
  white-space: nowrap;
  color: rgb(36, 40, 47);
`;

export const Wrapper = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  text-align: center;
  overflow: hidden;
`;

export const Pagination = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;
`;

export const ButtonPagination = styled.button`
  width: 32px;
  height: 32px;
  background-color: rgb(47, 50, 56);
  color: white;
  text-align: center;
  font: normal 17px arial;
  border-radius: 50%;
  box-shadow: 0 0 10px #444;

  & {
    margin-left: 15px;
  }
`;

export const ShowCasesCharacters = styled.div`
  min-height: 100vh;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding: 50px;
  background-color: rgb(36, 40, 47);
`;

export const BlockInfoCharacter = styled.div`
  width: 560px;
  height: 220px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 10px #444;
  background-color: rgb(47, 50, 56);
`;

export const ImageCharacterInBlock = styled.div`
  height: 220px;
  width: 220px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 20px orange;
  }
`;

export const InfoCharacterInBlock = styled.div`
  height: 225px;
  width: 340px;
  padding-bottom: 250px;
  padding-left: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
`;

export const NameCharacterInBlock = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  word-break: break-all;
  color: white;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: orange;
  }
`;

export const RowWithStatusAndSpeciesCharacterInBlock = styled.div`
  height: 27px;
  width: 325px;
  display: flex;
`;

export const StatusCharacterInBlock = styled.div`
  height: 10px;
  width: 10px;
  margin-left: 10px;
  border-radius: 50%;
  align-self: center;
  margin-right: 5px;
`;

export const StatusAndSpeciesCharacterInBlock = styled.h3`
  margin: 0;
  word-break: break-all;
  color: white;
`;

export const InformationOfLocationAnsEpisodeCharacterInBlock = styled.h4`
  margin-top: 5px;
  margin-left: 10px;
  justify-content: space-around;
  word-break: break-all;
  color: rgb(158, 158, 158);
`;

export const OriginAndLocationCharacterInBlock = styled.h3`
  margin: 0;
  word-break: break-all;
  color: white;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: orange;
  }
`;

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
`;

export const NumOfCurrentPage = styled.h3`
  word-break: break-all;
  color: white;
`;

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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px -5px,
    rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.12) 0px 6px 30px 5px;
  z-index: 5;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out 0.3s;
`;

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
`;

export const NavListcontainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

export const CloseSidebarArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding-right: 10px;
`;

export const PageOfLocations = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgb(36, 40, 47);
`;

export const ShowCasesLocations = styled.div`
  min-height: 100vh;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding: 50px;
`;

export const BlockInfoLocations = styled.div`
  width: 555px;
  height: 290px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 10px #444;
  background-color: rgb(47, 50, 56);
`;

export const InfoLocationsInBlock = styled.div`
  height: 290px;
  width: 100%;
  padding-bottom: 250px;
  padding-left: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
`;

export const NameLocationsInBlock = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
  word-break: break-all;
  color: white;
`;
export const TypeLocationsInBlock = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  word-break: break-all;
  color: white;
`;
export const DimensionLocationsInBlock = styled.h4`
  margin-top: 10px;
  margin-bottom: 5px;
  word-break: break-all;
  color: white;
`;
export const RezidentsLocationsInBlock = styled.h5`
  margin-top: 10px;
  margin-bottom: 5px;
  word-break: break-all;
  color: white;
`;

export const PageOfEpisodes = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgb(36, 40, 47);
`;

export const ShowCasesEpisodes = styled.div`
  min-height: 100vh;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  padding: 50px;
`;

export const BlockInfoEpisodes = styled.div`
  width: 450px;
  height: 255px;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 0 10px #444;
  background-color: rgb(47, 50, 56);
`;

export const InfoEpisodesInBlock = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 250px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
`;

export const EpisodeBlock = styled.h2`
  margin: 0;
  word-break: break-all;
  color: gray;
`;

export const InfoAboutEpisode = styled.h3`
  margin-bottom: 5px;
  word-break: break-all;
  margin: 0;
  margin-left: 100px;
  font-size: 20px;
  color: white;
`;

export const NameOfEpisode = styled.h2`
  margin: 0;
  margin-left: 100px;
  font-size: 20px;
  word-break: break-all;
  color: white;
`;

export const DateOfEpisode = styled.h3`
  margin: 0;
  margin-left: 100px;
  font-size: 20px;
  word-break: break-all;
  color: white;
`;
export const ButtonGoToPageOfEpisode = styled.button`
  width: 100px;
  height: 30px;
  background-color: rgb(47, 50, 56);
  color: white;
  margin: 20px;
  font: normal 17px arial;
  border-radius: 7px;
  box-shadow: 0 0 10px #444;
  word-break: break-all;
`;

export const PageOfEpisode = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const LocationBlock = styled.h2`
  margin: 0;
  word-break: break-all;
  color: gray;
`;

export const PageOfCharacter = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgb(36, 40, 47);
`;

export const ShowInformationAboutCharacter = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  white-space: nowrap;
`;

export const CharacterBlock = styled.h2`
  margin: 0;
  word-break: break-all;
  color: gray;
`;

export const ShowImageAndOtherAboutCharacter = styled.div`
  height: 300px;
  min-width: 100vw;
  display: flex;
  white-space: nowrap;
`;

export const InfoAboutCharacter = styled.h3`
  margin-bottom: 5px;
  word-break: break-all;
  margin: 0;
  font-size: 20px;
  color: white;
`;

export const ShowEpisodesOfCharacter = styled.div`
  height: 20px;
  width: 20px;
`;

export const StatusCharacterInPage = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
`;

export const EpisodesCharacterPage = styled.h2`
  word-break: break-all;
  color: white;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: orange;
  }
`;

export const OriginLocationCharacterOnPage = styled.h2`
  margin: 0;
  word-break: break-all;
  color: white;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: orange;
  }
`;

export const LastLocationCharacterOnPage = styled.h2`
  margin: 0;
  word-break: break-all;
  color: white;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: orange;
  }
`;
