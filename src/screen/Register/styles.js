import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  login: {
    paddingVertical: 40,
    paddingHorizontal:24,
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    backgroundColor: 'red',
  },
  textHeader: {
    color: 'white',
  },
  inputBox: {
    backgroundColor:'#FCFDFE', 
    fontSize: 14, 
    marginBottom:20, 
    paddingHorizontal: 20, 
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  btnPrim: {
    backgroundColor: '#5F2EEA',
    borderRadius: 12,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
  },
  btnDisable: {
    backgroundColor: '#878aa3',
    borderRadius: 12,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
  },
  btnPrimText: {
    color: 'white',
    fontWeight: '600'
  },
});
