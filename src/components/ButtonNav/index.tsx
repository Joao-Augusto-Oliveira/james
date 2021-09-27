import * as S from './styles';

interface ButtonNavProps {
  name: string;
}
export function ButtonNav({name}:ButtonNavProps){
  return(
    <>
      <S.Button>
        {name}
      </S.Button>
    </>
  )
}
