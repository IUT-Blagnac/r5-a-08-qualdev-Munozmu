import { expect } from 'chai';
import { Order } from '../src/Order';
import { Product } from '../src/Product';
import { binding, given, then, when } from 'cucumber-tsflow';


@binding()
class CommandeSteps {

    private commande: Order;

    constructor() {
        this.commande = new Order();
    }

    @given(/le client ajoute un produit dans le panier/)
    public givenLeClientAjouteUnProduitDansLePanier(): void {
        this.commande.addProduct(new Product("Produit 1", 10));
    }

    @when(/le client renseigne son adresse/)
    public whenLeClientRenseigneSonAdresse(): void {
        this.commande.orderShippingAddress = "Adresse de livraison";
    }

    @then(/la commande devrait être validée avec succès/)
    public thenLaCommandeDevraitEtreValideeAvecSucces(): void {
        const validationResult = this.commande.validateOrder();
        expect(validationResult).to.be.true;
    }

}

export = CommandeSteps;
