import { ReactElement, useContext, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ApiContextProvider, ApiContext } from "../";
import { Button } from '../';


function App() {

    return (
        <>
            <ApiContextProvider>
                <VitePreview />
            </ApiContextProvider>
        </>
    )
}

function VitePreview() {

    const apiContext = useContext(ApiContext);
    const [count, setCount] = useState(0);

    return (
        <>
            <ApiContextProvider>
                <div className='container'>
                    <div>
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="logo" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </div>
                    <h1>Vite + React</h1>
                    <div className="card">
                        <Button onClick={() => setCount((count) => count + 1)}>
                            <span>count is {count}</span>
                        </Button>
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                    </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
                </div>
            </ApiContextProvider>
        </>
    );
}

export default App
