import {
  PageOfLocations,
  ShowCasesLocations,
  BlockInfoLocations,
  InfoLocationsInBlock,
  NameLocationsInBlock,
  TypeLocationsInBlock,
  DimensionLocationsInBlock,
  LocationBlock,
  Wrapper,
  Button,
  NumOfCurrentPage,
  ButtonGoToPageOfEpisode,
  Pagination,
  ButtonPagination,
} from "../../components/layouts/index";
import banner from "./../../public/RickAndMortyBackground.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Locations() {
  const [Locations, setLocations] = useState([]);
  const [maxPagesLocations, setMaxPagesLocations] = useState(0);
  const [pageLocations, setPageLocations] = useState(1);
  const router = useRouter();

  useEffect(() => {
    async function GetInfoCharacter(value: number) {
      let data = await axios.post("/api/GetInfoLocations", { Page: value });
      setLocations(data.data.data.results);
      setMaxPagesLocations(data.data.data.info.pages);
      console.log(maxPagesLocations);
    }
    GetInfoCharacter(pageLocations);
  }, [pageLocations]);

  function increment() {
    if (pageLocations < maxPagesLocations) {
      setPageLocations((prevCounter: number) => {
        return prevCounter + 1;
      });
    }
  }

  function decrement() {
    if (pageLocations > 1) {
      setPageLocations((prevCounter: number) => {
        return prevCounter - 1;
      });
    }
  }

  const goToLocation = (locationId: string) => {
    router.push(`/Locations/${locationId}`);
  };

  const goToPage = async (item: number) => {
    let data = await axios.post("/api/GetInfoLocations", { Page: item });
    setPageLocations(item);
    setLocations(data.data.data.results);
    setMaxPagesLocations(data.data.data.info.pages);
  };

  function renderPagination() {
    if (pageLocations < 4) {
      const tmp = [];
      for (let i = 2; i < 5; i++) {
        tmp.push(i);
      }

      return (
        <div>
          {tmp.map((item) => (
            <ButtonPagination onClick={() => goToPage(item)}>
              {item}
            </ButtonPagination>
          ))}
        </div>
      );
    }
    if (pageLocations >= 4 && pageLocations < maxPagesLocations - 4) {
      const tmp = [];
      for (let i = pageLocations - 2; i < pageLocations + 3; i++) {
        tmp.push(i);
      }

      return (
        <div>
          {tmp.map((item) => (
            <ButtonPagination onClick={() => goToPage(item)}>
              {item}
            </ButtonPagination>
          ))}
        </div>
      );
    }

    if (pageLocations >= maxPagesLocations - 4) {
      const tmp = [];
      for (let i = maxPagesLocations - 4; i < maxPagesLocations; i++) {
        tmp.push(i);
      }

      return (
        <div>
          {tmp.map((item) => (
            <ButtonPagination onClick={() => goToPage(item)}>
              {item}
            </ButtonPagination>
          ))}
        </div>
      );
    }
  }

  return (
    <PageOfLocations>
      <ShowCasesLocations>
        {Locations.map((item: any) => (
          <BlockInfoLocations>
            <InfoLocationsInBlock>
              <LocationBlock>Type :</LocationBlock>
              <TypeLocationsInBlock
                style={{ marginLeft: "65px", fontSize: "20px" }}
              >
                {item.type}
              </TypeLocationsInBlock>
              <LocationBlock>Name of {item.type} :</LocationBlock>
              <NameLocationsInBlock
                style={{ marginLeft: "65px", fontSize: "20px" }}
              >
                {item.name}
              </NameLocationsInBlock>
              <LocationBlock>Dimension :</LocationBlock>
              <DimensionLocationsInBlock
                style={{ marginLeft: "65px", fontSize: "20px" }}
              >
                {item.dimension}
              </DimensionLocationsInBlock>
              <ButtonGoToPageOfEpisode onClick={() => goToLocation(item.id)}>
                {" "}
                Перейти{" "}
              </ButtonGoToPageOfEpisode>
            </InfoLocationsInBlock>
          </BlockInfoLocations>
        ))}
      </ShowCasesLocations>
      <Wrapper>
        <Button
          onClick={decrement}
          style={{ visibility: pageLocations === 1 ? "hidden" : "visible" }}
        >
          {" "}
          Пред страница{" "}
        </Button>
        <NumOfCurrentPage> Текущая страница: {pageLocations} </NumOfCurrentPage>
        <Button
          onClick={increment}
          style={{
            visibility:
              pageLocations === maxPagesLocations ? "hidden" : "visible",
          }}
        >
          {" "}
          След страница{" "}
        </Button>
      </Wrapper>
      <Pagination>
        <ButtonPagination onClick={() => goToPage(1)}>1</ButtonPagination>
        {renderPagination()}
        <ButtonPagination onClick={() => goToPage(maxPagesLocations)}>
          {maxPagesLocations}
        </ButtonPagination>
      </Pagination>
    </PageOfLocations>
  );
}
