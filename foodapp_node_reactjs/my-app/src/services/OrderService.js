export async function getAllOrders() {

    const response = await fetch('/api/orders');
    return await response.json();
}

export async function createOrder(data) {
    const response = await fetch(`/api/order`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({order: data})
      })
    return await response.json();
}
