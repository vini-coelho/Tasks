import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, FlatList } from 'react-native';
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/images/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task'

export default class Agenda extends Component {

    state = {
        tasks: [
            { id: Math.random(), desc: 'Tarefa 1', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 2', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 3', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 4', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 1', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 2', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 3', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 4', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 1', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 2', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 3', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 4', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 1', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 2', estimateAt: new Date(), doneAt: new Date() },
            { id: Math.random(), desc: 'Tarefa 3', estimateAt: new Date(), doneAt: null },
            { id: Math.random(), desc: 'Tarefa 4', estimateAt: new Date(), doneAt: null },
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage}
                    style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList data={this.state.tasks} keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) => <Task {...item}/>} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    tasksContainer: {
        flex: 7,
    }
})