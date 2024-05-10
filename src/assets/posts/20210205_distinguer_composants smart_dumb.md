---
title: "Distinguer les composants smart et dumb"
date: "2021-02-05"
category: "JS"
slug: "distinguer-composants-smart-et-dumb"
illustration: "../images/posts/post_cards/color-foam-shape-flatlay.jpg"
---

La notion de composants est présente dans de nombreux frameworks JS (Angular, React, Ember, etc). Ils permettent de découper l'interface utilisateur en éléments facilement réutilisables.

Lors de la création d'un nouveau composant, différentes questions viennent à l'esprit:

- de quelle donnée ai-je besoin pour rendre mon composant utilisable par d'autres ?
- ai-je besoin d'y injecter des services ?
- sur lequel, du composant appelant ou du composant appelé, placer la logique ?

De ces questions découlent deux concepts de composants, les composants dumb et les composants smart.



## Pourquoi ?

Lorsque l'on souhaite rendre un composant réutilisable, il est plus intelligent de lui fournir toutes les informations dont il a besoin pour s'afficher correctement plutôt que de repasser derrière lui  pour l'adapter à notre besoin. On appelle ce composant qui ne fait que de la représentation visuelle le composant <u>dumb</u>. Le composant appelant sera appelé composant <u>smart</u>.

Prenons par exemple un composant Score. En fonction de l'emplacement du score dans la page, ce sera le score de l'utilisateur à une question ou le score **total** de l'utilisateur à toutes les questions qui sera affiché.

L'appel au composant dans le premier cas s'écrira de la manière suivante dans le template:

```handlebars
<Score @value={{@question.score}} />
```

Et dans le deuxième cas (affichage du score total de l'utilisateur):

```
<Score @value={{@user.score}} />
```

On remarque bien ici l'intérêt de séparer les responsabilités entre le composant appelant (smart) et composant appelé (dumb). Le composant Score peut être facilement réutilisé dans des contextes différents. Les données dont il a besoin lui sont passées directement en attributs.



## Composant dumb

La seule responsabilité du composant dumb est <u>l'affichage</u>. Il ne garde pas d'état et n'appelle aucun service. La seule manière de communiquer avec lui est de passer par ses propriétés.

S'il faut modifier le rendu visuel, c'est ici qu'il faut aller.



## Composant smart

Comme l'indique son nom, ce composant est intelligent: il communique avec des services (appels au storage, API, libraries, etc) et manipule des états. Il récupère/crée les données nécéssaires au composant dumb.

Il s'assure globalement du bon fonctionnement de l'application.

