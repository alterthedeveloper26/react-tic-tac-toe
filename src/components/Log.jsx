export function Log({ logs }) {
  return (
    <ol id="log">
      {logs.map((log) => (
        <li key={`${log.coordinate.x}${log.coordinate.y}`}>
          Player {log.symbol} selected {log.coordinate.x}, {log.coordinate.y}
        </li>
      ))}
    </ol>
  )
}
