import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

import { useTheme } from '../hooks/useTheme';

function FlatListHeaderComponent() {
  const { currentTheme } = useTheme();

  return (
    <View>
      <Text style={[
        styles.header,
        {
          color: currentTheme.title
        }
      ]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const { currentTheme } = useTheme();
  
  return (
    <View style={{
      backgroundColor: currentTheme.background,
      height: '90%',
      top: -25,
    }}>
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.7}
              onLongPress={() => onLongPress(item.id)}
              onPress={() => onPress(item.id)}
              style={[
                item.done
                  ? styles.taskButtonDone
                  : styles.taskButton,
                {
                  backgroundColor: item.done
                    ? currentTheme.backgroundDone
                    : 'transparent'
                }
              ]}
            >
              <View 
                testID={`marker-${index}`}
                style={[
                  item.done
                    ? styles.taskMarkerDone
                    : styles.taskMarker,
                  {
                    borderColor: currentTheme.title,
                    backgroundColor: item.done
                      ? currentTheme.markColor
                      : 'transparent'
                  }
                ]}
              />
              <Text 
                style={[
                  item.done
                    ? styles.taskTextDone
                    : {},
                  {
                    color: item.done
                      ? currentTheme.titleDone
                      : currentTheme.title
                  }
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
        ListHeaderComponent={<FlatListHeaderComponent />}
        ListHeaderComponentStyle={{
          marginBottom: 20
        }}
        style={{
          marginHorizontal: 24,
          marginTop: 54,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})