import './App.css'
import * as PT from "prop-types"

function App() {
    return <div>
        <ProgressBar styleWidth="0%"/>
        <ProgressBar styleWidth="25%"/>
        <ProgressBar styleWidth="50%"/>
        <ProgressBar styleWidth="75%"/>
        <ProgressBar styleWidth="100%"/>
<ProgressBar/>
    </div>

}

ProgressBar.propTypes = {
 styleWidth: PT.oneOf(["0%","25%","50%", "75%", "100%"]).isRequired
}

function ProgressBar({styleWidth}) {
    return <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: `${styleWidth}`}} aria-valuenow="25"
             aria-valuemin="0"
             aria-valuemax="100"></div>

        {styleWidth}
    </div>
}

export default App
