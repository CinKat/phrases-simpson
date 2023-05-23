import React from 'react'
import Character from '../Character'
import { styled } from 'styled-components';

function CharacterContainer({characters, reqApi}) {
  console.log(characters)
  return (
    <>
      <ContainerCharacter>
        {characters.map((character, index) => (
          <Character dataCharacter={character} key={index}/>
        ) )}
      </ContainerCharacter>
      <ContainerButton>
       <Button onClick={reqApi}>Recargar imágenes</Button>
      </ContainerButton>
    </>
  )
}

const ContainerCharacter = styled.div`
  display: flex;
`;

const ContainerButton = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  width: 250px;
  background-color: #e76f51;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 18px;
  margin-top: 40px;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background-color: #1c0950;
  }
`;
export default CharacterContainer
