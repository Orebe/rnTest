# rnTest

## Pré-requis

#### Installer les pré-requis

- Installer Cocoapods `sudo gem install cocoapods`.
- Installer Node et Watchman via Homebrew (Mac) `brew install node && brew install watchman`.
- Installer React Native CLI `npm install -g react-native-cli`.

#### Télécharger le projet

- Télécharger le projet avec la commande suivante via SSH `git clone git@github.com:Orebe/rnTest.git` ou  via HTTPS `git clone https://github.com/Orebe/rnTest.git`.

#### Configuration du projet

- Exécuter à la racine du projet puis exécuter la commande `yarn install` afin d'installer les node_modules.
- Exécuter dans le dossier 'ios' puis exécuter la commande `pod install` afin de générer les pods.
- Revener à la racine de votre projet et créer un fichier '.env', vous pouvez désormais ajouter les variables de configuration, un exemple est disponible dans le fichier '.env_template'.

#### Lancer le projet

- Exécuter la commande suivante `yarn start` afin de lancer le serveur Metro.
- Démarrer xCode / Simulator si vous souhaitez lancer le projet sous iOS, sinon démarrer Android Studio.
- Exécuter dans un autre terminal la commande suivante `yarn run ios` si vous souhaitez lancer le projet sous iOS, sinon éxécuter la commande `yarn run android` pour le lancer sous Android.

PS: Pour lancer le projet sur un smartphone physique, vous pouvez suivre les instructions ici https://reactnative.dev/docs/running-on-device

## Questions

#### Question 1: Si cette intégration était en situation réelle, quels auraient été vos questions et/ou retours avant de commencer le travail ?

- Est-ce le scope de la tâche ou celui de la maquette qui fait foi ?
- Comment sont rendu les données via le JSON ?
- Est-ce que la liste doit être dynamique ou non ?
- Comment gère-t-on l'affichage en cas d'erreur ?
- Comment se passe la transition au clic du bouton 'Fermer' / 'Compléter' ?
- Au clic de l'item doit-on mettre en place un retour visuel pour l'utilisateur (Ex: Utilser 'Pressable' ou 'TouchableOpacity') ?
- Dans le cas ou le profil est complété à 100% doit-on affiché le component ?
- Sur quel élement souhaitons-nous mettre les KPIs / trackers ?
- Comment gère-t-on le passage du mode 'Portrait' au mode 'Paysage' (si il est possible de le faire) ?

#### Question 2: Qu’est-ce qui selon vous pourrait-être amélioré dans la cinématique de ce composant (chargement des données, local storage, etc) ?

- Concernant le JSON obtenu grâce à l'API, il aurait été bien de rajouter un id / marqueur unique pour chaque étape dans steps, ceci aurait éviter de créer une fonction qui gère les icônes basé sur l'index ainsi que la construction des différents items de la liste (Ex: key={index} dans le component UserProfileCompletionCardList, il aurait été préférable de faire key={id}).
- Gestion d'erreur spécifique à ce component (Ex: Si le call api est en erreur, alors on cache simplement le component mais on fait remonter une erreur sur Sentry / autres afin de corriger le problème sans perturber l'utilisateur).
- Ajouter des logs spécifique à chaque action (Ex: call api réussi, mise à jour de l'état d'une tâche, ...).
- Dans une situation réelle, il aura fallu mettre à jour la BDD après chaque mise à jour de l'état d'une tâche.
