const withdrawalData = {
    getWithdrawalData() {
        return [
            {
                "_id": "640f5caf78fd73b40d217e02",
                "amount": 3000,
                "office": {
                    "_id": "6342c8cb413b5bf1722e33f5",
                    "name": "مكتب حرزالله",
                    "address": "غزة-شارع الشهداء، مقابل برج فلسطين",
                    "fees": 1
                },
                "typeWithdraw": "cash",
                "status": "pending",
                "recipient": {
                    "_id": "640f135aee0733bd4a2a8d4e",
                    "name": "Heba Skhail Recipient 1",
                    "mobile": "+970597039224"
                },
                "createdAt": "2023-03-13T17:26:07.859Z",
                "updatedAt": "2023-03-13T17:26:07.859Z",
                "history": [
                    {
                        "_id": "6410cbac87086b00f03d5f91",
                        "type": "withdraw",
                        "action": "confirm",
                        "status": "completed",
                        "createdBy": "63e104aa8bba2cb3f754d7db",
                        "createdAt": "2023-03-14T19:31:56.301Z",
                        "updatedAt": "2023-03-14T19:31:56.301Z"
                    },
                    {
                        "_id": "6410cb7f87086b00f03d5f85",
                        "type": "withdraw",
                        "action": "approve",
                        "status": "sent",
                        "createdBy": "637237329ef107f214a23fc5",
                        "createdAt": "2023-03-14T19:31:11.397Z",
                        "updatedAt": "2023-03-14T19:31:11.397Z"
                    },
                    {
                        "_id": "6410cb6487086b00f03d5f4a",
                        "type": "withdraw",
                        "action": "request bank",
                        "status": "pending",
                        "createdBy": "63e104aa8bba2cb3f754d7db",
                        "createdAt": "2023-03-14T19:30:44.369Z",
                        "updatedAt": "2023-03-14T19:30:44.369Z"
                    }
                ]
            }
        ]
    },
    getTable() {
        return Promise.resolve(this.getWithdrawalData());
    },
}
export default withdrawalData ;
