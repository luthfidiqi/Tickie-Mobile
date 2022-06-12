import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  home: {
    backgroundColor: 'white',
    height: '100%',
  },
  btnDateActive: {
    backgroundColor: '#5F2EEA', 
    color:'#FFFFFF', 
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginRight: 10,
  },
  btnDate: {
    backgroundColor: '#FFFFFF', 
    color:'#5F2EEA', 
    fontSize: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#5F2EEA',
    borderRadius: 4,
    marginRight: 10,
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
  
  btnColor: {
    textAlign: 'center',
    width: '100%',
    backgroundColor:'#5F2EEA',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 4,
    fontWeight: 'bold'
  }
});
