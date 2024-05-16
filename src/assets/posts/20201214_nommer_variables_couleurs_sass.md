---
title: "Nommer les variables de couleurs Sass"
date: "2020-12-14"
category: "CSS"
slug: "nommer-variables-couleurs-sass"
illustration: "../images/posts/post_cards/pastel-colored-ball-point-pens.jpg"
---

Extraire les couleurs dans des variables Sass permet de centraliser les couleurs utilisées et de faciliter leur réutilisation. Cela permet notamment d'avoir une palette de couleurs cibles pour le site et de ne pas s'en éloigner. Je préfère utiliser un unique fichier `colors.scss` pour retrouver mes variables facilement.

Au fur et à mesure que les couleurs sont recensées, ce fichier grossit et finit par ne plus ressembler à rien, avec de nombreuses couleurs éparpillées dans tous les sens. Il est impossible de s'y retrouver:

```scss
$success: #57C884;
$grey: #FAFBFC;
$grey2: #A5ADBA;
$warning: #FFBE00;
$yellow: #FFBE00;
```

Comment organiser ces variables?



## Numéroter les variantes de couleurs

Au cours de mes missions, j'ai croisé ce type de choix de variable, suffixé par un nombre. Le palier entre les nombres permet de garder une couleur grise d'intensité croissante.

```scss
$grey-10: #97A0AF;
$grey-20: #8993A4;
$grey-30: #7A869A;
```

En essayant de limiter le nombre de couleurs déclarées, lorsque la couleur utilisée est ponctuelle, nous avons préféré utilisé les fonctions Sass `darken` and `lighten`:

```scss
.my-class {
  color: lighten($grey-1, 10%);
}

.another-class {
  color: darken($grey-1, 10%);
}
```

**avantage**: La couleur est indiquée dès la lecture de la variable.

**problème:** Comment gérer la suppression de variable? `$grey-20`par exemple? Faudra-t-il décaler la numérotation? Aussi, que représente `$grey-20`? Est-ce la couleur du menu ou du bouton déjà? ...



## Utiliser un nom de couleur unique

J'ai aussi découvert que d'autres préfèrent générer un nom unique à toutes leurs variables, par exemple à l'aide de ce site [Name that color](https://chir.ag/projects/name-that-color). Ce qui donne:

```scss
$tropical-blue: #CCDDFA;
$jordy-blue: #8BB2F4;
$cornflower-blue: #6195ED;
```

**avantage**: La couleur est indiquée dès la lecture de la variable.

**problème:** Comme dans le cas précédent où les noms de variables sont numérotés, nous perdons ici le contexte d'utilisation de la variable.



## Indiquer la fonctionnalité de la variable

Dans beaucoup de projets, la fonctionnalité de la variable est indiqué dans son nom:

```scss
$error: #FF4B00;
$success: #57C884;
$warning: #FFBE00;
```

**avantage**: La fonctionnalité est indiquée dès la lecture de la variable...

**problème:** ...mais nous perdons de vue la couleur derrière ce nommage.



## Ma préférence

Combiner les propositions précédentes:

- numéroter les couleurs pour faciliter l'insertion de nouvelles couleurs

- ordonner les couleurs par intensité
-  lorsque la couleur utilisée est ponctuelle, nous avons préféré utilisé les fonctions Sass `darken`and `lighten` directement dans la classe css plutôt que de la déclarer dans `colors.scss`

```scss
// colors
$grey-100: #27251F;
$grey-200: #353432;
$grey-300: #545452;

// elements
$dropdown-background: $grey-100;
$footer-border: $grey-200;
$banner-text: $grey-100;
```

De cette manière, il est simple de modifier les couleurs ou de renommer/ajouter/supprimer les variables.

Si plusieurs éléments ont la même couleur, il suffit de créer une nouvelle entrée dans les éléments plutôt que de dupliquer les variables de couleur.

Attention, si le nombre de couleurs est trop important il faudrait le signaler au designer. Est-ce que le style guide du site est bien défini ? S'éloigne-t-on de l'image de la marque ?

Cette solution de nommage de couleurs est une solution parmi d'autres.  
Je ne prétends pas avoir trouvé la meilleure astuce, mais elle me semble satisfaisante pour le moment.
