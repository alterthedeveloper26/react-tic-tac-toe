export function Log({logs}){

  return (
    <ol>
      {logs.map(log => (<li>{log}</li>))}
    </ol>
  )
}