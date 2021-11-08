import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {
    HeaderHomePage,
    HeaderTitleHomePage,
    TitleHomePage
  } from "../layouts"
import Image from 'next/image'
import logo from '../../public/icons/RickAndMortiLogo.png'
import {ControllButton} from '../ui'
import SidebarContext from "../context/sidebarContext"
import {  useContext } from "react"

export default function Header() {
    const {sidebar, setSidebar} = useContext(SidebarContext)
    return (
        <HeaderHomePage>
        <ControllButton onClick={() => setSidebar(!sidebar)}>
            <FontAwesomeIcon icon={faBars} size="2x" />
        </ControllButton>
        <HeaderTitleHomePage>
          <TitleHomePage>
            Rick And Morti Web
          </TitleHomePage>
        </HeaderTitleHomePage>
        <Image src={logo}
            width={60}
            height={60} 
        />
      </HeaderHomePage>
    )
}