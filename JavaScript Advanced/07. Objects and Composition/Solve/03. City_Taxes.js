function cityTaxes(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += Math.floor(this.population * (this.taxRate / 100));
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        },
    };
}
console.log(city = cityTaxes('Tortuga', 7000, 15000));