class Turtle{
    constructor(id, name, species, price, patterns){
        this.id = id;
        this.name = name;
        this.species = species;
        this.price = +price;
        this.patterns = patterns !== "[]" ? patterns : [];
    }
}

class SnappingTurtle extends Turtle{
    constructor (id, name, species, price, patterns, size, weight){
        super(id, name, species, price, patterns)
        this.size = +size;
        this.weight = +weight;
    }
}

class Tortoise extends Turtle{
    constructor (id, name, species, price, patterns, size, weight){
        super(id, name, species, price, patterns)
        this.size = +size;
        this.weight = +weight;
    }
}

class Terapins extends Turtle{
    constructor (id, name, species, price, patterns, size, weight){
        super(id, name, species, price, patterns)
        this.size = +size;
        this.weight = +weight;
    }
}

module.exports = {SnappingTurtle, Tortoise, Terapins}