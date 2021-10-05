const NAME = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne(
    {
        empresa: NAME,
        totalVoosDomesticos: db.voos.find(
            {
                "empresa.nome": NAME,
                natureza: "Doméstica",
            },
        ).count(),
    },
);

db.resumoVoos.findOne({ empresa: NAME }, { id: 0 });
