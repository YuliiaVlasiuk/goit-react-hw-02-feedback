export const Counter = ({addGoodFellback,addNeutralFellback,addBadFellback}) => {
    return (
  <div>

    <h2> Please leave feelback</h2>
    <button type="button" onClick={addGoodFellback}>
      Good
    </button>
    <button type="button" onClick= {addNeutralFellback}>
      Neutral
    </button>
    <button type="button" onClick={addBadFellback}>
      Bad
    </button>
  </div>
    )
}