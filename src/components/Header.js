import React from 'react';

function Header({name}) {
console.log("Name is :",name);

return ( <header>
<h1>{name}</h1>
    </header> )

}

export default Header;