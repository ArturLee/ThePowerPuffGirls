/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Show from './components/Show';
import Episodes from './components/Episodes';
import { showUrl, episodeUrl } from './constants';
import Spinner from './components/Spinner';
import './styles/styles.scss';

function App() {
  const [show, setShow] = useState();
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    axios.get(showUrl).then((data) => {
      setShow(data.data);
    });
    axios.get(episodeUrl).then((data) => {
      setEpisodes(data.data);
    });
  }, []);
  return show && episodes ? (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" children={<Show show={show} episodes={episodes} />} />
          <Route path="/episodes/:id" children={<Episodes show={show} episodes={episodes} />} />
        </Switch>
      </div>
    </BrowserRouter>
  ) : (<Spinner />);
}

export default App;
