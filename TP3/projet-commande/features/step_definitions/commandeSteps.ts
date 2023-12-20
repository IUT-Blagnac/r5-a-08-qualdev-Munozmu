import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Order } from '../../src/Order';
import { Product } from '../../src/Product';

let commande: Order;
let selectedProduct: Product;

Given('Le client a sélectionné le produit {string}', function (productName: string) {
    selectedProduct = new Product(productName, 10);
    commande = new Order();
    commande.addProduct(selectedProduct);
});

When('the client validates his order', function () {
    commande.orderShippingAddress = "Adresse de livraison";
});

Then('La commande devrait être validée avec succès', function () {
    const validationResult = commande.validateOrder();
    expect(validationResult).to.be.true;
});
