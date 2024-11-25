import React from 'react';
import {Deck} from 'spectacle';
import DefaultTemplate from './templates/Default';
import Introduction from './lectures/ajax/Introduction';
import HTTP from './lectures/ajax/HTTP';
import AJAX from './lectures/ajax/AJAX';
import CORS from './lectures/ajax/CORS';
import LocalStorages from './lectures/ajax/LocalStorages';
import Polyfill from './lectures/ajax/Polyfill';
import Modules from './lectures/ajax/Modules';
import Homework from './lectures/ajax/Homework';
import Thanks from './lectures/ajax/Thanks';


function App() {
    return (
        <Deck template={DefaultTemplate}>
            <Introduction />
            <HTTP />
            <AJAX />
            <CORS />
            <LocalStorages />
            <Polyfill />
            <Modules />
            <Homework />
            <Thanks />
        </Deck>
    );
}

export default App;
