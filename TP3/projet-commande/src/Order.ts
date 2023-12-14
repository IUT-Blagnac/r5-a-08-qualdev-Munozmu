import { PaymentMethodEnum } from "./PaymentMethodEnum";
import { Product } from "./Product";

export class Order {

    private products: Product[];
    private paymentMethod: PaymentMethodEnum;
    private shippingAddress: string;

    constructor() {
        this.products = [];
        this.paymentMethod = PaymentMethodEnum.CREDIT_CARD;
        this.shippingAddress = "";
    }


    addProduct(product: Product) {
        this.products.push(product);
    }

    set orderPaymentMethod(paymentMethod: PaymentMethodEnum) {
        this.paymentMethod = paymentMethod;
    }

    set orderShippingAddress(address: string) {
        this.shippingAddress = address;
    }

    get orderProducts(): Product[] {
        return this.products;
    }


    get totalPrice() {
        let total = 0;
        this.products.forEach(product => {
            total += product.productPrice;
        });
        return total;
    }

    get orderPaymentMethod(): PaymentMethodEnum {
        return this.paymentMethod;
    }

    get orderShippingAddress(): string {
        return this.shippingAddress;
    }


    validateOrder(): boolean {
        if (this.products.length === 0) {
            return false;
        }
        if (this.shippingAddress === "") {
            return false;
        }
        return true;
    }
}