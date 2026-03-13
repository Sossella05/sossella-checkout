export default async function handler(req, res) {

const body = JSON.parse(req.body);

const response = await fetch("https://api.asaas.com/v3/payments", {
method: "POST",
headers: {
"Content-Type": "application/json",
"access_token": "$aact_prod_000MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjNmZmIyM2Y4LTY4M2QtNDYzYy1hMjEzLTc4MmFlYTc2OWEzNTo6JGFhY2hfZDgyY2Q1YzEtMGRjYS00MjNhLTk0MTQtMjBjZWU5OTM5YTFl"
},
body: JSON.stringify({
billingType: "UNDEFINED",
value: body.value,
description: body.description,
dueDate: "2026-12-31"
})
});

const data = await response.json();

res.status(200).json({
checkout: data.invoiceUrl
});

}