class Item {
    constructor(brand, model, date, typeId, obvs) {
        this.brand = brand;
        this.model = model;
        this.type = date;
        this.acquicitionDate = new Date();
        this.obvs = obvs;
    }

    getBrand() { return this.brand; }

    getModel() { return this.model; }

    getType() { return this.type; }

    getAcquicitionDate() { return this.acquicitionDate;}

    getObvs() { return this.obvs; }

    setBrand(brand) { this.brand = brand; }

    setModel(model) { this.model = model; }

    setType(type) { this.type = type; }

    setAcquicitionDate(date) { this.acquicitionDate = date;}

    setObvs(obvs) { this.obvs = obvs; }
}

