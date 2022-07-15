import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { StepperProps } from './interfaces';
import { styles, isSelected } from './styles';

const Stepper = ({ steps = 7, currentStep }:StepperProps) => {
    const { width } = useWindowDimensions();

    return(
        <View style={[styles.stepper, { width: width - 120 }]}>
            <View style={styles.stepsContainer}>
                { Array.from('x'.repeat(steps)).map((step, index) => {
                
                    return (
                        <View key={index} style={[styles.step, isSelected(currentStep === index).currentStep]}/>
                    )
                })
                }
            </View>
        </View>
    )   
}
export default Stepper;