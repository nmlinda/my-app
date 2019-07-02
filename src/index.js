import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App} from "./App";
import * as serviceWorker from './serviceWorker';
import ApolloClient, { gql } from "apollo-boost";

import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    uri: "http://qall-video-payment-qs.localhost/api/graphql",
    cache: new InMemoryCache(),
});
client
  .query({
    query: gql`
    query($countryCode: String!){
      activePricingPlans(countryCode: $countryCode){
        durationEndDate
        id
        name
        price
        recommended
        features {
          name
        }
      }
    }
    `,
  variables: {
    countryCode: "ID"
  }
  })
  .then(res => console.log('data', res.data.activePricingPlans))
  .catch(({ message })=> {
    console.log(message)
  });

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
serviceWorker.unregister();