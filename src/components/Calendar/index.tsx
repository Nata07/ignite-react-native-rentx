import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Calendar as CalendarCustom,
  LocaleConfig,
  DateCallbackHandler
} from 'react-native-calendars'
import { useTheme } from 'styled-components';

import { ptBR } from './localeConfig'; 

import { generateInterval } from './generateInterval'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br';

// export type DateCallBackHandler = (data: DateObject) => void;

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  }
}

interface CalendarProps {
  markedDates: MarkedDateProps;
  onDayPress: DateCallbackHandler;
}

interface RentalPeriodDates {
  startFormat: string;
  endFormat: string;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CalendarCustom 
      renderArrow={(direction) => 
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction == 'left' ? 'chevron-left': 'chevron-right'}
        />
      }

      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}

      theme= {{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}

      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export {
  Calendar,
  MarkedDateProps,
  DayProps,
  generateInterval,
  RentalPeriodDates
}