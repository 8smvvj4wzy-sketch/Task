# Check-list

Petite application de check-list personnelle : une tâche, une priorité, une échéance facultative, une case à cocher.

Un seul fichier, aucune dépendance, aucun serveur.

## Fonctionnement

- Ajout d'une tâche avec priorité (haute, moyenne, basse) et échéance facultative
- Tri automatique par priorité, puis par échéance la plus proche ; les tâches faites passent en bas
- Modification directe : clic sur le texte pour le corriger, clic sur la pastille pour changer la priorité, champ de date modifiable
- Signalement des échéances proches ou dépassées
- Bouton pour masquer ou supprimer les tâches terminées

## Utilisation

Ouvrir `index.html` dans un navigateur.

Pour l'utiliser comme une application de bureau sur Mac : ouvrir le fichier dans Safari, puis **Fichier → Ajouter au Dock**. La check-list s'ouvre alors dans sa propre fenêtre.

## Données

Tout est enregistré localement dans le navigateur (`localStorage`). Rien n'est envoyé sur le réseau, rien n'est partagé entre appareils. Vider les données du navigateur efface la liste.

## Publication

Le dépôt peut être publié tel quel avec GitHub Pages : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)`**. L'adresse publiée sert la même page.
