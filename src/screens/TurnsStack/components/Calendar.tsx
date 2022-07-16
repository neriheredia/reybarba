import React from 'react'
import { View, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import { colors } from '../../../constants/colors';
import { moderateScale } from '../../../shared/helpers/scaling';



const Calendar = () => {
  return (
    <CalendarStrip
      scrollable
      style={{height:90, paddingTop: 0, paddingBottom: 0}}
      calendarColor={colors.brown}
      calendarHeaderStyle={{color: 'white'}}
      dateNumberStyle={{color: 'white', fontSize:moderateScale(13,1)}}
      dateNameStyle={{color: 'white', fontSize:moderateScale(13,1)}}
      iconContainer={{flex: 0.1}}
      highlightDateNameStyle={{color:colors.orange,fontSize:moderateScale(13,1)}}
      highlightDateNumberStyle={{color:colors.orange,fontSize:moderateScale(13,1)}}
    />

  )
}

export default Calendar