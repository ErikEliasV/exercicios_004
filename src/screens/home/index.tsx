import React, { useState } from 'react'
import { Container, Title, Input, ButtonAdd, ButtonAddText, ViewRow, ViewList, ViewTask, TaskText, SubTitle } from './styles'

export function Home() {
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    function handleAddTask() {
        if (taskText.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, taskText])
            setTaskText('')
        }
    }

    return (
        <Container>
            <Title>Minhas Tarefas.</Title>
            <SubTitle>{taskText}</SubTitle>

            <ViewRow>
                <Input
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#888888'
                    value={taskText}
                    onChangeText={setTaskText}
                />
                <ButtonAdd onPress={handleAddTask}>
                    <ButtonAddText>+</ButtonAddText>
                </ButtonAdd>
            </ViewRow>
            
            <ViewList>
                {tasks.map((task, index) => (
                    <ViewTask key={index}>
                        <TaskText>
                            {task}
                        </TaskText>
                    </ViewTask>
                ))}
            </ViewList>
        </Container>
    )
}