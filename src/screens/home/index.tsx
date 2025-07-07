import React, { useState } from 'react'
import { Container, Title, Input, ButtonAdd, ButtonAddText, ViewRow, ViewList, ViewTask, TaskText, SubTitle, ButtonRmv, ButtonRmvText, ViewRowRm } from './styles'

export function Home() {
    const [taskText, setTaskText] = useState('')
    const [tasks, setTasks] = useState<string[]>([])

    function handleAddTask() {
        if (taskText.trim() !== '') {
            setTasks(prevTasks => [...prevTasks, taskText])
            setTaskText('')
        }
    }

    function handleRemoveTask(index: number) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index))
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
                <ViewRowRm key={index}> 
                    <ViewTask>
                        <TaskText>
                            {task}
                        </TaskText>
                    </ViewTask>
                        <ButtonRmv onPress={() => handleRemoveTask(index)}>
                            <ButtonRmvText>-</ButtonRmvText>
                        </ButtonRmv>
                </ViewRowRm>
                ))}
            </ViewList>
        </Container>
    )
}