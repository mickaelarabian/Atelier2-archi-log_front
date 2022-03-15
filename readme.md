# Atelier 2 - Architecture logiciel

## Installer et démarer le front

- Clonner le front
`git clone etc`

- Lancer le front
`cd etc`
`php -S 127.0.0.1:8081`

ouvrir `http://127.0.0.1:8081/` dans le navigateur

## Installer et démarer l'api Spring boot

- Clonner le front
`git clone etc`

- Compiler le code sur eclipse

`launch`

Remplir la base de données en  appelant la route instance
`http://localhost:8080/instance`


# Questions

## Qu’est ce que des Services Web Full Rest ? 

REST est une méthode d'architecture logicielle ayant pour but de créer des services WEB en respectant certaines contraintes.

## Quelles sont les contraintes imposées par ce type de service ?

Les contraintes sont les suivantes :
- client-serveur : Les applications du client et du serveur doivent être indépendantes l'une de l'autre.
- Uniformisation de l'interface : Chacune des ressources est identifiées par une URI.
- Mise en cache : Elle améliore l'accessibilité à une application par un client. 
- Sans état : Les requêtes ne seront pas stocker par le serveur.  
- En couche :

## Qu’est ce qu’un gestionnaire de dépendance ? 

Un gestionnaire de dépendance permet d'administrer les dépendances. 

## Maven est-il le seul ? 

Non. Il existe par exemple "Composer" pour Php.

## Quel est l’avantage d’utiliser un gestionnaire de dépendances ? 

Il est très utile pour mettre à jour les dépendances et revenir à une version antérieure en cas de problème.

## Quelles sont les grandes étapes de fonctionnement de Maven ?

Les étapes sont les suivantes :
- "Validation" : vérification des informations du projet
- "Compilation" : le code du projet est compilé
- "Tester" : le code compilé est testé par des tests unitaires
- "Paquet" : le code est rassemblé dans un format de distribution (jar, war, etc...)
- "Vérification" : Vérifie l'intégration du projet en faisant ddes tests d'intégration.
- "Installation" : Installe le paquet qui sera utilisé en tant que dépendance.
- "Déploiement" : Partage le paquet final sur un repertoire distant de manière à qu'il soit accessible par d'autres personnes.

## Qu’est ce qu’une application classique Entreprise Java Application ? 

- Il s'agit d'une application développé sur la plateforme Java d'oracle, incluant la gestions de services web et d'architectures distribuées.

## Donner un exemple d’usage avec web service, JSP, JavaBean, EJB et JMS.

JSP: Rendu html server. Pour des application qui n'ecessite un affichage des données directement après traitement du server.

JavaBean: Compsoan réutilisable pour les applciation avec une interface gourmande

JMS: permet l'envoie de message de façon asynchrone. Utile dans le cas d'applciation deux tiers incluant une api et un front distant.

## Qu’est ce que Spring ? qu’apporte Spring boot vis-à-vis de Spring ?

Spring est un framework open-source permettant de construire l'infrastructure d'une application JAVA. Springboot est basé sur Spring.

| Spring | SpringBoot  |
|---|---|
| Framework Java EE utilisé pour des applications | Framework principalement utilisé pour développer des API REST |
| Basé sur l'injection de dépendance | Basé sur des "starters" (gestionnaire de dépendance) |
| Personnalisable | Epuration de la configuration |
| Pas de serveur embarqué | Serveur embarqué (Apache Tomcat) |

## Qu’est ce que Spring Boot ?

Cet outil, basé sur le framework Spring, permet de développer des applications WEB et des microservices rapidement.Il a la particularité de créer des applications autonomes.

## Quels sont les points communs/différences entre JEE et Spring Boot ?

| JEE |
| Avantages | Inconvénients  |
|---|---|
| Disponible sur plusieurs plateformes | Pas de service support intégré pour les services WEB |
| Facile à prendre en main si J2SE est connu | Coûte plus cher à développer |
| Extensif et sécurisé | Plus complexe |

| Springboot |
| Avantages | Inconvénients |
|---|---|
| Sécurisé | Temps d'exécution important |
| Solution stable qui a fait ses preuves | Moins de contrôle |
| Permet un "TimeToMarket" plus court | N'est pas conseillé pour un projet à grande échelle |


## Qu’est ce qu’une annotation ? 

Ce sont les métadonnées dans le code source visant à modifier l'exécution d'un programme. (@Override, @Ressource, etc.).

## Quels apports présentent les Annotations ?

Elles proposent des fonctionnalités en plus. Par exemple, @Ressource va permettre de récupérer un objet de configuration.

## Comment fait-on pour créer un Web Service Rest avec Spring Boot ?

On va sur le site de Springboot pour charger l'architecture du projet selon nos paramètres : 

- Project : Maven Project
- Language : Java
- Springboot : 2.6.4
- Project Metadata
- Dependencies : Spring Web

On peut ensuite importer notre projet dans Eclipse.

## Qu’est ce qu’un container de Servlet ? 
Un container de Servlet est un logiciel qui exécute des Servlet (Tomcat est le plus populaire).

## Comment fonctionne un containeur de Servlet ?
Un container de Servlet est un logiciel qui exécute des moteur web.

