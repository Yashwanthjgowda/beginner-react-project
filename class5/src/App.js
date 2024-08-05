import './App.css';
import { Fragment } from "react";
import Inline from './components/Inline-style/Inline';
import ObjectStyle1 from './components/object-style/ObjectStyle1';
import ObjectStyle2 from './components/object-style/ObjectStyle2';
import StyledComponent from './components/styled.component/StyledComponent';

function App() {
return ( 
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-4 text-success text-center">
                        STYLES IN REACT
                    </h1>
                    <h2 className="globalClass">
                        1) INDEX.CSS (GLOBAL CSS FILE : USING CSS MODULE)
                    </h2>
                    <h2 className="appClass">
                        2) APP.CSS (APP CSS FILE : USING PARENT COMPONENT CSS)
                    </h2>
                </div>
            </div>
        </div>
        
        <Inline />
        <ObjectStyle1 />
        <ObjectStyle2 />
        <StyledComponent />
    </Fragment>
);
}

export default App

