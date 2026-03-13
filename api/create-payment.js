export default async function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ error: "Method not allowed" });
}

const body = req.body;

try {

const response = await fetch("https://www.asaas.com/api/v3/payments", {
method: "POST",
headers: {
"Content-Type": "application/json",
"access_token": "SUA_API_KEY_ASAAS"
},
body: JSON.stringify({
billingType: "UNDEFINED",
value: body.total / 100,
dueDate: "2026-12-31",
description: "Pedido Sossella Joias"
})
});

const data = await response.json();

res.status(200).json({
invoiceUrl: data.invoiceUrl
});

} catch (error) {

res.status(500).json({
error: "Erro ao criar pagamento"
});

}

}
