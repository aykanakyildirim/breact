import requests
print(requests.get("http://localhost:8000/items/0").json())
print(requests.get("http://localhost:8000/items?name=Nails").json())

print(
    requests.post(
        "http://localhost:8000/",
        json={"name": "Screwdriver", "price": 9.99, "count": 10, "id": 4, "category": "TOOLS"}
    ).json()
)


