---
title: "Différencier equals et hashcode"
date: "2019-12-19"
category: "JAVA"
slug: "equals-vs-hashcode"
illustration: "../images/posts/post_cards/coding_on_laptop.jpg"
---

java.lang.Object possède une méthode equals() et une méthode hashcode(). Cet article abordera la différence entre ces deux méthodes et pourquoi les surcharger en Java.

## equals

Cette méthode vérifie si deux objets sont égaux en utilisant "==", c'est-à-dire qu'elle vérifie si deux objets ont la même référence:

```java
public boolean equals(Object obj) {
    return (this == obj);
}
```

Par conséquent, deux objets ayant les mêmes propriétés ne seront pas égaux si l'on fait simplement appel à la méthode equals() sans l'overrider:

```java
@Test
public void shouldVerifyInequalityOfObjectsWithEquals() {
    Car car1 = Car.builder()
            .licensePlate(777)
            .color("red")
            .nbSeats(7).build();
    Car car2 = Car.builder()
            .licensePlate(777)
            .color("red")
            .nbSeats(7).build();
    assertThat(car1.equals(car2)).isFalse();
}
```
## hashcode

Comme l'indique sa documentation, "the hashCode method [...] does return distinct integers for distinct objects. (This is typically implemented by converting the internal address of the object into an integer [...]".

hashcode fait correspondre l'adresse mémoire d'un objet avec une valeur entière. Des objets avec des adresses mémoires différentes ne devraient par conséquent pas avoir le même hashcode. Ce test permet de vérifier cela:

```java
@Test
public void shouldVerifyInequalityOfObjectsWithHashcode() {
    Car car1 = Car.builder()
            .licensePlate(777)
            .color("red")
            .nbSeats(7).build();
    Car car2 = Car.builder()
            .licensePlate(777)
            .color("red")
            .nbSeats(7).build();
    assertThat(car1.hashCode()).isNotEqualTo(car2.hashCode());
}
```

La méthode hashcode doit suivre le contrat suivant (spécifié dans la Javadoc):

- chaque fois qu'elle est appelée sur un même objet, elle devra retourner la même valeur si aucune de ses propriétés n'a été modifiée
- si deux objets sont égaux via la méthode equals(), alors l'appel à hashcode() sur chacun de ces deux objets doit retourner la même valeur entière
- il n'est pas obligatoire d'avoir deux hashcode distincts pour deux objets inégaux via equals()

A remarquer que deux objets ayant le même hashcode ne sont pas nécessairement égaux via equals().

## Surcharger equals

Surcharger la méthode equals permet de changer le comportement de la méthode, afin de distinguer l'égalité objet de l'égalité fonctionnelle.

Considérons un objet de type Car. Nous souhaitons que deux voitures de même plaque d'immatriculation licensePlate soient identifiées comme étant la même voiture. Dans la classe Car, la méthode equals() est alors surchargée pour prendre en compte ce besoin:

```java
@Override
public boolean equals(Object obj) {
    boolean functionalEquality = false;
    Car car = (Car) obj;
    if(car.licensePlate == this.licensePlate) {
        functionalEquality = true;
    }
    return functionalEquality;
}
```

En reproduisant notre test, deux objets ayant la même plaque d'immatriculation sont désormais égaux via equals().

```java
@Test
public void shouldVerifyInequalityOfObjectsWithEquals() {
    Car car1 = Car.builder()
            .licensePlate(777)
            .color("red")
            .nbSeats(7).build();
    Car car2 = Car.builder()
            .licensePlate(777)
            .color("red")
            .nbSeats(7).build();
    assertThat(car1.equals(car2)).isTrue();
}
```
## Surcharger hashcode

Lorsque equals ou hashcode est surchargé, alors les deux doivent l'être.

equals() vérifie si deux objets ont la même identité, et par défaut hashcode retourne un entier en se basant sur cette identité.

Si deux objets n'ont pas le même hashcode → alors sûrement ces deux objets ne sont pas égaux via equals().

Surcharger l'un sans l'autre peut conduire à des comportements non souhaité :

```java
@Test
public void shouldShowOverridingEqualsNeedsOverrideHashcode() {
    HashMap map = new HashMap();
    map.put(Car.builder().licensePlate(777).build(), "ABC");
    assertThat(map.get(Car.builder().licensePlate(777).build())).isNull();
    //est-ce le comportement souhaité?
}
```
## Combiner equals et hashcode pour un set

Pour rappel, notre classe Car ne surcharge que la méthode equals pour le moment.

Que se passe-t-il lorsque l'on insère deux objets identiques fonctionnellement dans un Set?

```java
@Test
public void shouldHaveDifferentHashcodeForFunctionallySameObject() {
    Set set = new HashSet();
    set.add(Car.builder().licensePlate(777).build()); //hashcode = 1384210339
    set.add(Car.builder().licensePlate(777).build()); //hashcode = 1345401730
    assertThat(set.size()).isEqualTo(2); //est-ce le comportement souhaité?
}
```
un premier élément est créé avec un hashcode 1384210339
aucun autre élément dans le set n'existe avec un hashcode de 1384210339, il est donc inséré dans le set
un deuxième élément est créer avec un hashcode de 1345401730
aucun autre élément dans le set n'existe avec un hashcode de 1345401730, il est donc inséré dans le set

Résultat: le set contient les deux éléments à la fin du test

Si les hashcodes des deux objets avaient été le même, alors la méthode equals() aurait été appelée pour vérifier l'égalité des objets.

Pour prouver cela, la méthode hashcode() est surchargée dans la classe Car:

```java
@Override
public int hashCode() {
    return licensePlate;
}
```

Et le test devient:

```java
@Test
public void shouldHaveSameHashcodeForFunctionallySameObject() {
    Set set = new HashSet();
    set.add(Car.builder().licensePlate(777).build()); //hashcode = 777
    set.add(Car.builder().licensePlate(777).build()); //hashcode = 777
    assertThat(set.size()).isEqualTo(1);
}
```
un premier élément est créé avec un hashcode 777
aucun autre élément dans le set n'existe avec un hashcode de 777, il est donc inséré dans le set
un deuxième élément est créé avec un hashcode de 777
un autre élément dans le set existe avec un hashcode de 777, il n'est donc pas inséré dans le set

Résultat: le set contient un seul élément à la fin du test
