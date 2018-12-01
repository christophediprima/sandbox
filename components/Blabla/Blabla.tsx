import * as React from 'react';
export default ({ name, description }: { name: string; description?: string }) => (
  <div>
    {name} - {description}
  </div>
);
