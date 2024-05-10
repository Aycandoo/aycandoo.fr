---
title: "Lancement de ma première application Flutter sur mobile Android"
date: "2020-03-29"
category: "FLUTTER"
slug: "lancement-de-flutter"
illustration: "../images/posts/post_cards/hands_typing.jpg"
---

Après avoir [installé Flutter sur mon Macbook](https://celineung.github.com/blog/installation-de-flutter-sur-macos), la deuxième étape est de pouvoir lancer une application sur mon téléphone.

## Préparer le lancement dans un navigateur web

Pour pouvoir lancer une application dans un navigateur Chrome, il faut basculer sur la version beta de Flutter et activer l'option --enable-web:

```
$ flutter channel beta 
$ flutter upgrade 
$ flutter config --enable-web
```

Désormais, Flutter détecte le navigateur Chrome avec la commande flutter devices, qui retourne:

```
$ flutter devices

3 connected devices:
Chrome     • chrome      • web-javascript • Google Chrome 80.0.3987.149
Web Server • web-server  • web-javascript • Flutter Tools
```

## Créer une application

Il suffit de créer lancer la commander flutter create suivi du nom de mon application:

```
$ flutter create my_application
```

Pour le lancer sur Chrome:

```
$ cd my_application
$ flutter run -d chrome
```

## Lancer sur mon téléphone mobile

Avant de pouvoir lancer une application sur un vrai téléphone Android, il faut y activer le USB debugging:

1. Activer le **Developer options**: la procédure dépend de la version Android: sur mon téléphone avec Android 9, je me suis rendue dans About phone > Software information et j'ai cliqué 7 fois sur "Build number". Si vous avez une autre version d'Android, veuillez vous référer à ce lien: https://developer.android.com/studio/debug/dev-options
2. Une nouvelle option dans le menu Settings apparaît: "Developer options"
3. Activer les "Developer options"
4. En connectant le téléphone à l'ordinateur, un message apparaît pour confirmer l'accès du téléphone à l'ordinateur. Accepter.
5. En utilisant la commande *flutter devices*, le téléphone apparaît désormais dans la liste:

```
$ flutter devices

3 connected devices:
SM N975F   • RF8M90BX06J • android-arm64  • Android 9 (API 28)
Chrome     • chrome      • web-javascript • Google Chrome 80.0.3987.149
Web Server • web-server  • web-javascript • Flutter Tools
```

De la même manière que pour démarrer l'application sur un navigateur, pour la lancer sur notre téléphone, il suffit de lancer:

```
$ flutter run -d RF8M90BX06J
```
