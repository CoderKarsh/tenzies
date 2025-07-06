export default function Die ({dieObj, handleToggle}) {
    return (
    <button type="submit" className={`die-btn ${dieObj.isHeld ? "held-btn" : null}` } id={dieObj.id} onClick={handleToggle}>
        {dieObj.value}
    </button>)
}