import {
  PageOfEpisodes,
  ShowCasesEpisodes,
  BlockInfoEpisodes,
  InfoEpisodesInBlock,
  InfoAboutEpisode,
  EpisodeBlock,
  NameOfEpisode,
  DateOfEpisode,
  ButtonGoToPageOfEpisode,
  Wrapper,
  Button,
  NumOfCurrentPage,
  Pagination,
  ButtonPagination,
} from "../../components/layouts/index";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Episode from "./../Episodes/[episodeId]";

export default function Locations() {
  const [Episodes, setEpisodes] = useState([]);
  const [maxPagesEpisodes, setMaxPagesEpisodes] = useState(0);
  const [pageEpisodes, setPageEpisodes] = useState(1);
  const router = useRouter();

  useEffect(() => {
    async function GetInfoCharacter(value: number) {
      let data = await axios.post("/api/GetInfoEpisodes", { Page: value });
      setEpisodes(data.data.data.results);
      setMaxPagesEpisodes(data.data.data.info.pages);
      console.log(maxPagesEpisodes);
    }
    GetInfoCharacter(pageEpisodes);
  }, [pageEpisodes]);

  function increment() {
    if (pageEpisodes < maxPagesEpisodes) {
      setPageEpisodes((prevCounter: number) => {
        return prevCounter + 1;
      });
    }
  }

  function decrement() {
    if (pageEpisodes > 1) {
      setPageEpisodes((prevCounter: number) => {
        return prevCounter - 1;
      });
    }
  }

  const goToEpisode = (episodeId: string) => {
    router.push(`/Episodes/${episodeId}`);
  };

  const goToPage = async (item: number) => {
    let data = await axios.post("/api/GetInfoEpisodes", { Page: item });
    setPageEpisodes(item);
    setEpisodes(data.data.data.results);
    setMaxPagesEpisodes(data.data.data.info.pages);
  };

  return (
    <PageOfEpisodes>
      <ShowCasesEpisodes>
        {Episodes.map((item: any) => (
          <BlockInfoEpisodes>
            <InfoEpisodesInBlock>
              <EpisodeBlock>Episode :</EpisodeBlock>
              <InfoAboutEpisode>{item.episode}</InfoAboutEpisode>
              <EpisodeBlock>Name Of Episode :</EpisodeBlock>
              <NameOfEpisode>{item.name}</NameOfEpisode>
              <EpisodeBlock>Air Date Of Episode :</EpisodeBlock>
              <DateOfEpisode>{item.air_date}</DateOfEpisode>
              <ButtonGoToPageOfEpisode onClick={() => goToEpisode(item.id)}>
                {" "}
                Перейти{" "}
              </ButtonGoToPageOfEpisode>
            </InfoEpisodesInBlock>
          </BlockInfoEpisodes>
        ))}
      </ShowCasesEpisodes>
      <Wrapper>
        <Button
          onClick={decrement}
          style={{ visibility: pageEpisodes === 1 ? "hidden" : "visible" }}
        >
          {" "}
          Пред страница{" "}
        </Button>
        <NumOfCurrentPage> Текущая страница: {pageEpisodes} </NumOfCurrentPage>
        <Button
          onClick={increment}
          style={{
            visibility:
              pageEpisodes === maxPagesEpisodes ? "hidden" : "visible",
          }}
        >
          {" "}
          След страница{" "}
        </Button>
      </Wrapper>
      <Pagination>
        <ButtonPagination onClick={() => goToPage(1)}>1</ButtonPagination>
        <ButtonPagination onClick={() => goToPage(2)}>2</ButtonPagination>
        <ButtonPagination onClick={() => goToPage(maxPagesEpisodes)}>
          {maxPagesEpisodes}
        </ButtonPagination>
      </Pagination>
    </PageOfEpisodes>
  );
}
