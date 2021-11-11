import {Text} from 'native-base';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {LineChart, BarChart, PieChart} from 'react-native-chart-kit';
import {backgroundColor} from 'styled-system';
import color from '../../color/color';
interface Props {}

const bgcolor = color.light;

const NormalChart = (props: Props) => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const data = {
    labels: ['Pending Approval', 'Run'], // optional
    data: [0.6, 0],
  };

  const dataProgress = [
    {
      name: 'Rejected',
      population: 7,
      color: 'rgba(231, 65, 43, 0.959)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Approved',
      population: 28,
      color: bgcolor.available,
      legenFontColor: '#7F7F7F',
      legendFontSize: 15,
    },

    {
      name: 'Moscow',
      population: 16,
      color: 'rgba(60,255,158,0.5)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: 'rgba(50,255,158,1)',
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: 'rgba(14,255,158,1)',
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: 'rgba(14,255,158,1)',
    }, // optional
  };
  return (
    <View style={styles.container}>
      <Text
        textAlign={'center'}
        justifyContent="center"
        fontFamily={'Dongle'}
        fontWeight={'400'}
        fontSize={26}>
        Yearly Sales
      </Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [7.5, 7.6, 7.3, 8, 8, 9],
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <Text
        textAlign={'center'}
        justifyContent="center"
        fontFamily={'Dongle'}
        fontWeight={'400'}
        fontSize={26}>
        User traffic
      </Text>

      <BarChart
        style={styles.graphStyle}
        data={barData}
        width={Dimensions.get('window').width - 30} // from react-native
        height={220}
        yAxisLabel={'$'}
        chartConfig={chartConfig}
      />

      <Text
        textAlign={'center'}
        justifyContent="center"
        fontFamily={'Dongle'}
        fontWeight={'400'}
        fontSize={26}>
        User traffic
      </Text>

      <PieChart
        data={dataProgress}
        width={Dimensions.get('window').width - 30} // from react-native
        height={220}
        chartConfig={chartConfig}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        center={[10, 8]}
        absolute
      />
    </View>
  );
};

export default NormalChart;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    alignSelf: 'center',
  },
  graphStyle: {
    overflow: 'hidden',
    borderRadius: 15,
  },
});
