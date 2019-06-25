import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, FlatList, StatusBar, Platform, TouchableOpacity } from 'react-native';
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/images/today.jpg'
import commonStyles from '../commonStyles'
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        ],
        visibleTasks: [],
        showDoneTasks: true,
    }

    filterTasks = () => {
        let visibleTasks = null;
        if(this.state.showDoneTasks){
            visibleTasks=[...this.state.tasks];
        } else{
            const pending = task => task.doneAt === null;

            visibleTasks = this.state.tasks.filter(pending);
        }

        this.setState({ visibleTasks })
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks); 
    }

    toggleTask = id => {
        const tasks = [...this.state.tasks]

        tasks.forEach(task => {
            if (task.id === id) {
                task.doneAt ? task.doneAt = null : task.doneAt = new Date()
            } 
        })

        this.setState({ tasks }, this.filterTasks);
    }

    componentDidMount = () => {
        this.filterTasks();
    }

    render() {
        return (
            <>
                <StatusBar translucent={true} barStyle='light-content' backgroundColor='rgba(0,0,0,0)'/>
                <View style={styles.container}>
                    <ImageBackground source={todayImage}
                        style={styles.background}>
                        <View style={styles.iconBar}>
                            <TouchableOpacity onPress={this.toggleFilter}>
                                <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                    size={20} color={commonStyles.colors.secondary}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.subtitle}>
                                {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                            </Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.tasksContainer}>
                        <FlatList data={this.state.visibleTasks} keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => <Task toggleTask={this.toggleTask}{...item}/>} />
                    </View>
                </View>
            </>
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
    },
    iconBar: {
        alignItems: 'flex-end',
        marginTop: StatusBar.currentHeight + 10,
        marginRight: 20, 
    }
})