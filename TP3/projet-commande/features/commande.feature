Feature: Validation du système de passage de commande

  Scenario: Envoi d'une commande valide
    Given le client ajoute un produit dans le panier
    When le client renseigne son adresse
    Then la commande devrait être validée avec succès
