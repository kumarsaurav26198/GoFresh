import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';


const WishlistCard = ({ onPress, name, image, type, attack, id }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <Text style={styles.lenght}>{`${ "#00" }` + id}</Text>
                    <Text style={styles.name}>{name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        {type ?
                            <View style={styles.typeWrapper}>
                                <Text style={{ color: 'white' }}>{type}</Text>
                            </View>
                            : ""}

                        {attack ?
                            <View style={styles.attackWrapper}>
                                <Text style={{ color: 'white' }}>{attack}</Text>
                            </View>
                            : ""}
                    </View>
                </View>
                <View style={styles.ImageBackground}>
                    {/* <ImageBackground source={require("../assets/images/eclipse.png")} style={{ height: "100%" }}>

                        <TouchableOpacity style={{ height: 24, width: 24, left: 115, top: 10, }} onPress={onPress} >
                            <Image source={require("../assets/images/whiteHeart.png")} style={{ height: 24, width: 24, paddingRight: 10 }} />
                        </TouchableOpacity>
                        <View style={{ right: -20, }}>

                            <Image source={image} style={{ height: 100, width: 100 }} />
                        </View>
                    </ImageBackground> */}

                </View>
            </View>
        </>
    );
};

export default WishlistCard;

const styles = StyleSheet.create({
    container: {
        height: 140,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#71CEB1",
        elevation: 8
    },
    lenght: {
        marginTop: 5,
        fontWeight: "500",
        color: 'gray',

    },
    name: {
        fontWeight: "500",
        fontSize: 24,
        color: "white"
    },
    typeWrapper: {
        width: 62,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 6
    },
    attackWrapper: {
        width: 69,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF4D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageBackground: {
        width: "40%",
    },
});