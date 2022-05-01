import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    elevation: 10,
  },
  inputView: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tasksView: {
    flex: 1,
    marginTop: 20,
    maxHeight: '80%',
    padding: 10,
  },
  task: {
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#ffffff3d',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    flex: 1,
    color: '#F2F0EB',
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    color: '#F2F0EB',
    fontSize: 18,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    color: '#40012A',
    fontSize: 20,
  },
  input: {
    flex: 3,
    backgroundColor: '#fff',
    color: '#0D0D0D',
    fontSize: 15,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    height: 50,
    marginRight: 15,
  },
  button: {
    backgroundColor: '#f240304d',
    padding: 8,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 50,
    width: 50,
  },
  buttonDisabled: {
    backgroundColor: '#f240301a',
    padding: 8,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    color: '#F2F0EB',
    fontSize: 18,
    marginRight: 5,
  },
  iconVariant: {
    color: '#F2F0EB',
    fontSize: 18,
  },
  taskIcon: {
    color: '#F2F0EB',
    fontSize: 20,
    marginRight: 15,
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#590242',
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});