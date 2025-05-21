---
description: Les bases de l'ia et du machine learning
---

# Machine learning

Le machine learning est une approche permettant d'entrainer un ordinateur à traiter des données / réponses
afin de créer un modèle prédicitif.

data + algo apprentissage = model

## CRoss Industry Standard Process for Data Mining (CRISP-DM)

- **Compréhension du métier** -> Objectif du projet, identifier les ressources
- **Compréhension des donéees** -> Collecter, décrire, explorer, évaluer les données
- **Préparaton des données** -> Sélection, nettoyage, construction, conversion des données
- **Modélisations** -> Sélection, génération, construction et comparaison des modèles
- **Evaluations** -> Obectifs atteints ? GO / NO GO
- **Déploiement** -> Plan de déploiement, choix technologiques, évaluation du projet


## Les outils

### Outils intégrés 

Accessible aux non développeurs

- **Analyse de données**
- **Création de modèles**
- **Evaluation**

Avantage : facile à prendre en main
Inconvénient : peu personnalisé, rigide

### Outils de développement 

Basé sur des langages de programmation

Avantage : plus de souplesse et de possibilités
Inconvénient : nécessite plus de compétences

## Librairies


### Anaconda

Eco-système Python permettant d'utiliser diverses libraires / applications

### NumPy

NumPy est une libraire de gestion des tableaux

 import numpy as np

- Efficacité: plus rapide que des listes
- Homogénéité: un seul type de données par tableau
- Tableaux multi-dimensionnels

Utilisé pour l'analyse d'image, linéaire, signal ML etc..

``` tab = np.array([1,2,3]) ```
``` tab2d = np.array([[1,2,3], [4,5,,6]]) ```

.shape renvoi le nombre de lignes et colonnes sauf forme de tuple


### Pandas

Panda est utilisé pour manipulé des données (requetage)

 import pandas as pd

- Manipuler
- Analyser
- Interroger
- Sélectionner des sous-ensembles
- Fusionner des jeux de données

Type de données : 

- Series = 1 dimension
- Data frame = 2 dimensions
- Panel = 3 dimensions

``` 
  obj = ['Marie', 'Julien', 'Hervé']
  serie = obj.Series(obj)
```

```
pd.read_csv(url) -> Permet de lire un fichier csv
  .info() -> donner des informations sur le type de données
  .describe() -> Quelques stats prédéfinies`
