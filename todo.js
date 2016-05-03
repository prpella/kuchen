var Kuchen = {
    Rezept: 3,
    Einkaufen: {
        Supermarkt: {
            Mehl: 1,
            Zucker: 1
        },
        Bauernhof: {
            Eier: 1,
            Milch: {
                Eimer: 1,
                Kuh: 1,
                Melken: 2
            },
        },
    },
    "Rühren": 2,
    "Teig kneten": 3
};

// Returns whatever time unit is used in the data model
function calcDuration(todoNode) {
    if(typeof(todoNode) == "number"){
        return todoNode;
    }
}
if(calcDuration(2) !== 2) {
    console.log("Denkste Puppe");
}

