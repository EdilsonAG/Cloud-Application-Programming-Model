export class Product {
    private _id?: number | undefined;
    private _name?: String | undefined;
    private _description?: String | undefined;
    private _price?: number | undefined;
    private _category?: String | undefined;
    private _quantity?: number | undefined;
    private _image?: String | undefined;


    public get id(): number | undefined {
        return this._id;
    }
    public set id(value: number | undefined) {
        this._id = value;
    }

    public get name(): String | undefined {
        return this._name;
    }
    public set name(value: String | undefined) {
        this._name = value;
    }


    public get description(): String | undefined {
        return this._description;
    }
    public set description(value: String | undefined) {
        this._description = value;
    }

    public get price(): number | undefined {
        return this._price;
    }
    public set price(value: number | undefined) {
        this._price = value;
    }


    public get category(): String | undefined {
        return this._category;
    }
    public set category(value: String | undefined) {
        this._category = value;
    }

    public get quantity(): number | undefined {
        return this._quantity;
    }
    public set quantity(value: number | undefined) {
        this._quantity = value;
    }


    public get image(): String | undefined {
        return this._image;
    }
    public set image(value: String | undefined) {
        this._image = value;
    }
}