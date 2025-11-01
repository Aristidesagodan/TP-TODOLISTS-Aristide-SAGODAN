# TD — Première application : Todolist

## Introduction

La **todolist** (ou gestionnaire de tâches) est un outil incontournable pour s’organiser :  
elle permet de planifier des actions, de suivre leur avancement, et de gagner en clarté dans son travail.  

Le principe reste simple : il s’agit de lister des éléments (courses, idées, tâches de projet, etc.) et de marquer ceux qui sont réalisés.  

Dans ce TD, vous allez concevoir et développer **votre première application complète**, en suivant toutes les étapes de la démarche de conception, depuis l’expression du besoin jusqu’à une première version fonctionnelle.

---

## Objectifs pédagogiques

- Réviser les bases de l’intégration **HTML / CSS**.  
- Manipuler le **DOM** en JavaScript.  
- Pratiquer la manipulation de **tableaux** et **objets** en JavaScript.  
- Découvrir la démarche de **conception d’une application** web.  

---

## Expression du besoin

Nous avons besoin d’un outil permettant :

- de **créer** autant de tâches que nécessaire,  
- de **visualiser** la liste de ces tâches,  
- de **modifier l’état** d’une tâche : `non réalisée` → `réalisée`.  

Chaque tâche sera définie par :  

- un **titre** (obligatoire),  
- une **description** (optionnelle),  
- un **état** (par défaut : *non réalisée*).  

---

## Rendu attendu

Une application :  

- **ergonomique**, utilisable confortablement sur **desktop** et **mobile**,  
- **fonctionnelle**, répondant aux besoins exprimés ci-dessus.  

---

## Méthodologie

### Étape 1 — Analyse et conception

- Analysez le besoin.  
- Identifiez les **composants** de l’application.  
  - Comment l’utilisateur saisira-t-il une tâche ?  
  - Comment la liste sera-t-elle affichée ?  
  - Comment représentera-t-on l’état d’une tâche ?  

👉 Cette étape est essentielle pour poser les bases de votre application.

---

### Étape 2 — Structure HTML

- Créez le **markup HTML** pour les différents composants.  
- Utilisez les balises les plus pertinentes (formulaire, liste, boutons, etc.).  

> **Remarque :**  
> Pensez à tous les cas possibles :  
> - tâches non réalisées,  
> - tâches réalisées,  
> - aucune tâche dans la liste (afficher un message informatif).

---

### Étape 3 — Styles CSS

- Stylisez l’interface pour la rendre **ergonomique**.  
- Pensez à l’**affichage responsive** (desktop / mobile).  
- Stylisez tous les cas possibles, même si l’application n’est pas encore interactive.  

👉 À ce stade, votre application est **jolie mais encore statique**.

---

### Étape 4 — Interactivité avec JavaScript

- Ajoutez la logique pour rendre l’application **interactive**.  
- Point de départ : la création d’une tâche.  
- Afficher les tâches
- Et, implémentez la modification de l’état d’une tâche.  

---

### Étape 5 — Validation et amélioration

- Vérifiez : votre application répond-elle au **besoin initial** ?  
- Quelles fonctionnalités pourraient améliorer l’usage ?  

👉 Exemples de questions à se poser :  
- Peut-on supprimer une tâche ?  
- Peut-on modifier une tâche ?  
- Que se passe-t-il si la liste devient très longue ?

---

## Notes pour l’apprenant

- Vous allez naturellement rencontrer la problématique de la **persistance des données** (que devient la liste au rechargement de la page ?).  
- Prenez aussi un temps pour réfléchir à la **lisibilité** et à la **factorisation** de votre code JavaScript.  

---

## Bonus (pour aller plus loin)

- Afficher les descriptions des tâches sous forme d’**accordéon**.  
- **Supprimer** définitivement une tâche.  
- **Modifier** une tâche existante.  
- Associer une information de **date/heure** à chaque tâche.  
- Associer une catégorie de tâche
- Persister les données dans le **localStorage**.  (veille technique)
