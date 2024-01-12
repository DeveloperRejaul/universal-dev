import { Protected } from '@components';
import React from 'react';
import { userRole } from 'src/constants/constants';
import Dashboard from 'src/features/dashboard/screens/Index';

export default ()=> (
  <Protected role={[userRole.ADMIN, userRole.MODERATOR]}>
    <Dashboard />
  </Protected>
) ;