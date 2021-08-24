import { Button } from './Button'

interface SideBarProps {
  selectedGenreId: number,
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>,
  handleClickButton(id: number): void
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  const { genres, selectedGenreId, handleClickButton } = props
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}