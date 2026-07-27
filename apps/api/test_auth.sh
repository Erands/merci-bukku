TOKEN=$(curl -s -X POST http://localhost:8000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email":"demo@mercibokku.com","password":"demo"}' | python3 -c "import sys,json;print(json.load(sys.stdin)['access_token'])")

echo $TOKEN
