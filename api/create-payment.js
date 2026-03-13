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
"access_token": "$aact_prod_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjNmZmIyM2Y4LTY4M2QtNDYzYy1hMjEzLTc4MmFlYTc2OWEzNTo6JGFhY2hfZDgyY2Q1YzEtMGRjYS00MjNhLTk0MTQtMjBjZWU5OTM5YTFl"
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
