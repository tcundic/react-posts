import React, { useEffect } from 'react';

const Header = ({ greeting }: { greeting: string }) => {

  useEffect(() => console.log(`${greeting} ${Header.name}`));

  return (
    <div>
      Header
    </div>
  );
};

export default Header;
