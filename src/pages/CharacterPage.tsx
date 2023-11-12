import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCharacter } from '../http/charactersApi';
import { ICharacter } from '../http/interfaces';
import { MAIN_ROUTE, SEARCH_ROUTE } from '../router/pages';

const CharacterPage = () => {
  const { page, id } = useParams() as { page: string; id: string };
  const [loading, setLoading] = useState<boolean>(false);
  const [character, setCharacter] = useState<ICharacter>();
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    const response = await fetchCharacter(`https://rickandmortyapi.com/api/character/${id}`);
    setCharacter(response);
    response && console.log(response);
    setLoading(false);
  };

  const onHide = () => {
    navigate(MAIN_ROUTE + SEARCH_ROUTE + '/' + page);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      {loading ? (
        <span className="loader" data-testid="loader"></span>
      ) : (
        <div className="right-front">
          <div onClick={onHide}>Close side detail</div>
          <div className="character-item" key={character?.id}>
            {character?.name}
            <div className="character-image">
              <img src={character?.image} />
            </div>
            <div>Location: {character?.location.name}</div>
            <div>Species: {character?.species}</div>
            <div>Status: {character?.status}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CharacterPage;
