import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TextInput, Box, Icon} from '@root/components/index';
import fetchInitialData from '@root/core/redux/thunks/fetch_initial_data';
import {selectPeopleAll, addPerson} from '@root/core/redux/people_slice';
import '@root/app/app.scss';

// import Logo from '@root/media/images/logo_white.png';

const defaults = {
  age: 0,
  music: 'pop',
  color: 'gray',
};

const App = () => {
  // Local
  const [value, setValue] = useState('');
  // Redux
  const dispatch = useDispatch();
  const people = useSelector(selectPeopleAll);
  const handleClick = () =>
    dispatch(
      addPerson({
        name: value,
        ...defaults,
      })
    );

  // Lifecycle
  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);

  return (
    <div className="App">
      <TextInput
        placeholder="Type something"
        value={value}
        onChange={({target: {value}}) => setValue(value)}
      />
      <Button primary onClick={handleClick}>
        Update
      </Button>
      <Icon icon="fa-facebook-square" />
      {people.map((person) => (
        <Box
          key={person.name}
          p={1}
          color="light"
          style={{border: 'solid 1px red'}}
        >
          {person.name}
        </Box>
      ))}
    </div>
  );
};

export default App;
