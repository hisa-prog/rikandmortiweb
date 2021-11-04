import styled from 'styled-components'

export const HomePage = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-color: rgb(36, 40, 47);
`
export const HeaderHomePage = styled.div`
    width: 100%;
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
    min-height: 100vh;
    max-width: 100vw;   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    overflow: hidden;
`
// display: flex;
//     align-items: center;
//     justify-content: center;

export const ShowCasesCharacters = styled.div`
    min-height: 80vh;
    min-width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    padding: 50px;
    background-color: rgb(36, 40, 47)
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
`

export const InfoCharacterInBlock = styled.div`
    height: 225px;
    width: 330px;
    padding-bottom: 250px;
    padding-left: 5px;
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
`

export const NameCharacterInBlock = styled.h2`
    height: 10%;
    word-break: break-all;
    color: white;
`

export const StatusCharacterInBlock = styled.h3`
    word-break: break-all;
    color: white;
`

export const SpeciesCharacterInBlock = styled.h3`
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

