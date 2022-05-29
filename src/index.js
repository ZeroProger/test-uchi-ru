import React, {createContext} from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import './Css/index.css';
import CatsStore from "../src/Store/CatsStore"
import App from './App';

export const Context = createContext(null)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Context.Provider value={
        {
            catsStore: new CatsStore(),
        }
    }>
        <App />
    </Context.Provider>
)