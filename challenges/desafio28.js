const NAME = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
    {
        empresa: NAME,
        totalVoosDomesticos: db.voos.find(
            {
                "empresa.nome": "LATAM AIRLINES BRASIL",
                natureza: "Doméstica",
            },
        ).count(),
    },
);

db.resumoVoos.findOne({ empresa: "LATAM AIRLINES BRASIL" }, { id: 0 });
