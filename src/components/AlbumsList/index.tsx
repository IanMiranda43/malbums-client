import React from 'react';

import {
  Container,
  Album,
  Body,
  Details,
  Item,
  Actions,
  EditButton,
  DeleteButton,
} from './styles';

function AlbumsList() {
  const albumsList = albums.map((album) => {
    const { id, name, artist, year, genre, total_time, created_at } = album;

    return (
      <Album key={id}>
        <Body>
          <Details>
            <Item>
              <span>Name:</span>
              <strong>{name}</strong>
            </Item>
            <Item>
              <span>Artist:</span>
              <strong>{artist}</strong>
            </Item>

            <Item>
              <span>Genre:</span>
              <strong>{genre}fdjlkfjskldfjl</strong>
            </Item>
          </Details>

          <Details>
            <Item>
              <span>Released at:</span>
              <strong>{year}</strong>
            </Item>

            <Item>
              <span>Total time:</span>
              <strong>{total_time} min</strong>
            </Item>
            <Item>
              <span>Added in:</span>
              <strong>{created_at}</strong>
            </Item>
          </Details>
        </Body>

        <Actions>
          <EditButton>Edit</EditButton>
          <DeleteButton outlined className="danger">
            Delete
          </DeleteButton>
        </Actions>
      </Album>
    );
  });

  return <Container>{albumsList}</Container>;
}

export default AlbumsList;

const albums = [
  {
    id: '1',
    name: 'Goin` Back',
    artist: 'WILD',
    year: 2021,
    genre: 'Folk',
    total_time: 43,
    created_at: '08/09/2021',
  },
  {
    id: '2',
    name: 'Mind Of Mine',
    artist: 'ZAYN',
    year: 2016,
    genre: 'Dance music',
    total_time: 59,
    created_at: '08/09/2021',
  },
  {
    id: '3',
    name: 'Corazón',
    artist: 'Fonseca',
    year: 2005,
    genre: 'Latin music',
    total_time: 55,
    created_at: '08/09/2021',
  },
  {
    id: '4',
    name: 'Where Are You Now',
    artist: 'Lost Frequencies feat Calum Scott',
    year: 2021,
    genre: 'Eletronic',
    total_time: 2,
    created_at: '08/09/2021',
  },
  {
    id: '5',
    name: 'Sage and Stone',
    artist: 'Acriel & the Sequoias',
    year: 2017,
    genre: 'Folk',
    total_time: 22,
    created_at: '08/09/2021',
  },
  {
    id: '6',
    name: 'Evolve',
    artist: 'Imagine Dragons',
    year: 2017,
    genre: 'Pop music',
    total_time: 43,
    created_at: '08/09/2021',
  },
  {
    id: '7',
    name: 'Acústico Jota Quest',
    artist: 'Jote Quest',
    year: 2017,
    genre: 'Rock / Pop',
    total_time: 112,
    created_at: '08/09/2021',
  },
  {
    id: '8',
    name: 'LABRINTH, SIA & DIPLO PRESENT... LSD',
    artist: 'Sia, Diplo, Labrinth',
    year: 2019,
    genre: 'Pop music',
    total_time: 30,
    created_at: '08/09/2021',
  },
];
