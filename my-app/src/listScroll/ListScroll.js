import React from 'react';
const list = [
    {
        id: 'a',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'b',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'c',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'd',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },

    {
        id: 'e',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'f',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'g',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'h',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'i',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'j',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    }, {
        id: 'k',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'l',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'M',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'N',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'o',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'p',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
    {
        id: 'q',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
    },
    {
        id: 'r',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
    },
]

// Out Side the COmponent scrool
const ListScroll = () => {
  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
            >
              Scroll Item {item.id} Into View
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {list.map(item => (
          <li
            key={item.id}
            ref={refs[item.id]}
            style={{ height: '250px', border: '1px solid black' }}
          >
            <div>{item.id}</div>
            <div>{item.firstname}</div>
            <div>{item.lastname}</div>
            <div>{item.year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Inside the compoennet 
/*const List = () => (
  <ul>
    {list.map(item => {
      const ref = React.createRef();
      const handleClick = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      return (
        <li
          key={item.id}
          ref={ref}
          style={{ height: '250px', border: '1px solid black' }}
        >
          <div>{item.id}</div>
          <div>{item.firstname}</div>
          <div>{item.lastname}</div>
          <div>{item.year}</div>
          <button type="button" onClick={handleClick}>
            Scroll Into View
          </button>
        </li>
      );
    })}
  </ul>
);*/
export default ListScroll;