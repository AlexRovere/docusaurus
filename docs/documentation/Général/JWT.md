---
description: Les tokens JWT
---

# JWT

Avantages :

Moins d'échanges de login / mot de passe entre le client et l'api

Workflow : 

- Client requête l'api de login avec login / mdp
- Si c'est bon l'api génère un token JWT 
- L'api retourne le jeton au client 
- à chaque requête le client envoi le token
- L'api vérifie si le token est valide
- Si c'est le cas, l'accès est autorisé sinon retour au login

JWT (JSON Web Token)

3 parties : 

- Header -> Type de jeton et algo de chiffrement
- Payload -> clé / valeurs (3 types différents : enregistrées, privées ou publiques)
- Signature -> encodage base 64 (Header + Payload)

