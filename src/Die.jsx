export default function Die ({dieObj, handleClick}) {
    return (
    <button type="submit" className={`die-btn ${dieObj.isHeld ? "held-btn" : null}` } id={dieObj.id} onClick={handleClick}>
        {dieObj.value}
    </button>)
}