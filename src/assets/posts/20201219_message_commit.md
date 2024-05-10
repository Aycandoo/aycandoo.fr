---
title: "Écrire un message de commit"
date: "2020-12-19"
category: "GIT"
slug: "message-de-commit-git"
illustration: "../images/posts/post_cards/business-pug-working-on-laptop.jpg"
---

Un commit représente un état du repository Git à un moment donné.

Il contient les changements effectués lorsque la commande `commit` a été exécutée.

Le but d'un système de contrôle de version est de pouvoir naviguer entre les différents états du code. Il est important de bien nommer ses commis pour se déplacer facilement et rapidement d'un état à un autre.



## Quand faire un commit?

Afin de pouvoir nommer clairement un commit, celui-ci ne doit contenir que les changement répondant à un objectif simple, qui sera le nom du commit. On parle de **commits atomiques**.

Il peut être plus compliqué à faire plusieurs petits commits quand on est habitué à en faire un gros à la fin d'un développement, mais une fois que l'on a la pratique, on se s'en passe plus !

Les avantages sont multiples:

- le commit ne fait qu'une seule chose, il est donc simple à nommer
- lorsqu'un bug est identifié, on répère rapidement le commit correspondant et donc le bout de code correspondant
- comprendre *pourquoi* ce commit est nécessaire
- la revue de code - pull request - permet de faire relire le travail effectué à ses collègues. Lorsque le développement porte sur un grand nombre de fichiers et de commits, il peut-être judicieux de lire les modifications commit par commit pour mieux comprendre le cheminement de pensée du développeur. Il m'est déjà arrivé de lire des pull request avec une bonne cinquantaine de fichiers modifiés mais seulement quelques commits, c'est notamment le cas des pull request avec des montées de version de *dependencies*. Dans ce cas, la lecture commit par commit permet de vérifier les bonnes modifications apportées suite au changement de version pour cette dépendance précise; alors que ces informations seraient noyées dans la masse si l'on avait lu fichier par fichier.
- il est possible de réordonner ses commits, de les séparer en plusieurs, de les renommer, etc... et ainsi, garder l'historique de git propre. Préfére-t-on travailler avec cet historique:

```bash
* 1a1e5af - Fix student
* dd0dc95 - fix
* ba41187 - Export PDF
* ba41187 - Export button
```

ou bien celui-ci ?

```bash
* 1a1e5af - Fix displayed student name in PDF export
* dd0dc95 - Fix student grades PDF export for IE9
* 8cc4499 - Style export student grades button
* ba41187 - Add button for student to download his grades
* 7dc668e - Create API endpoint for student grades PDF export
```

> NB: Les commits sont affichés par date décroissante. Dans les exemple ci-dessus, le commit le plus récent est donc le premier affiché.



## Comment nommer son commit?

### Se limiter à un nombre de caractères (par exemple 50 ou 80 caractères)

Cela force l'auteur à aller à l'essentiel dans l'intention de son commit, et facilite ainsi la lecture de ce commit dans le futur.

### Ne pas mettre de ponctuation

Pourquoi ajouter de la ponctuation lorsque l'on tente déjà de limiter le nombre de caractères ?

### Commencer par un verbe à l'impératif

Préférer `Fix button style in IE9` à `Fixed IE9 button display`/ `Some IE9 button display` car le commit explique ce que le commit apporte (et non pas ce qu'il a apporté).

Un commit doit pouvoir compléter la phrase suivante:  **If applied, this commit will <u>[commit name]</u>**

Par exemple:

- If applied, this commit will <u>improve images accessibility</u>
- If applied, this commit will <u>fix button style in IE9</u>

### Rester consistent dans le nommage des commits

Surtout dans les projet en équipe, veillez à bien fixer les conventions de nommage de vos commits pour éviter de vous retrouver avec des commits de formats différents.

### Utiliser le body du commit si nécessaire

Si le titre du commit ne suffit pas à expliquer le changement induit, il est possible alors de rajouter un body au commit.

Comment? Lorsque l'on effectue un commit avec la commande `git commit`, un éditeur de texte s'ouvre dans le terminal. La première ligne écrite constitue le titre du commit. Il suffit alors de sauter de ligne deux fois pour commencer le body (c'est-à-dire qu'il faut laisser une ligne vide entre le titre et le body). Le commit ressemble alors à:

```
Handle Konami code

When user press a combination of keyboard keys, a youtube video about our brand will start playing.
  
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Fri Dec 18 17:25:26 2020 +0100
#
# On branch feat-my-new-feature-name
# Changes to be committed:
#       modified:   modified-file.js
#

```

### Se baser sur la convention *Conventional commits*

Cette [convention](https://www.conventionalcommits.org/en/v1.0.0/) établie un certain nombre de règles afin de créer un historique de commits explicite.

Elle adopte un nom de commit sous la forme:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

[Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) s'inspire de cette convention pour leurs noms de commit. 



Si je reprend la convention d'Angular:

**Type** peut prendre les valeurs suivantes:

- **build**: changements qui affectent le build ou les dépendances externes (ex: gulp, broccoli, npm)
- **ci**: changements de la conf CI (ex: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: changements concernant la documentation
- **feat**: nouvelle fonctionnalité
- **fix**: correction de bug
- **perf**: amélioration de performance
- **refactor**: un changement dans le code qui n'apporte pas de nouvelle fonctionnalité ni ne corrige de bug
- **style**: changement qui n'affecte pas le fonctionnent du code (ex: espace, formattage de code, points-virgules manquants, etc)
- **Test**: ajout ou correction de tests

**Scope** est une information optionnelle sur le package npm affecté. Il peut prendre les valeurs suivantes:

- **animations**
- **common**
- **compiler**
- **compiler-cli**
- **core**
- **elements**
- **forms**
- **http**
- **language-service**
- **platform-browser**
- **platform-browser-dynamic**
- **platform-server**
- **platform-webworker**
- **platform-webworker-dynamic**
- **router**
- **service-worker**
- **upgrade**



Cela donne un historique de commits de la forme:

```
* 1a1e5af - style: fix ‘my-component‘ indentation
* dd0dc95 - docs: correct spelling for ‘my-component‘
* 8cc4499 - feat: create ‘my-component‘
```

