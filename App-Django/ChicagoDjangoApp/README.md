# MSPR-3 Devops/Sysops

## Référentiel de l' application Backend

### Serveur Django

Pour la partie WebServeur utilisant les données fournies par le site OpenData de Chicago grâce à une pipeline Apache Spark et mises en persistance au niveau d&#39;une base de donnée Cassandra, nous utilisons un serveur Backend sous le framework python qu&#39;est Django.

Nous allons récapituler les étapes nécessaires à la configuration de Django, ainsi qu&#39;à son déploiement dans un environnement de production.

Pour commencer, afin de procéder à une conception et une réalisation se basant sur les best-practices du Framework, nous nous baserons sur les exemples donnés pour les cas d&#39;usage sur le site officiel de documentation :

[cliquez ici pour accéder au site officiel](https://docs.djangoproject.com/en/3.0/)

##### Apparté conf. Python :

Personnellement j'utilise un mac avec une version de python livrée pour l'OS de celui-ci.

J'ai installé la dernière version à savoir python3 mais je rencontre quelques problèmes entre les deux configuration dans le chemin d&#39;accès du répertoire de mes modules (pour effectuer les imports), j&#39;ai opté pour une solution plus rapide et moins pérenne que celle de mettre mon dossier python3 par défaut en lecture.

En effet, pour installer les modules nécessaires, dans VSCode, il faut saisir avec `cmd+Maj+P` > python : select interpreter <<version of python you use >>

Après avoir saisi la version à utiliser, vous pouvez vérifier le répertoire de celle-ci avec which python(+numVersion) => ex :

`$ which python3
/usr/local/bin/python3`

### I - Architecture

Pour l'instant nous disposons d'une architecture typique de Django :

à savoir en utilisant la commande de génération du projet :

`django-admin startproject <<nom du site>>`

Au sein du projet, nous faisons ensuite la distinction entre les différentes applications qui doivent être désservie par le serveur. Nous avons donc:

- l'outil de dashboard public utilisant une application web sous le framework vue.js
  
- la liste des API mises à disposition pour les développeurs souhaitant réutiliser les données selon des filtres un peu plus particuliers
  

### II - Interfaçage avec la base de donnée

Pour se connecter à la base de donnée, Python possède un driver propre au SGBD NoSQL qu&#39;est Cassandra.
Nous utilisons une Librairie de surcouche de ce driver sous Django nommé `Django_cassandra_engine`

Pour les tests en local, il faut absolument avoir un environnement Cassandra disponible, 
le serveur ne peut tourner si la tentative de connexion à Cassandra échoue.

Nous avons une connexion par rôle d'authentification Cassandra, dans le fichier de configuration `settings.py` nous retrouvons ceci :

`DATABASES = {
    'PublicAppBDD': {
        # Install this engine from https://pypi.org/project/django-cassandra-engine/
        'ENGINE': 'django_cassandra_engine',
        'NAME': 'PublicApp',  # the keyspace was created at cassandra # to define
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',  # You can add your hosts here (use ,)
        'OPTIONS': {
            'replication': {
                'strategy_class': 'SimpleStrategy',  # or any strategy you need
                'replication_factor': 1  # Depend on your decision
            },
            'connection': {
                # 'consistency': ConsistencyLevel.ONE,
                'lazy_connect': True,
                'retry_connect': True,
                'port': 9042,  # default port
                #  You can add any connection options for cassandra.Cluster() here!
            }
        }
    },
    'AdminBDD': {
        # Install this engine from https://pypi.org/project/django-cassandra-engine/
        'ENGINE': 'django_cassandra_engine',
        'NAME': 'yourkeyspace',  # the keyspace was created at cassandra # to define
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',  # You can add your hosts here (use ,)
        'OPTIONS': {
            'replication': {
                'strategy_class': 'SimpleStrategy',  # or any strategy you need
                'replication_factor': 1  # Depend on your decision
            },
            'connection': {
                # 'consistency': ConsistencyLevel.ONE,
                'lazy_connect': True,
                'retry_connect': True,
                'port': 9042,  # default port
                #  You can add any connection options for cassandra.Cluster() here!
            }
        }
    }
}`


### IV - API

#### API Développeurs :

les développeurs auront accès à des API requêtes de filtre un peu plus élaborées que la partie reporting classique aux civils.

Les requêtes choisies ont été sélectionnées en se basant sur des utilités qui peuvent se montrer pour utiliser les données pour des recherches approfondies :

| API | description | liste champs à utiliser |
| --- | --- | --- |
| N°1 |     |     |
| N°2 |     |     |
| N°3 |     |     |