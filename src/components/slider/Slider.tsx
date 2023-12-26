import React, { Component } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

const activeColor = 'red';
const inactiveColor = 'lightgrey';
const dotWidth = 20;


interface ISliderProps {
    activeColor?: string;
    inactiveColor?: string;
    dotWidth?: number,
    handlePresents:(val:number)=> void
}

export default class Slider extends Component <ISliderProps> {

    constructor(props) {
        super(props)    
        this.state = {
            sliderWidth: 0
        }
    }
  

    pan = new Animated.ValueXY({ x: 0, y: 0 })
    scaleY = new Animated.Value(1);
    translateX = new Animated.Value(0)
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            this.pan.setValue({ x: 0, y: 0 });
            this.animateScale(true);
        },
        onPanResponderMove: Animated.event([null, { dx: this.pan.x, dy: this.pan.y }], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            this.pan.flattenOffset();
            this.animateScale(false);
        },
        onPanResponderTerminate:()=> this.animateScale,
    })
    setListener() {
        const { sliderWidth } = this.state
        this.translateX.removeAllListeners();
        this.translateX.addListener(x => {
            const progress = Math.floor((x.value / (sliderWidth - dotWidth))*100)
            this.props.handlePresents(progress)
            
        })
    }

    animateScale = (expand:boolean) => {
        Animated.spring(this.scaleY, { toValue: expand ? 2 : 1, useNativeDriver: true, bounciness: 0 }).start()
    }

    render() {

        const { sliderWidth } = this.state
        this.translateX = Animated.diffClamp(this.pan.x, 0, sliderWidth - dotWidth);
        this.setListener();

        return (
            <View style={styles.container}>
                <View style={styles.barContainer} {...this.panResponder.panHandlers}
                    onLayout={(e) => { this.setState({ sliderWidth: e.nativeEvent.layout.width }) }}>
                    {!!sliderWidth && <Animated.View style={[styles.bar, {backgroundColor: this.props.inactiveColor ||  inactiveColor, transform: [{ scaleY: this.scaleY }] }]}>
                        <Animated.View 
                            style={
                                [styles.activeLine, 
                                {backgroundColor: this.props.activeColor || activeColor, transform: [{ translateX: this.translateX }] }
                            ]} />
                    </Animated.View>}
                    {!!sliderWidth && <Animated.View 
                        style={[styles.dot, 
                        {
                            height: this.props.dotWidth ||  dotWidth,
                            width:this.props.dotWidth ||  dotWidth,
                            borderRadius: this.props.dotWidth || dotWidth / 2,
                            backgroundColor:this.props.activeColor ||  activeColor,
                            transform: [{ translateX: this.translateX }] }]
                        } 
                    />}
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 50
    },
    txt: {
        fontSize: 25,
        color: '#000'
    },
    barContainer: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    bar: {
        height: 3,
        width: '100%',
        overflow: 'hidden',
        justifyContent: 'center'
    },
    dot: {
        position: 'absolute',
    },
    activeLine: {
        height: '100%',
        width: '100%',
        marginLeft: '-100%'
    }
})