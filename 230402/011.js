// JSON generator
// https://json-generator.com/

let 회원정보 = [
    {
        "_id": "642a62252a34c21101359329",
        "index": 0,
        "age": 27,
        "eyeColor": "blue",
        "name": "Vincent Ryan",
        "gender": "male",
        "company": "BUZZWORKS"
    },
    {
        "_id": "642a6225762a9f49de85bde3",
        "index": 1,
        "age": 39,
        "eyeColor": "green",
        "name": "Jeannie Kline",
        "gender": "female",
        "company": "ANARCO"
    },
    {
        "_id": "642a622527f512ec682bc2a0",
        "index": 2,
        "age": 27,
        "eyeColor": "green",
        "name": "Aurelia Collier",
        "gender": "female",
        "company": "COMVEX"
    },
    {
        "_id": "642a6225c75018903090517b",
        "index": 3,
        "age": 21,
        "eyeColor": "blue",
        "name": "Lorena Swanson",
        "gender": "female",
        "company": "MAGMINA"
    },
    {
        "_id": "642a6225a2ff97999cfc12e9",
        "index": 4,
        "age": 39,
        "eyeColor": "green",
        "name": "Melva Mcfadden",
        "gender": "female",
        "company": "REVERSUS"
    },
    {
        "_id": "642a62256f3f05c0f0171053",
        "index": 5,
        "age": 39,
        "eyeColor": "blue",
        "name": "Sue Nieves",
        "gender": "female",
        "company": "ZILENCIO"
    },
    {
        "_id": "642a622590320596ac009153",
        "index": 6,
        "age": 20,
        "eyeColor": "blue",
        "name": "Hattie Fuentes",
        "gender": "female",
        "company": "DRAGBOT"
    }
]

회원정보[0]
회원정보[0]['name']
회원정보[1]['company']

let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6
console.log(나이평균)