```

### MatPlotLib

Matplotlib est une libreaire de visualisation 2d pour les tableaux

- Multiplateformes
- Large variété de réprésentations
- Facile à utiliser avec d'autres librairies
- Export facile d'images

 `import matplotlib.pyplot as plt`

### Seaborn

Seaborn est une autre librairie de visualisation

- Basée sur MaptPlotLib
- Pensée pour la visualisation statistique
- Intégrant très bien la gestion de DataFrame (Pandas)
- Synthaxe simplifié

 import seaborn as sns

`sns.scatterplot(data=iris, x="sepal.length", y="sepal.width, hue="variety")`


### Scikit-Learn

Scikit-lear est une librairie pour le machine learning

- Implémentation des algos de ML
- Outils de préparations de données
- Méthode d'évaluations des performances
- Facile à prendre en main

Permet de travailler avec les données de NumPy et Pandas


### En résumé : 

1. NumPy et Pandas pour la manipulation et le stockage des données
2. MatplotLib et Seaborn pour la visualisation
3. Scikit-Learn pour les algos de machine learning

## Travail sur les données

### Caractériser les données

1 ème caractéristique : Discrète ou Continue ?

### Donnée Discrète

- Nombre fini de valeurs possibles
- exemples : code postal, couleur des yeux, ...

### Donnée Continue
- Infinité de valeurs possibles
- Valeurs numériques dans l'ensemble des réels
- Exemples : taille, témpérature, durée, ...

2 ème caractéristique : Qualitative ou Quantitative ?

### Donnée Qualitative

Souvent plus difficile à utiliser, nécessite du travail en amont

- Donnée catégorielle, descriptive, exprimée avec des noms
- Pas de notion de comparison
- Exemple : Nom d'un fruit, prénom, ...

### Donnée Quantitative

- Donnée souvent numérique que l'on peu compter/mesurer
- On peut inféreru un ordre
- Exemple : Age, Note, Taille, ...

### Enregistrement 

- Table : objets avec leurs attributs
- Souvent en CSV
- Exemple : le jeu de donnée Titanic

### Graphe
- Des objets, leurs attributs et les relations entre les objets
- Exemple : Réseau social

### Données Ordonnées 
- Collection d'objets ordonnés les uns par rapport aux autres
- Exemple : Série temporelle des températures d'une année à l'autre

## Statistiques

![ML-Statistique](/img/ML-statistique.png)

Il est intéressant d'étuier la répartition des valeurs avec un histogramme,
on regroupe les valeurs en *bins*

![ML-Statistique](/img/ML-statistique-1.png)

On peut ensuite étudier la répartition des valeurs sur chaque colonne 

![ML-Statistique](/img/ML-statistique-2.png)

## Corrélation

Il est possible d'étudier la corrélation entre 2 attributs : 

- Compris entre 1 et -1
- Proche de 0
- Proche de 1 ou -1

Notamment en utilisant une *heatmap*

![ML-Correlation](/img/ML-correlation.png)

La corrélation signifie une évolution conjointe entre 2 atrributs, elles ne sont pas forcément dépendante l'une de l'autre !

On peut également d'une visualisation pour étudier chaque attribut en fonction d'un autre

![ML-Correlation](/img/ML-visualisation.png)

Pour bien identifier ses données il faut :

- **Connaitre les caractéristiques principales**
- **Identifier les valeurs manquantes**
- **Identifier les valeurs anormales**
- **Synthétiser les données**

Et surtout, passer du temps sur cette étape qui est crucial pour choisir son algo

## Nettoyage des données

**Garbage in = Garbage out**

Des données de qualité permettent de **résoudre** la tache et **réprésentent** le phénomène que l'ont veut **modéliser**

Les critères pour évaluer la qualité des donnéees : 

![ML-Nettoyage](/img/ML-nettoyage.png)

Un temps considérable est alloué au nettoyage des données (entre 60 et 80 % du temps)

![ML-anomalie](/img/ML-anomalie-1.png)



## Anomalies

Comment gérer les anomalies ?

1. Identifier ces anomalies
2. Les exclure
3. Créer des modèles supprimant automatiquement les anomalies

Algo de détection : 

- Modélisent les données normales
- Peuvent labelliser chaque donée comme normal ou anormal

![ML-Anomalie](/img/ML-anomalie.png)

### Isolation Forest

Algo de détection des anomalies

- Isole chaque données des autres, par séparation en deux successives et aléatoires
- Plus la donnée est facile à isoler, plus elle a de chance d'etre anormale

Résultat : Score de probabilité 1 (ou 100 %) : risque d'anomalie

![ML-isolation](/img/ML-isolation-forest.png)

## Données manquantes

1. Comprendre la raison : 

- Données non collectées ? 
- Données non applicables ?

2. Pallier au manque de données : 

- Supprimer les lignes avec des valeurs manquantes
- Supprimer les colonnes avec trop de valeurs manquantes
- Remplacer une valeur par une moyenne ou autre (tag inconnu)
- Développer un modèle d'imputation de données manquantes

```
// Possibilité d'ajouté le nom de la colonne en paramètre

// Supprimer toutes les lignes avec données manquantes
dt.dropna(axis=0)

// Supprimer toutes colonnes avec des données manquantes
dt.dropna(axis=1)
```

## Préparer les données

Les algos d'apprentissages utilisent principalement des matrices au format numérique

Il faut donc par exemple *encoder* une image en vecteur numérique.

Plusieurs techniques pour encoder un texte : 

- Bag-of-word -> compter le nombre d'occurence de chaque mot
- Word embedding -> réprésente chaque mot comme un vecteur

![ML-prepare](/img/ML-prepare.png)

### Gérer les données catégorielles

Il faut utiliser l'encodage one-hot car il ne serait pas pertinent de donner un id à ces élements non comparables

![ML-encodage](/img/ML-encodage.png)



## Apprentissage

### Apprentissage supervisé

2 types supervisé : 

- Classification (quantité fixe)
- Régréssion (quantité infini)

Pour l'apprentissage supervisé, il faut 3 éléments : 

1. Des données : x les données en entrée, y les labels correspondant à ces données
2. Un modèle construit sur ces données : f(x): fait correspondre une entrée à un label
3. Une métrique d'évaluation du modèle : d(y,f(x)) : évalue l'écart entre les prédictions du modèle à la réalité

### Apprentissage non supervisé

## Evaluation du modèle

- Assurer que les prédictions sont pertinents
- Pour décider de son utilisation
- Pour chercher des pistes d'amélioration
- Pour comparer à d'autres modèles
- Pour choisir le modèle le plus adapté

![ML-evaluation](/img/ML-evaluation.png)

## Surappentissage

Le surapprentissage (overfitting) est un odèle devenu trop complexe
et ne réprésente pas fidèlement le phénomère réel

![ML-surapprentissage](/img/ML-surapprentissage.png)

Pour controler le surapprentissage on distingue les données : 

- Données entrainement (80%)
- Données de test (20%)

