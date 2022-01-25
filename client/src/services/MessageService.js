
export async function getMessages() {
  const response = await fetch('/api/messages');
  return await response.json();
}

export async function postMessage(data) {
  const response = await fetch(`/api/message`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: data})
    })
  return await response.json();
}