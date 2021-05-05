import './modeButton.css'

export function ModeButton ({mode, setMode}) {

    return(
        <div className = "btn-container">
            <button 
                className = {`mode-btn ${mode ? 'active-btn' : ''}`}
                onClick = {() => setMode(true)}
                >Edit
            </button>
            <button 
                className = {`mode-btn ${mode ? '' : 'active-btn'}`}
                onClick = {() => setMode(false)}
                >Preview
            </button>
        </div>

    )
}

export default ModeButton 