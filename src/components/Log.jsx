function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, i, arr) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          Move of player {turn.player} #{arr.length - i} selected{" "}
          {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
