import React from "react"

const Pagination = ({charactersPerPage, totalCharacters}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage ); i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            pageNumbers.map(number => (
                {Characters.map((item: any) => (
                 <BlockInfoCharacter>
                    <ImageCharacterInBlock>
                        <img src = {item.image}
                            width={225}
                            height={225}
                        />
                    </ImageCharacterInBlock>
                    <InfoCharacterInBlock>
                        <NameCharacterInBlock>
                            {JSON.stringify(item.name)}
                        </NameCharacterInBlock>
                        <StatusCharacterInBlock>
                        {JSON.stringify(item.status)}
                        </StatusCharacterInBlock>
                        <SpeciesCharacterInBlock>
                        {JSON.stringify(item.species)}
                        </SpeciesCharacterInBlock>
                    </InfoCharacterInBlock>
          </BlockInfoCharacter>
          ))}
            ))
        </div>
    )
}

export default Pagination