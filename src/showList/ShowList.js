import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ShowList = () => {
    const [addArr, setArrAdd] = useState([]);
    const [text, setText] = useState(0);
    const [value, setValue] = useState("");

    const handleAddText = () => {
        if (value.length > 0) {
            setArrAdd([...addArr, value]);
        } else {
            setArrAdd(value);
        }
    };

    const handleDeleteText = () => {
        addArr.pop();
        setText(text + 1);
    };
    return (
        <View style={style.container}>
            <TextInput
                style={style.textInput}
                placeholder="Enter Text"
                value={value}
                onChangeText={(text) => setValue(text)}
            />
            <View style={style.buttonView}>
                <View style={style.textView}>
                    <TouchableOpacity onPress={handleAddText}>
                        <Text style={style.buttonText}>ADD</Text>
                    </TouchableOpacity>

                    <View style={style.subTextView}>
                        <TouchableOpacity onPress={handleDeleteText}>
                            <Text style={style.buttonText}>SUB</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={style.dataView}>
                {addArr.length > 0 ? (
                    <>
                        {addArr.map((dt) => {
                            return (
                                <View style={style.dataTextView}>
                                    <View>
                                        <Text style={style.dataText}>{dt}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </>
                ) : (
                    <Text style={style.errorText}>NO Data Found</Text>
                )}
            </View>
        </View>
    );
};
export default ShowList;

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: "2%",
        paddingVertical: '5%'
    },
    textInput: {
        height: 40,
        borderWidth: 2,
        width: "100%",
        paddingHorizontal: "4%"
    },
    buttonView: {
        height: 100,
        width: '100%',
        paddingVertical: '5%',
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    subTextView: {
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    dataView:{
        height: 200, alignItems: 'center', width: '100%'
    },
    dataTextView:{
        backgroundColor:'yellow',width:'100%',padding:'2%',paddingVertical:'2%'
    },
    dataText:{
        fontSize: 20, color: 'purple' 
    },
    errorText:{
        fontSize:25,
        color:'red',
        fontWeight:'bold'
    }
})

