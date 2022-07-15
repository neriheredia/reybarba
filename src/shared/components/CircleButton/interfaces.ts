export type CircleType = 'heart' | 'share' | 'key' | 'label' | 'hearto' | 'keyo' | 'check' | 'home';

export interface CircleButtonProps {
    type: CircleType,
    size: number,
    style?: any,
    onPress?: Function
};