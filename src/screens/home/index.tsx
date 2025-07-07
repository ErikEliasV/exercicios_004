import { Container, Title, Input, ButtonAdd, ButtonAddText, ViewRow } from './styles'

export function Home() {
    return (
        <Container>
            <Title>Minhas Tarefas.</Title>
            <ViewRow>
                <Input
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#888888'
                />
                <ButtonAdd>
                    <ButtonAddText>+</ButtonAddText>
                </ButtonAdd>
            </ViewRow>
        </Container>
    )
}