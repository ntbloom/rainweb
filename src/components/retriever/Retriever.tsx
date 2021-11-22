// import { Component, useRef, useState } from 'react';
// import { UrlBuilder } from '../../lib/data/urlBuilder';
// import {
//   //   AssetStatus,
//   AssetStatusProps,
// } from '../dashboard/AssetStatus';
// import { CurrentTempProps } from '../dashboard/CurrentTemp';
// import { LastRainProps } from '../dashboard/LastRain';
// import { RainSinceProps } from '../dashboard/RainSince';

// /* This component fetches the data and renders the appropriate child */

// // available components that render data taken from API
// type dataProps =
//   | AssetStatusProps
//   | CurrentTempProps
//   | RainSinceProps
//   | LastRainProps;

// interface RetreiverProps {
//   url: string;
//   //   asset?: assetType;
//   child(componentProps: dataProps): JSX.Element;
// }

// const Retriever = (props: RetreiverProps): JSX.Element => {
//   const [payload, setPayload] = useState({});
//   const [error, setError] = useState(false);
//   function apiCall() {
//     console.debug(`calling ${props.url} at ${new Date().toISOString()}`);
//     fetch(props.url, UrlBuilder.getInit())
//       .then(async (response) => {
//         const data = await response.json();
//         setPayload(data);
//       })
//       .catch((err) => {
//         console.error(`err=${err}`);
//         setError(true);
//       });
//   }
//   apiCall();
//   //   switch (props.child) {
//   //     case AssetStatus:
//   //        if !asset {

//   //        }

//   //   }
//   return (
//     <p>
//       {payload}
//       {error}
//     </p>
//   );
// };

const Retriever = () => {};

export { Retriever };
