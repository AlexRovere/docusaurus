# Python

---

## Resources

Référence : https://wwww.python.org

## Origine

- Créateur : Guido Van Rossum

- Objectif : Gérer plus facilement l'automatisation de tâches sur plusieurs plateformes, scripting, opérations sur fichiers

- Version 3 : Rupture de rétrocompatibilité en 2008



## Utilisation

Utilisé par de nombreuses personnes différentes (dev, scientifique, testeurs, école)
Utilise une VM Python Virtual Machine (PVM) comme Java

- Application lourde
- Application web (Django ou Flask)
- Data science
- IA
- Apprentissage des algos en école (facilité d'utilisation)
- Automatisation de tests

Python est une langage interprété mais aussi compilé

Chaque projet a son environnement virtuel avec la version de python et les librairies compatibles

- Typage dynamique
- Haut niveau
- Open source
- Orienté objets

## Zen de Python

- Explicite
- Simple
- Minimaliste
- Claire
- Souple
- Typage dynamique fort

## Synthaxe

Le snake_case est utilisé pour le nom des variables et fonctions
Le langage se base sur les indentations, pas d'accolades ni de ;

Le typage est informatif : 
variable1: str = "maVariable"

Le type boolean s'écrit avec une majuscule True / False
- str = string
- True / False = boolean
- int = Integer
- float = Float

Déclarer 2 variables : 
a, b = 12, 15

Déclarer une fonction : 
def nom_fonction(val1, val2):
  print(val1, val2)
  result = val1 + val2
  return result

somme = add(a, b)
print(somme) // 27


Procédure :

Aucun retour de fonction

def my_procedure():
  pass // pour la démo pour dire qu'il n'a aucune instruction

Fonction : 

def my_function():
  return a_value

Paramètre par défaut

def function_default(a = True):
  return a

Paramètre nommé : 

def function_nomme(a, b, c)
  return a + b + c

fuction_nomme(c = 12, a = 18, b = 20)

Retour multiple : 

def function_multiple():
  return a, b

a, b = function_multiple()

Arguments variables (*tuple) : 

def make_sum(*integers):
  total = 0  
  for i in integers:
    total += i
  return total

Fonction underscore :

__add__(self, value, /)

Méthode en lecture seule
Surchage l'opération +
En Python tout est objet, il n'existe pas par défaut d'opérateur


__méthode__ = méthode spécial, empeche la modification par héritage

Arguments multiples nommés (**dic)

def describe_user(**attr)
  result = "La personne a pour "
  for key,value in attr.items():
    result += str(key) + " " + str(value) + " et "
  return result[:-4] // supprimer les 4 derniers caractères

print(describe_user(name="rovere", firstname="alex"))


Dict - Dictionnaire

C'est l'équivalent d'un objet JS (collection clé/valeur)

```
object = {}
object = dict()
object = {name: "rovere"}
```
Tuple

Une liste de valeur immuable

liste = (1,2,3)

List

Une liste de valeur mutable

liste = [1, 2, 'hey']

## Fonctions courantes

- print(value) : log dans la console
- type(value) : log le type
- lambda : lambda arg1, arg2, ... : result : fonction courte qui traite les données

Pkusieurs types de chaine de caractères : 

- str // par defaut
- unicode // encodage selon la norme unicode

Méthode de str : 

- lower, upper, capitalize, title, swapcase
- len, count, index, find, replace
- startswith, endswith
- strip, split, format
- isalpha, isdigit

Découper une chaine : 

msg = "hello world"
msg[0:4] = "hell"
msg[:5] = "hello"
msg[6:] = "world"
msg[:-6] = "hello"

3ème paramètre
msg[start:end:step=1]

msg[::2] = "hl wrd"

## Ternaires

"ok" if True else "not ok"

## Class

3 types de méthodes : 

- Instance : avec self en premier paramètre (self) @staticmethod
- classe : avec la classe en premier paramètre (cls) @classmethod
- statique : sur la classe ou une instance

statique = au sein de la classe qui n'utilise aucune propriété de l'instance ou de la classe

