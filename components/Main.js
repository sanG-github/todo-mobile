import React, { useEffect } from 'react';
import { Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'

export default function Main() {
	const [text, setText] = React.useState('')
	const [data, setData] = React.useState([])

	const save = async (value) => {
		try {
			const jsonValue = JSON.stringify(value)
			await AsyncStorage.setItem('data', jsonValue)
		} catch (e) {
			alert(e)
		}
	};

	const load = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('data')
			const data = jsonValue !== null ? JSON.parse(jsonValue) : null;

			if(data !== null) {
				setData(data)
			}
		} catch(e) {
			alert(e)
		}
	};

	useEffect(() => {
		load()
	}, [])	  

	const onAddItem = () => {
		if (text.length == 0)
			Alert.alert("Please add your work!")
		else {
			const newID = data.length === 0 ? 0 : data[0].id + 1
			const newItem = {
				id: newID,
				title: text,
				isDone: false
			}
			setData(() => ([
				newItem,
				...data
			]))
			setText('')
			save(data)
		}
	};

	const onCheckedItem = ( item ) => {
		const newData = data.map((value) => {
			return item.id !== value.id ? value : {...value, isDone: !item.isDone}
		})
		setData(newData)
		save(data)
	};

	const onDeleteItem = ( item ) => {
		const newData = data.filter(( value ) => {
			if (item.id !== value.id)
				return value
		})
		setData(newData)
		save(data)
	};

	const renderItem = ( {item} ) => {
		return (
			<View style={styles.item}>
				<Icon
					name={'ios-checkmark-circle-outline'} 
					style={item.isDone ? styles.iconDone : styles.iconNotDone} 
					size={30}
					onPress={() => onCheckedItem(item)}
				/>
				<Text style={item.isDone ? styles.textDone : styles.textNotDone}>
					{item.title}
				</Text>
				<Icon
					name={'ios-trash'} 
					style={item.isDone ? styles.iconNotDone : styles.iconNotDone} 
					size={30}
					onPress={() => onDeleteItem(item)}
				/>
			</View>
		)
	};

	return (
		<View style={styles.body}>
			<View style={styles.header}>
				<Text style={styles.headerText}> TODO </Text>
				<Icon name={'ios-add-circle-outline'}  size={40}/>
			</View>
			<View style={styles.addBar}>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => setText(text)}
					placeholder={'New todo'}
					value={text}
				/>
				<Button
					title="ADD"
					onPress={() => onAddItem()}
				/>
			</View>
			<FlatList
				data={data}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	); 
}

