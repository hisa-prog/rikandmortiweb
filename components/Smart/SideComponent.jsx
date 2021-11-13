import {
  SidebarLayout,
  SidebarBody,
  CloseSidebarArea,
  NavListcontainer,
} from "../layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ControllButton, NavButton } from "../ui";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useRouter } from "next/router";
import SideBarContext from "../context/sidebarContext";

export default function SideComponent() {
  const router = useRouter();
  const { sidebar, setSidebar } = useContext(SideBarContext);

  const NavBtnClick = (e) => {
    setSidebar(() => !sidebar);
    router.push(`/${e.target.id}`);
  };

  return (
    <>
      <SidebarLayout
        onClick={() => setSidebar(!sidebar)}
        className={!sidebar ? "" : "active"}
      ></SidebarLayout>
      <SidebarBody className={!sidebar ? "" : "active"}>
        <CloseSidebarArea>
          <ControllButton onClick={() => setSidebar(!sidebar)}>
            <FontAwesomeIcon icon={faChevronLeft} color="#000" size="2x" />
          </ControllButton>
        </CloseSidebarArea>
        <NavListcontainer>
          <NavButton id="/" onClick={(e) => NavBtnClick(e)}>
            Персонажи
          </NavButton>
          <NavButton id="Locations" onClick={(e) => NavBtnClick(e)}>
            Локации
          </NavButton>
          <NavButton id="Episodes" onClick={(e) => NavBtnClick(e)}>
            Эпизоды
          </NavButton>
        </NavListcontainer>
      </SidebarBody>
    </>
  );
}
