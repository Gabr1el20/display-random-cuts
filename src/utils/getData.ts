export default function getData(): Promise<{}> {
  return fetch('https://oq5npnwovb.execute-api.us-east-1.amazonaws.com/default/randomSakuga').then(data => data.json())
}