import {
  Button,
  PageOfEpisode,
  Wrapper,
  EpisodeBlock,
  NameOfEpisode,
  InfoAboutEpisode,
  DateOfEpisode,
  NameCharacterInBlock,
} from "../../components/layouts/index";
import axios from "axios";
import { useRouter } from "next/router";

export default function Episode({ episodeId, characters, episode }: any) {
  const router = useRouter();
  const goToPageEpisodes = () => {
    router.push(`/Episodes`);
  };
  const goToCharacters = () => {
    router.push(`/`);
  };
  const goToCharacterPage = (characterId: string) => {
    router.push(`/Character/${characterId}`);
  };

  return (
    <PageOfEpisode>
      <EpisodeBlock
        style={{ fontSize: "25px", paddingTop: "10px", paddingLeft: "10px" }}
      >
        Episode :
      </EpisodeBlock>
      <InfoAboutEpisode style={{ fontSize: "40px" }}>
        {episode.episode}
      </InfoAboutEpisode>
      <EpisodeBlock
        style={{ fontSize: "25px", paddingTop: "10px", paddingLeft: "10px" }}
      >
        Name of Episode :
      </EpisodeBlock>
      <NameOfEpisode style={{ fontSize: "40px" }}>{episode.name}</NameOfEpisode>
      <EpisodeBlock
        style={{ fontSize: "25px", paddingTop: "10px", paddingLeft: "10px" }}
      >
        Episode release date :
      </EpisodeBlock>
      <DateOfEpisode style={{ fontSize: "40px" }}>
        {episode.air_date}
      </DateOfEpisode>
      <EpisodeBlock
        style={{ fontSize: "25px", paddingTop: "10px", paddingLeft: "10px" }}
      >
        Characters in this episode :
      </EpisodeBlock>
      {characters.map((item: any) => (
        <NameCharacterInBlock onClick={() => goToCharacterPage(item.id)}>
          {item.name}
        </NameCharacterInBlock>
      ))}
      <Wrapper>
        <Button onClick={() => goToPageEpisodes()} style={{ height: "55px" }}>
          Вернуться к Эпизодам
        </Button>
        <Button onClick={() => goToCharacters()} style={{ height: "55px" }}>
          Вернуться к Персонажам
        </Button>
      </Wrapper>
    </PageOfEpisode>
  );
}

export async function getServerSideProps(ctx: any) {
  const { episodeId } = ctx.query;
  const episode = (
    await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
  ).data;
  let characters = "";

  for (let i = 0; i < episode.characters.length; i++) {
    let tmp = episode.characters[i].split("/");
    tmp = tmp[tmp.length - 1];
    characters =
      i === episode.characters.length - 1
        ? characters + tmp
        : characters + tmp + ",";
  }
  characters = (
    await axios.get(`https://rickandmortyapi.com/api/character/${characters}`)
  ).data;
  console.log(characters);
  return {
    props: { episodeId, characters, episode },
  };
}
