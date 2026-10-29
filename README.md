# Chicago Environmental Dashboard

**Un tableau de bord web pour explorer les données environnementales des plages de Chicago.**

![Vue.js](https://img.shields.io/badge/Vue.js-2.6-4FC08D?logo=vuedotjs&logoColor=white)
![Vuetify](https://img.shields.io/badge/Vuetify-2.2-1867C0?logo=vuetify&logoColor=white)
![Django](https://img.shields.io/badge/Backend-Django-092E20?logo=django&logoColor=white)
![Cassandra](https://img.shields.io/badge/Database-Cassandra-1287B1?logo=apachecassandra&logoColor=white)
![Status](https://img.shields.io/badge/Statut-Prototype-orange)

## Présentation

Chicago Environmental Dashboard est un projet de développement full stack consacré à la visualisation de données environnementales ouvertes. Il réunit une interface de consultation, des graphiques et une carte des capteurs autour de deux thématiques : la qualité de l’eau et les conditions météorologiques des plages de Chicago.

L’objectif est de rendre ces mesures plus accessibles et d’explorer une architecture associant **Vue.js**, **Django** et **Apache Cassandra** pour leur consultation et leur stockage.

Le dépôt contient un **prototype** : les vues de visualisation utilisent actuellement des séries de démonstration et l’intégration complète avec le backend reste à finaliser.

## Fonctionnalités et état actuel

| Module | Contenu présent dans le dépôt |
| --- | --- |
| Qualité de l’eau | Vue dédiée, sélecteurs de plage et d’indicateur, graphique avec option de téléchargement. |
| Météorologie | Vue dédiée aux stations, sélecteurs de station et de mesure, graphique de démonstration. |
| Cartographie | Composant Google Maps avec marqueurs, fenêtres d’information et tableau des capteurs. |
| Internationalisation | Ressources de traduction françaises et anglaises avec Vue I18n. |
| Backend | Structure Django, modèles Cassandra et première vue de restitution JSON. |
| Authentification | Routes d’obtention et de renouvellement de jetons JWT, avec éléments d’intégration côté frontend. |

Les sélecteurs ne pilotent pas encore les séries affichées. Les positions et les informations des capteurs sont renseignées dans le composant cartographique. Le parcours d’authentification et les échanges frontend/backend nécessitent encore une consolidation.

## Données explorées

Le projet s’appuie sur le domaine des données ouvertes de la ville de Chicago. Le fichier `Beach_Water_Quality_-_Automated_Sensors.csv` est fourni à la racine du dépôt.

Les écrans prévoient notamment la consultation des indicateurs suivants :

- **Eau** : température, turbidité, profondeur du transducteur, hauteur et période des vagues.
- **Météo** : température de l’air, humidité, précipitations, direction et vitesse du vent, pression atmosphérique et rayonnement solaire.
- **Capteurs** : nom, type, coordonnées géographiques et niveau de batterie de démonstration.

La présence du CSV ne signifie pas qu’il est automatiquement chargé dans Cassandra : aucun processus d’import complet n’est fourni dans cette version.

## Stack technique

| Couche | Technologies |
| --- | --- |
| Interface | Vue.js 2, Vuetify 2, Vue Router |
| Graphiques | Vue Chartkick, Chartkick, Chart.js |
| Cartographie | vue2-google-maps |
| Traductions | Vue I18n |
| Échanges HTTP | Axios |
| Backend | Python, Django, Django REST Framework |
| Authentification | django-rest-framework-jwt |
| Persistance | Apache Cassandra, django-cassandra-engine, CQL Engine |
| Outillage frontend | Vue CLI 4, ESLint, npm |

## Organisation du dépôt

| Chemin | Rôle |
| --- | --- |
| `mspr3-front/` | Application Vue.js et configuration frontend. |
| `mspr3-front/src/views/` | Pages de consultation, accueil et connexion. |
| `mspr3-front/src/components/` | Carte, barre de navigation et composants d’interface. |
| `mspr3-front/src/locales/` | Traductions françaises et anglaises. |
| `App-Django/ChicagoDjangoApp/` | Projet Django et point d’entrée `manage.py`. |
| `App-Django/ChicagoDjangoApp/publicReportApp/` | Modèles et vues pour les données environnementales. |
| `Beach_Water_Quality_-_Automated_Sensors.csv` | Jeu de données source fourni. |
| `Django-conf.md` | Notes de configuration du backend. |

## Démarrage de l’interface

Depuis la racine du dépôt, avec Node.js et npm installés :

```bash
cd mspr3-front
npm install
npm run serve
```

Ouvrir l’adresse indiquée par le serveur de développement.

Le frontend repose sur une stack Vue CLI 4 / Vue 2. La compatibilité des dépendances avec l’environnement Node.js utilisé doit être vérifiée ; aucune version de Node.js n’est verrouillée dans le dépôt.

### Configuration des services

Le client Axios de `src/axios-config/axiosMspr.js` lit la variable `VUE_APP_ROUTE_BASE_URL`. Pour le développement local, créer ou adapter un fichier `.env.local` dans `mspr3-front/` :

```dotenv
VUE_APP_ROUTE_BASE_URL=http://127.0.0.1:8000
```

Les URL JWT présentes dans `src/vuex/login.js` doivent également être alignées sur l’adresse et le protocole du backend. Cette variable ne remplace pas les URL écrites directement dans les autres fichiers.

Le composant cartographique nécessite une clé Google Maps configurée dans `src/main.js`. Utiliser sa propre clé, restreinte aux domaines autorisés, et externaliser sa configuration avant publication.

### Commandes disponibles

```bash
# Compilation du frontend dans dist/
npm run build

# Analyse du code frontend
npm run lint
```

## Backend Django / Cassandra

Le backend constitue une base d’intégration à adapter à l’environnement local. Il ne dispose pas encore d’un fichier de dépendances Python verrouillé permettant une installation reproductible.

Avant de lancer le serveur :

1. Préparer un environnement Python compatible avec les dépendances historiques du projet.
2. Installer Django, Django REST Framework, django-rest-framework-jwt, django-cors-headers et django-cassandra-engine, ainsi que leurs dépendances compatibles.
3. Disposer d’une instance Cassandra accessible et du keyspace `mspr`, utilisé par les modèles.
4. Harmoniser les connexions déclarées dans `ChicagoDjangoApp/settings.py` et `publicReportApp/models.py`, puis compléter la configuration des bases et des routeurs Django.
5. Vérifier les modèles, la gestion des utilisateurs et les vues avant de tester les routes.

Une fois cette configuration finalisée :

```bash
cd App-Django/ChicagoDjangoApp
python manage.py check
python manage.py runserver
```

### Routes déclarées

| Méthode | Route | Usage prévu |
| --- | --- | --- |
| GET | `/publicReportApp/Home` | Restitution JSON de données issues de Cassandra. |
| GET | `/Home` | Réponse simple de contrôle. |
| POST | `/api/v1/auth/obtain_token/` | Obtention d’un jeton JWT. |
| POST | `/api/v1/auth/refresh_token/` | Renouvellement d’un jeton JWT. |
| GET | `/admin/` | Interface d’administration Django. |

Ces routes reflètent la configuration du code ; leur fonctionnement dépend de la finalisation du backend et de sa connexion aux données.

## Évolutions prévues

- [ ] Relier les graphiques aux données exposées par le backend.
- [ ] Appliquer les filtres de plage, de station et d’indicateur aux séries affichées.
- [ ] Automatiser l’import et la préparation des données sources.
- [ ] Finaliser les modèles Cassandra et la configuration des bases Django.
- [ ] Fiabiliser la cartographie et alimenter les marqueurs depuis une API.
- [ ] Finaliser le parcours de connexion et la gestion des jetons.
- [ ] Verrouiller les dépendances et moderniser la stack technique.
- [ ] Ajouter des tests d’intégration et une chaîne CI/CD.
- [ ] Proposer un environnement de développement conteneurisé.
