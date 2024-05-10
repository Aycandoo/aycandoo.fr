---
title: "Inclure mes libraries externes à mes projets front"
date: "2020-03-27"
category: "JS"
slug: "inclure-libraries-externes-personnelles"
illustration: "../images/posts/post_cards/hands_writing_in_journal_at_the_table.jpg"
---

J'ai récemment eu l'occasion de développer une librairie de composants, et je souhaiterais rendre les utilisables dans mes projets **sans avoir à publier la librairie sur npm**.

La structure de mon projet se présente de cette façon:

- my-repo
  - ui-components
  - project1

Pour info, mon project1 est une application front Ember, et ui-components est un ensemble d'[addons Ember](https://cli.emberjs.com/release/writing-addons/).

Le but est de pouvoir accéder aux composants de ui-components depuis projet1.

Les solutions abordées dans cet article seront:

- inclusion du module via filepath
- npm link
- npm workspace
- repository github

## Inclusion du module via filepath

La solution la plus simple pour l'exemple étudié ici serait de spécifier directement l'emplacement du module dans le package.json:

```
// project1/package.json
"devDependencies": { 
  "ui-components": "file:../ui-components" 
}
```

Il suffit ensuite de faire un npm install ! On voit apparaître le dossier pix-ui dans le node_modules de project1.

## npm link

La deuxième piste explorée est l'utilisation de npm-link.

*npm-link* permet de charger un module depuis n'importe quel chemin sur l'ordinateur.

Il s'utilise de la manière suivante:

```
$ cd ui-components
$ npm link
$ cd ../project1
$ npm link ui-components

```
La dernière commande npm link ui-components affiche sur la console:

```
/path/to/project1/node_modules/ui-components -> /usr/local/lib/node_modules/ui-components -> /path/to/ui-components
```

Il est explicite que derrière ces commandes, npm link crée un lien symbolique de ui-components vers notre node_modules global, puis de là vers le node_modules local de project1.

Il est possible de faire afficher clairement ce lien symbolique:

```
$ ls -al $(npm root -g)
lrwxr-xr-x   1 username  admin    59B Mar 18 16:58 ui-components@ -> /path/to/ui-components
```

Ce n'est pas terminé, il faut définir dans le package.json de project1 la dépendance vers ui-components:

```
// project1/package.json
"devDependencies": {
  "ui-components": "*"
}
```

Voilà! Il est désormais possible de faire npm install depuis project1 et d'utiliser les composants de ui-components depuis project1.

> Pour info, il est possible de supprimer ces liens de la même manière que l'on supprimerait des liens symboliques.

> Sinon, il est aussi possible d'exécuter npm unlink ui-components depuis project1 pour supprimer le lien symbolique local, puis npm unlink depuis ui-components pour supprimer le lien symbolique global.

## npm-workspace

npm-workspace est en quelque sorte un wrapper de npm link: il permet de centraliser les liens et nous évite d'avoir à écrire sur notre terminal tous les npm link manuellement.

Il s'installe de manière globale:

```
$ npm install -g npm-workspace
```

En considérant les mêmes projets (ui-components et project1), il suffit de créer un fichier workspace.json dans project1 contenant le nom du module et son chemin:

```
// project1/workspace.json
{
  "links": {
    "ui-components": "../ui-components"
  }
}
```

Comme précédemment, il faut indiquer le nom de notre module dans le package.json:

```
// project1/package.json
"devDependencies": {
  "ui-components": "*"
}
```

Puis il suffit de lancer la commande npm-workspace install qui crée nos liens symboliques puis lance un npm install des autres modules:

```
$ npm-workspace install
```

## Repository github

La dernière piste explorée consiste à simplement mettre le lien de notre librairie dans le package.json. D'après la documentation de [npm install](https://docs.npmjs.com/cli/install), il est possible de spécifier l'installation de notre module via son chemin et sa branche github, bitbucket, ou encore gitlab.

Toutefois cela nécessite que ui-components soit dans un repo entièrement séparé de project1. Je n'ai pas réussi à le faire fonctionner en les mettant tous les deux dans le même repo. Il semblerait que npm ne gère pas encore cela.

Si j'avait mis les deux dans des repos séparés, il aurait suffit de modifier le package.json de cette manière:

```
// project1/package.json
"devDependencies": { 
  "ui-components": "github:username/ui-components#my-branch-name" 
}
```

Il suffit ensuite de lancer `npm install` et la dépendance sera utilisable!