## Expliquer la philosophie « Convention over Configuration » de Spring boot ?
Il s'agit d'une philosiphie qui tend à faire diminuer le nombre de décisions qu'un développeur doit prendre : il doit se concentrer sur les aspects non conventionnels de l'application. Cela permet de réduire le nombre de fichiers de configuration et de configurer par défaut les applications en se basant sur les standards du milieu.

## Expliquer ce qu’il se passe lors de l’exécution «SpringApplication .run(App.class,args) »
L'exécution «SpringApplication.run(App.class,args)» permet de créer le contexte de l’application, instancier les beans enregistrés et effectuer le
packaging demandé.

## Qu’est ce qu’un DAO ? 
Un DAO (Data Access Object, ou Objet d'Accès aux Données) est un patron de conception (c'est-à-dire un modèle pour concevoir une solution) utilisé dans les architectures logicielles objet.

## En quoi est-ce intéressant d’utiliser ce pattern ? 
Utiliser ce pattern, tout d'abord, est reconnu comme bonne pratique en réponse à un problème de conception d'un logiciel : le pattern décrit les grandes lignes d'une solution, qui peuvent ensuite être modifiées et adaptées en fonction des besoins.

## Qu’est ce qu’un Singleton ?
Un singleton est un patron de conception (design pattern) dont l'objectif est de restreindre l'instanciation d'une classe à un seul objet (ou bien à quelques objets seulement). Il est utilisé lorsqu'on a besoin exactement d'un objet pour coordonner des opérations dans un système. 

## Que permet de réaliser les Entity dans SpringBoot ? 
Les Entity dans SpringBoot agisse pour une connexion à la base de données en indiquant, via l'annotation @Entity, une classe persistante. Le service JPA va ainsi créer une table correspondante à cette classe.

## Est-ce spécifique à SpringBoot ?
Non, nous pouvons en trouver également avec Symfony par exemple.

## Combien d’instances avez-vous crées lors de l’usage de «Service» en Spring boot? Pourquoi ?
Nous avons créé une seule instance lors de l'usage de "Service" en Springboot, il s'agit de l'instance Singleton.

## Que fournit le CRUD Repository de Spring boot ?
Le CRUD Repository de Springboot contenant des méthodes permettant de réaliser les différentes opérations CRUD.

## Que sont les CRUD ?
Les CRUD (create - read - update - delete) représentent les quatre fonctions de base du stockage persistant. CRUD fait généralement référence aux opérations effectuées dans une base de données ou un magasin de données, mais peut également s'appliquer aux fonctions de niveau supérieur d'une application.

## Qui réalise l’implémentation de la méthode findBy Property lors de la création d’un repository en Spring Boot ?
C'est le service qui réalise l'implémentation de la méthode findBy Property lors de la création d'un repository en Springboot.

## Comment gère-t-on les relations One To One, One to Many et Many to Many avec JPA ?
 - One-To-One : sans table d'association (il nous faut utiliser le couple d'annotation JPA @OneToOne et @JoinColumn), avec attribut inverse ou avec table d'association (il faut encore utiliser l'annotation @OneToOne mais il va falloir la coupler à une annotation @JoinTable afin d'y spécifier les informations utiles à la jointure).
 - One-To-Many : sans table d'association (la clé de jointure, permettant la mise en relation, sera portée par la table associée à la classe) ou avec table d'association (une 3e table servira à stocker les paires de clés de mise en relations).
 - Many-To-Many : avec table d'association (il faut utiliser l'annotation @ManyToMany qu'il va falloir coupler à une annotation @JoinTable afin d'y spécifier les informations utiles à la table de jointure).

## Qu’est ce qu’une Architecture SOA ? Qu’est ce qu’une architecture Micro Service ?
- L'architecture orientée services (ou SOA, Service-Oriented Architecture) est un modèle de conception qui rend des composants logiciels réutilisables, grâce à des interfaces de services qui utilisent un langage commun pour communiquer via un réseau.
- Une architecture de microservices se différencie d'une approche monolithique classique par le fait qu'elle décompose une application pour en isoler les fonctions clés. Chacune de ces fonctions est appelée « service » et ces services peuvent être développés et déployés indépendamment les uns des autres (faible couplage).

## Il y a-t-il d’autres architectures existantes ? 
D'autres architectures existent :
- Les architectures en appel et retour
- Les architectures en couche
- Les architectures centrées sur les données
- Les architectures en flots de données (architecture SOA & microservices)
- Les architectures orientées objets
- Les architectures orientées agents

## Quels sont leurs avantages/inconvénients ?
| Tableau comparatif    |          Avantages          |         Inconvénients         |
| :---------- | :--------------------------: | :----------------------: |
| Architectures en appel et retour | encapsulation  | reseau, maj  |
| Architectures en couche     |    simplicité d'implementation            |    Model de données visible       |
| Architectures centrées sur les données      |   Grande intégrabilité             |   Peu extensible    |
| Architectures en flots de données    |  chainage             |          |
| Architectures orientées objets     |      réutilisabilité, éfficacité          |   compliqué        |
| Architectures orientées agents      |               |  nécéssite une formalisation rigoureuse         |
