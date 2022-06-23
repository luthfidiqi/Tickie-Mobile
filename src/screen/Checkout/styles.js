import {StyleSheet} from 'react-native';

export default StyleSheet.create({
inputBox: {
    backgroundColor:'#FCFDFE', 
    fontSize: 14, 
    marginBottom:20, 
    paddingHorizontal: 20, 
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#DEDEDE',
},
btnBook: {
    textAlign: 'center',
    width: '100%',
    backgroundColor:'#5F2EEA',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 4,
    fontWeight: 'bold'
},
paymentMethodItem: {
    width:75,
    borderRadius: 8,
    paddingVertical: 5,
    marginVertical: 2,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#DEDEDE',
    alignItems: 'center',
},
paymentMethodItemActive: {
    width:75,
    borderRadius: 8,
    paddingVertical: 5,
    marginVertical: 2,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#9570FE',
    // backgroundColor: '#F5F6F8',
    alignItems: 'center',
  },
});