import React from "react";
import ReactDOM from "react-dom";
import   "./index.css";
import App from "./App";
import {ContextProvider} from "./context/ContextProvider";

ReactDOM.render(<ContextProvider>
<App/>
</ContextProvider>,document.getElementById('root')
);//it is use to hook to our react appln