import Image from 'next/image'
import {
  AvatarContainer,
  CommentContainer,
  CommentContent,
  TextContainer,
  TextSection,
} from './styles'
import Bookimg from '../../../../images/arquitetura-limpa.png'
import { Avatar } from '@/Components/Avatar'
import { StarCollection } from '@/Components/StarCollection'
export function Comment() {
  return (
    <CommentContainer>
      <CommentContent>
        <AvatarContainer>
          <Avatar
            src="https://avatars.githubusercontent.com/u/96553464?v=4"
            alt="Imagem do usuário"
            width={40}
            height={40}
          />
          <div>
            <p>Daniel Lopes</p>
            <p>Hoje</p>
          </div>
          <StarCollection NumberOfStarChecked={4} />
        </AvatarContainer>
        <TextSection>
          <Image src={Bookimg} alt="Capa do livro" />
          <TextContainer>
            <section>
              <h1>Título</h1>
              <p>Autor</p>
            </section>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo aut eum assumenda laudantium amet in dolor, maxime sit
              nesciunt repudiandae ex modi recusandae perferendis nisi culpa
              enim odit non consequuntur.
            </p>
          </TextContainer>
        </TextSection>
      </CommentContent>
    </CommentContainer>
  )
}
