import {StyleSheet} from 'react-native'

export default StyleSheet.create({
	body: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#FFF'
	},
	header: {
		height: 60,
		margin: 20,
		display: 'flex',
		backgroundColor: '#FFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	addBar: {
		display: 'flex', 
		justifyContent: 'center',
		flexDirection: 'row',
		margin: 20 
	},
	headerText: {
		flex: 10,
		fontSize: 40,
		color: '#2B50AA',
		fontWeight: 'bold',
	},
	textInput: {
		height: 40,
		paddingLeft: 20,
		width: '80%', 
		borderColor: 'gray',
		borderWidth: 1
	},
	iconDone: {
		flex: 1,
		color: 'green',
		marginLeft: 20,
	},
	iconNotDone: {
		flex: 1,
		color: 'red',
		marginLeft: 20,
	},
	listContainer: {
		margin: 20,
		backgroundColor: 'red'
	},
	item: {
		backgroundColor: '#f5f4f2',
		display: 'flex',
		flexDirection: 'row',
		paddingTop: 20,
		paddingBottom: 20,
		marginTop: 0.5,
		marginLeft: 20,
		marginRight: 20
    },
    textDone: {
		flex: 6,
		fontSize: 20,
		color: 'green',
		textDecorationLine: 'line-through'
    },
    textNotDone: {
		flex: 6,
		fontSize: 20,
		color: '#000',
    }
});
