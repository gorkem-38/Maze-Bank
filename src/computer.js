import AccessoryPc from "./accessory";

class Computer extends AccessoryPc {
    constructor(hardDisk, gpu, cpu, category) {
        super(category);
        this.hardDisk = hardDisk;
        this.gpu = gpu;
        this.cpu = cpu;
    };

    findCategory() {
        let result = this.category;
        try {
            switch (result) {
                case "keyboard":
                    return `${super.keyboard()}`;
                case "écran" :
                    return `${super.screens()}`;
                default:
                    return "erreur";
            }
        } catch (error) {
            console.error(error);
        };
    };
};

export default Computer;