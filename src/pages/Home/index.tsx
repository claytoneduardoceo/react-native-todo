import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Todo from '../Interfaces/Task';
import Task from '../Interfaces/Task';
import {styles} from './styles';

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleAddNewTask = () => {
    const id = tasks.length + 1;
    setTasks([...tasks, new Todo(id, newTask, false)]);
    setNewTask('');
  };

  const markAsDone = (task: Task) => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      const newArr = [...tasks];
      newArr[index].done = true;
      setTasks(newArr);
    }
  };

  const markAsUndo = (task: Task) => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      const newArr = [...tasks];
      newArr[index].done = false;
      setTasks(newArr);
    }
  };

  const remove = (task: Task) => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      const newArr = [...tasks];
      newArr.splice(index, 1);
      setTasks(newArr);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={'#40012A'} />
      <LinearGradient colors={['#40012A', '#F24130']} style={styles.container}>
        <View style={styles.iconView}>
          <Icon style={styles.icon} name="list-alt" />
          <Text style={styles.title}>Minhas Tarefas!</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={setNewTask}
            placeholder="Título da Tarefa"
            style={styles.input}
            value={newTask}
          />
          <TouchableOpacity
            onPress={handleAddNewTask}
            style={newTask.length >= 3 ? styles.button : styles.buttonDisabled}
            activeOpacity={0.7}>
            <Icon style={styles.iconVariant} name="plus" />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksView}>
          {tasks.map(task => (
            <View key={task.id} style={styles.task}>
              <Text style={styles.taskText}>{task.title}</Text>
              <TouchableOpacity onPress={() => remove(task)}>
                <Icon style={styles.taskIcon} name="trash" />
              </TouchableOpacity>
              {task.done ? (
                <TouchableOpacity onPress={() => markAsUndo(task)}>
                  <Icon style={styles.taskIcon} name="redo" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => markAsDone(task)}>
                  <Icon style={styles.taskIcon} name="check" />
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
