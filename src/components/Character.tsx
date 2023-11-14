import { ICharacter } from '../http/interfaces.ts';
import { SEARCH_ROUTE } from '../router/pages.ts';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context, ContextType } from '../App.tsx';

const Character = ({ item }: { item: ICharacter }) => {
  const navigate = useNavigate();
  const { currentPage } = useContext<ContextType>(Context);
  const openCharacter = (id: number) => {
    currentPage
      ? navigate(`/${SEARCH_ROUTE}/${currentPage}/${id}`)
      : navigate(`/${SEARCH_ROUTE}/1/${id}`);
  };

  return (
    <div
      className="character-item"
      key={item.id}
      onClick={() => openCharacter!(item.id)}
      data-testid="character-item"
    >
      {item.name}
      <div className="character-image" data-testid="image">
        <img src={item.image} />
      </div>
      <div data-testid="name">Location: {item.location.name}</div>
      <div data-testid="species">Species: {item.species}</div>
      <div data-testid="status">Status: {item.status}</div>
      <button>Send</button>
    </div>
  );
};

export default Character;
