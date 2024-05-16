---
title: "Les propriétés ACID d'une transaction"
date: "2021-09-14"
category: "DATABASE"
slug: "proprietes-acid"
illustration: "../images/posts/post_cards/handshake-on-blue.jpg"
---

Plusieurs interactions (lecture et/ou écriture) avec la base de données peuvent se dérouler durant une transaction.

Pour s'assurer que la transaction s'exécute de façon fiable même en cas de problème, quatre propriétés lui ont été identifiées: ce sont les propriétés ACID.  Ces propriétés définissent ce qu'il se passe lorsque la transaction se termine volontairement ou involontairement.

Elle peut se terminer volontairement suite à l'éxecution de la commande *commit* (valider les changements effectués dans la transaction et les appliquer de manière permanente) ou la commande *rollback* (annuler les changements effectués dans la transaction pour retourner à l'état de la base de données avant le commencement de la transaction).

La transaction peut aussi se terminer involontairement dans ces différents cas:

- le serveur est coupé, la transaction courante sera *rollback* à la reprise du serveur
- une nouvelle transaction a été commencée, la précédente est alors forcée de s'arrêter et sera *commit*
- une modification du schéma a eu lieue dans la transaction (création de nouvelle table, d'index, de colonne, etc), la transaction courante sera *commit* et une nouvelle transaction commencera après la modifcation de schéma
- un deadlock a été détecté et la transaction identifiée comme bloquante, la transaction sera alors arrêté et *rollback*

Quelque soit la manière dont termine la transaction, elle doit respecter ces propriétés:

**A pour Atomicité**

La transaction s'effectue entièrement ou pas du tout. Si elle s'execute partiellement, alors il faut remettre la base de donnée à l'état initial (celle avant le début de la transaction): les changements ne sont pas visibles. En revanche, si la transaction termine (*commit*), les changements sont visibles.

**C pour Cohérence**

La base de donnée est dans un état cohérent avant et après la transaction.

Par exemple si une transaction transfère de l'argent de A vers B, à n'importe quel moment où l'on requête la base de données, on ne devrait pas trouver la base de données avec A qui a perdu ses sous et B qui ne les a pas reçu.

**I pour Isolation**

Si plusieurs transactions ont lieues en même temps, elles doivent se dérouler indépendamment les unes des autres. Une transaction ne doit pas accéder aux changements effectués par une autre transaction tant qu'elle n'est pas terminée (*commit*).

**D pour Durabilité**

A la fin d'une transaction, si le serveur se coupe avant qu'une transaction ait pu être *commit* ou *rollback*, alors un *rollback* devra s'éxecuter lorsque le serveur redémarre pour s'assurer que les modifications ne soient pas visibles. Toutefois, si la transaction a été correctement terminée (*commit* appliqué), les modifications doivent rester visibles même si une interruption survient, quitte à rejouer la transaction.
