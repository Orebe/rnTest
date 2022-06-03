# rnTest

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
