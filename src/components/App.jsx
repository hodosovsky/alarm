// import styled from 'styled-components';
// import { Button } from './Button/Button';
// import { AiFillAndroid, AiFillCar } from 'react-icons/ai';
// import { RotatingLines } from 'react-loader-spinner';
// import { Box } from './Box/Box';
// import { useGetAlarmsQuery } from 'redux/alarmSlice';

import Ukraine from '@svg-maps/ukraine';

import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import { useGetAlarmsQuery } from 'redux/alarmSlice';
import { regIdToName } from 'regIdToName.js/regIdToName';

// const Text = styled.p`
//   /* color: ${p => p.theme.colors.primary}; */
//   /* font-family: ${p => p.theme.fonts.monospace}; */
//   /* font-size: ${p => p.theme.fontSizes.xl}; */
//   /* font-weight: ${p => p.theme.fontWeight.normal}; */

//   border: ${p => p.theme.borders.mormal};
//   /* padding: ${p => p.theme.space[3]}; */
// `;

export const App = () => {
  const { data } = useGetAlarmsQuery('alerts/get', {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  console.log('data:', data);
  console.log('Ukraine:', Ukraine);
  const dataStr = data?.map(el => regIdToName(el.regionId));
  console.log('dataStr:', dataStr);

  return (
    <SVGMap
      map={Ukraine}
      locationClassName={el =>
        dataStr?.includes(el.id) ? 'alarm' : 'svg-map__location'
      }
    />
  );
};
