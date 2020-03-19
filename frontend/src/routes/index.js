import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Deliverers from '~/pages/Deliverers';
import DeliverersRegistry from '~/pages/DeliverersRegistry';
import DeliverersUpdate from '~/pages/DeliverersUpdate';
import Login from '~/pages/Login';
import Orders from '~/pages/Orders';
import OrderRegistry from '~/pages/OrderRegistry';
import OrderUpdate from '~/pages/OrderUpdate';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';
import RecipientRegistry from '~/pages/RecipientRegistry';
import RecipientsUpdate from '~/pages/RecipientsUpdate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/deliverers" component={Deliverers} isPrivate />
      <Route
        path="/deliverersregistry"
        component={DeliverersRegistry}
        isPrivate
      />
      <Route path="/deliverersupdate" component={DeliverersUpdate} isPrivate />
      <Route path="/orders" component={Orders} isPrivate />
      <Route path="/orderregistry" component={OrderRegistry} isPrivate />
      <Route path="/orderupdate" component={OrderUpdate} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route
        path="/recipientregistry"
        component={RecipientRegistry}
        isPrivate
      />
      <Route path="/recipientsupdate" component={RecipientsUpdate} isPrivate />
    </Switch>
  );
}
