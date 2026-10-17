// Arrivée sur une page en cliquant sur un lien : toujours en haut de la page
try { var navType = performance.getEntriesByType('navigation')[0]; if (navType && navType.type === 'navigate' && !location.hash) { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); } } catch (e) {}

// Indique au CSS que le JavaScript fonctionne (les produits apparaissent alors en douceur)
document.documentElement.classList.add('js');

// ===== Catalogue : sert aux pages Favoris et Panier (image : mets le nom d'un fichier de ton dossier images si tu veux une vraie photo) =====
const PRODUITS = {
  "robe-bretelles": {"nom": "Robe courte rose poudrée", "prix": 1850, "texte": "1 850 €", "page": "robes.html", "categorie": "Robes", "description": "Une robe qui reprend les codes de l’étudiante des années 60 : coupe courte, couleurs d’automne et petit détail malicieux.", "image": "robe-bretelles.jpg"},
  "robe-bleu-noeud": {"nom": "Robe bleu pastel ornée d’un nœud", "prix": 1950, "texte": "1 950 €", "page": "robes.html", "categorie": "Robes", "description": "Une robe qui reprend les codes de l’étudiante des années 60 : coupe courte, couleurs d’automne et petit détail malicieux.", "image": "robe-bleu-noeud.jpg"},
  "robe-chemise-vichy": {"nom": "Robe chemise vichy bleu", "prix": 1750, "texte": "1 750 €", "page": "robes.html", "categorie": "Robes", "description": "Une robe qui reprend les codes de l’étudiante des années 60 : coupe courte, couleurs d’automne et petit détail malicieux.", "image": "robe-chemise-vichy.jpg"},
  "gilet-zippe": {"nom": "Gilet court zippé en maille crème", "prix": 1450, "texte": "1 450 €", "page": "tops.html", "categorie": "T-shirts", "description": "Un t-shirt ou un polo facile à porter, aux rayures vintage, pour jouer avec les superpositions.", "image": "gilet-zippe.jpg"},
  "tshirt-vichy": {"nom": "T-shirt vichy rouge", "prix": 590, "texte": "590 €", "page": "tops.html", "categorie": "T-shirts", "description": "Un t-shirt ou un polo facile à porter, aux rayures vintage, pour jouer avec les superpositions.", "image": "tshirt-vichy.jpg"},
  "top-pois": {"nom": "Top à pois crème", "prix": 750, "texte": "750 €", "page": "tops.html", "categorie": "T-shirts", "description": "Un t-shirt ou un polo facile à porter, aux rayures vintage, pour jouer avec les superpositions.", "image": "top-pois.jpg"},
  "polo": {"nom": "Polo rayé", "prix": 690, "texte": "690 €", "page": "tops.html", "categorie": "T-shirts", "description": "Un t-shirt ou un polo facile à porter, aux rayures vintage, pour jouer avec les superpositions.", "image": "polo.jpg"},
  "polo-demi-zip": {"nom": "Polo demi-zip à carreaux", "prix": 720, "texte": "720 €", "page": "tops.html", "categorie": "T-shirts", "description": "Un t-shirt ou un polo facile à porter, aux rayures vintage, pour jouer avec les superpositions.", "image": "polo-demi-zip.jpg"},
  "ensemble-sport": {"nom": "Ensemble sport marine", "prix": 1950, "texte": "1 950 €", "page": "ensembles.html", "categorie": "Ensembles", "description": "Deux pièces assorties pour une silhouette complète, sans avoir à réfléchir.", "image": "ensemble-sport.jpg"},
  "ensemble-vichy": {"nom": "Ensemble vichy rouge", "prix": 1250, "texte": "1 250 €", "page": "ensembles.html", "categorie": "Ensembles", "description": "Deux pièces assorties pour une silhouette complète, sans avoir à réfléchir.", "image": "ensemble-vichy.jpg"},
  "ensemble-pois": {"nom": "Ensemble à pois crème", "prix": 2100, "texte": "2 100 €", "page": "ensembles.html", "categorie": "Ensembles", "description": "Deux pièces assorties pour une silhouette complète, sans avoir à réfléchir.", "image": "ensemble-pois.jpg"},
  "ensemble-ecossais": {"nom": "Ensemble écossais bordeaux", "prix": 2350, "texte": "2 350 €", "page": "ensembles.html", "categorie": "Ensembles", "description": "Deux pièces assorties pour une silhouette complète, sans avoir à réfléchir.", "image": "ensemble-ecossais.jpg"},
  "ensemble-velours": {"nom": "Ensemble velours côtelé moutarde", "prix": 3000, "texte": "3 000 €", "page": "ensembles.html", "categorie": "Ensembles", "description": "Deux pièces assorties pour une silhouette complète, sans avoir à réfléchir.", "image": "ensemble-velours.jpg"},
  "jupe-orange": {"nom": "Jupe courte à motifs oranges", "prix": 2450, "texte": "2 450 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "jupe-orange.jpg"},
  "jupe-pois": {"nom": "Jupe crème à pois", "prix": 1350, "texte": "1 350 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "jupe-pois.jpg"},
  "short-moutarde": {"nom": "Mini-short jaune moutarde", "prix": 700, "texte": "700 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "short-moutarde.jpg"},
  "short-sport": {"nom": "Jupe bleu marine", "prix": 700, "texte": "700 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "short-sport.jpg"},
  "short-vichy": {"nom": "Short vichy", "prix": 660, "texte": "660 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "short-vichy.jpg"},
  "jupe-ecossaise": {"nom": "Jupe plissée à carreaux", "prix": 1100, "texte": "1 100 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "jupe-ecossaise.jpg"},
  "jupe-blanche": {"nom": "Jupe plissée blanche", "prix": 950, "texte": "950 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "jupe-blanche.jpg"},
  "jupe-plissee-bleue": {"nom": "Jupe mi-longue à carreaux bleus", "prix": 1250, "texte": "1 250 €", "page": "jupes.html", "categorie": "Jupes et shorts", "description": "Une jupe ou un short au caractère rétro, à porter avec des chaussettes montantes.", "image": "jupe-plissee-bleue.jpg"},
  "veste-sport": {"nom": "Veste de sport marine", "prix": 1250, "texte": "1 250 €", "page": "manteaux.html", "categorie": "Vestes et manteaux", "description": "Une pièce chaude et structurée pour les après-midis d’automne.", "image": "veste-sport.jpg"},
  "veste-capuche": {"nom": "Veste à capuche moutarde", "prix": 2300, "texte": "2 300 €", "page": "manteaux.html", "categorie": "Vestes et manteaux", "description": "Une pièce chaude et structurée pour les après-midis d’automne.", "image": "veste-capuche.jpg"},
  "blouson-creme": {"nom": "Blouson crème à liserés marron", "prix": 2450, "texte": "2 450 €", "page": "manteaux.html", "categorie": "Vestes et manteaux", "description": "Une pièce chaude et structurée pour les après-midis d’automne.", "image": "blouson-creme.jpg"},
  "veste-carreaux": {"nom": "Veste à carreaux beige et marron", "prix": 2900, "texte": "2 900 €", "page": "manteaux.html", "categorie": "Vestes et manteaux", "description": "Une pièce chaude et structurée pour les après-midis d’automne.", "image": "veste-carreaux.jpg"},
  "blouson-chocolat": {"nom": "Blouson marron chocolat", "prix": 2450, "texte": "2 450 €", "page": "manteaux.html", "categorie": "Vestes et manteaux", "description": "Une pièce chaude et structurée pour les après-midis d’automne.", "image": "blouson-chocolat.jpg"},
  "surchemise-ecossaise": {"nom": "Surchemise écossaise bordeaux", "prix": 1250, "texte": "1 250 €", "page": "manteaux.html", "categorie": "Vestes et manteaux", "description": "Une pièce chaude et structurée pour les après-midis d’automne.", "image": "surchemise-ecossaise.jpg"},
  "sac-croissant-rouge": {"nom": "Sac rouge", "prix": 2400, "texte": "2 400 €", "page": "sacs.html", "categorie": "Sacs", "description": "Un sac aux lignes simples et au cuir travaillé, qui rappelle les cartables d’autrefois.", "image": "sac-croissant-rouge.jpg"},
  "sac-maille-gris": {"nom": "Sac hobo en maille grise", "prix": 1950, "texte": "1 950 €", "page": "sacs.html", "categorie": "Sacs", "description": "Un sac aux lignes simples et au cuir travaillé, qui rappelle les cartables d’autrefois.", "image": "sac-maille-gris.jpg"},
  "sac-bowling-jaune": {"nom": "Sac jaune", "prix": 2950, "texte": "2 950 €", "page": "sacs.html", "categorie": "Sacs", "description": "Un sac aux lignes simples et au cuir travaillé, qui rappelle les cartables d’autrefois.", "image": "sac-bowling-jaune.jpg"},
  "sac-toile-beige": {"nom": "Sac en toile beige et cuir", "prix": 1650, "texte": "1 650 €", "page": "sacs.html", "categorie": "Sacs", "description": "Un sac aux lignes simples et au cuir travaillé, qui rappelle les cartables d’autrefois.", "image": "sac-toile-beige.jpg"},
  "sac-verni-noir": {"nom": "Sac en cuir verni noir à fermoir", "prix": 2200, "texte": "2 200 €", "page": "sacs.html", "categorie": "Sacs", "description": "Un sac aux lignes simples et au cuir travaillé, qui rappelle les cartables d’autrefois.", "image": "sac-verni-noir.jpg"},
  "sac-vert-eau": {"nom": "Sac vert d’eau", "prix": 1950, "texte": "1 950 €", "page": "sacs.html", "categorie": "Sacs", "description": "Un sac aux lignes simples et au cuir travaillé, qui rappelle les cartables d’autrefois.", "image": "sac-vert-eau.jpg"},
  "sandales-slingback": {"nom": "Sandales à bride arrière marron", "prix": 920, "texte": "920 €", "page": "chaussures.html", "categorie": "Chaussures", "description": "Une paire pensée pour compléter la tenue, du pied jusqu’aux chaussettes.", "image": "sandales-slingback.jpg"},
  "escarpins-bordeaux": {"nom": "Escarpins vernis bordeaux à boucle rose", "prix": 1150, "texte": "1 150 €", "page": "chaussures.html", "categorie": "Chaussures", "description": "Une paire pensée pour compléter la tenue, du pied jusqu’aux chaussettes.", "image": "escarpins-bordeaux.jpg"},
  "ballerines-satin": {"nom": "Ballerines à talon aiguille en satin rosé", "prix": 980, "texte": "980 €", "page": "chaussures.html", "categorie": "Chaussures", "description": "Une paire pensée pour compléter la tenue, du pied jusqu’aux chaussettes.", "image": "ballerines-satin.jpg"},
  "babies-vernies": {"nom": "Babies vernies noires à liseré blanc", "prix": 890, "texte": "890 €", "page": "chaussures.html", "categorie": "Chaussures", "description": "Une paire pensée pour compléter la tenue, du pied jusqu’aux chaussettes.", "image": "babies-vernies.jpg"},
  "sandales-plateforme": {"nom": "Sandales à plateforme blanches et jaunes", "prix": 1150, "texte": "1 150 €", "page": "chaussures.html", "categorie": "Chaussures", "description": "Une paire pensée pour compléter la tenue, du pied jusqu’aux chaussettes.", "image": "sandales-plateforme.jpg"},
  "babies-bicolores": {"nom": "Babies à double bride argent et bout noir", "prix": 960, "texte": "960 €", "page": "chaussures.html", "categorie": "Chaussures", "description": "Une paire pensée pour compléter la tenue, du pied jusqu’aux chaussettes.", "image": "babies-bicolores.jpg"},
  "chaussettes-grises": {"nom": "Chaussettes hautes en maille côtelée", "prix": 210, "texte": "210 €", "page": "accessoires.html", "categorie": "Accessoires", "description": "Le petit détail qui change tout dans une tenue de la collection.", "image": "chaussettes-grises.jpg"},
  "serre-tete": {"nom": "Serre-tête large avec pince assortie", "prix": 450, "texte": "450 €", "page": "accessoires.html", "categorie": "Accessoires", "description": "Le petit détail qui change tout dans une tenue de la collection.", "image": "serre-tete.jpg"},
  "chaussettes-olive": {"nom": "Chaussettes hautes vert olive", "prix": 190, "texte": "190 €", "page": "accessoires.html", "categorie": "Accessoires", "description": "Le petit détail qui change tout dans une tenue de la collection.", "image": "chaussettes-olive.jpg"},
  "lunettes-soleil": {"nom": "Lunettes de soleil à monture fine en métal doré", "prix": 480, "texte": "480 €", "page": "accessoires.html", "categorie": "Accessoires", "description": "Le petit détail qui change tout dans une tenue de la collection.", "image": "lunettes-soleil.jpg"},
  "pinces-cheveux": {"nom": "Pinces à cheveux", "prix": 390, "texte": "390 €", "page": "accessoires.html", "categorie": "Accessoires", "description": "Le petit détail qui change tout dans une tenue de la collection.", "image": "pinces-cheveux.jpg"},
};

// Descriptions écrites produit par produit (elles remplacent la phrase générique de la catégorie).
// Pour chaque produit : description, matiere, entretien. Les produits absents gardent le texte de leur catégorie.
const DETAILS = {
  "ensemble-sport": {
    "description": "La veste zippée de la capitaine d’équipe, la jupe à cordon de celle qui sèche l’entraînement. Liserés blancs, cordon qui pend.",
    "matiere": "Veste : 100 % polyester recyclé. Jupe : 95 % coton, 5 % élasthanne",
    "entretien": "Lavage à 30 °C, ne pas sécher en machine"
  },
  "ensemble-vichy": {
    "description": "Un t-shirt et un short en vichy rouge, bordés de crème : le tablier d’écolière qui aurait mal tourné.",
    "matiere": "Haut et short : 80 % coton, 20 % polyamide",
    "entretien": "Lavage délicat à 30 °C, séchage à plat"
  },
  "ensemble-pois": {
    "description": "Un top à manches courtes et une jupe à franges, crème à pois noirs : la sagesse d’une robe d’été, l’attitude en plus.",
    "matiere": "Haut et jupe : 100 % soie",
    "entretien": "Nettoyage à sec recommandé"
  },
  "ensemble-ecossais": {
    "description": "Une chemise oversize à col zippé et une jupe plissée dans le même écossais bordeaux : le règlement, version trop grande.",
    "matiere": "Chemise et jupe : 100 % coton",
    "entretien": "Lavage à 30 °C, repassage doux"
  },
  "veste-sport": {
    "description": "La veste de la capitaine d’équipe : col montant, liserés blancs, zip jusqu’au menton.",
    "matiere": "100 % polyester recyclé",
    "entretien": "Lavage à 30 °C, ne pas sécher en machine"
  },
  "surchemise-ecossaise": {
    "description": "Une chemise oversize à col zippé, dans un écossais bordeaux de cahier d’écolier. Elle a l’air d’avoir appartenu à un grand frère.",
    "matiere": "100 % coton",
    "entretien": "Lavage à 30 °C, repassage doux"
  },
  "tshirt-vichy": {
    "description": "Un petit t-shirt en vichy rouge, bordé de crème comme une nappe de pique-nique.",
    "matiere": "80 % coton, 20 % polyamide",
    "entretien": "Lavage délicat à 30 °C, séchage à plat"
  },
  "top-pois": {
    "description": "Manches courtes, pois noirs sur fond crème : le chemisier de la première de la classe, avec un clin d’œil en plus.",
    "matiere": "100 % soie",
    "entretien": "Nettoyage à sec recommandé"
  },
  "jupe-ecossaise": {
    "description": "Plissée, courte, à carreaux bordeaux : le règlement de l’école, raccourci de quelques centimètres.",
    "matiere": "100 % coton",
    "entretien": "Nettoyage à sec recommandé"
  },
  "jupe-pois": {
    "description": "Crème à pois noirs, avec des franges au bas : elle bouge quand on marche, et on le sait. Pour les soirs où l’on rentre tard.",
    "matiere": "100 % soie",
    "entretien": "Nettoyage à sec recommandé"
  },
  "short-sport": {
    "description": "Une jupe marine avec un cordon blanc qui pend : celle qu’on enfile pour sécher le cours.",
    "matiere": "95 % coton, 5 % élasthanne",
    "entretien": "Lavage à 30 °C"
  },
  "short-vichy": {
    "description": "Un short court en vichy rouge, bordé de crème : le tablier d’écolière, version été indien.",
    "matiere": "80 % coton, 20 % polyamide",
    "entretien": "Lavage délicat à 30 °C, séchage à plat"
  },
  "veste-capuche": {
    "description": "Une veste à capuche en velours côtelé, moutarde comme une feuille d’octobre. Oversize, zippée jusqu’au menton.",
    "matiere": "100 % coton",
    "entretien": "Lavage à 30 °C, séchage à plat"
  },
  "blouson-creme": {
    "description": "Un blouson crème bordé de marron, zippé comme un blouson d’équipe.",
    "matiere": "60 % coton, 40 % viscose. Passepoil : 100 % cuir de veau",
    "entretien": "Nettoyage à sec recommandé"
  },
  "veste-carreaux": {
    "description": "Une veste droite à carreaux beige et marron : la veste du professeur, empruntée et portée trop grande.",
    "matiere": "70 % laine, 30 % polyamide",
    "entretien": "Nettoyage à sec uniquement"
  },
  "blouson-chocolat": {
    "description": "Un blouson marron chocolat bordé de marron, col de chemise et zip jusqu’en haut.",
    "matiere": "100 % coton. Passepoil : 100 % cuir de veau",
    "entretien": "Nettoyage à sec recommandé"
  },
  "ensemble-velours": {
    "description": "Une veste à capuche et un short en velours côtelé moutarde, couleur de feuille d’octobre. L’uniforme de celle qui traverse la rue en courant, en retard au cours.",
    "matiere": "100 % coton",
    "entretien": "Lavage à 30 °C, séchage à plat"
  },
  "gilet-zippe": {
    "description": "Un gilet court, col montant, zippé jusqu’au menton ou à moitié. La maille douce de la bibliothèque, avec des paillettes sur l’écusson.",
    "matiere": "55 % laine, 30 % polyamide, 15 % mohair. Paillettes : polyester",
    "entretien": "Lavage à la main à 30 °C, séchage à plat"
  },
  "polo": {
    "description": "Le col d’une première de la classe, les rayures de la dernière du rang.",
    "matiere": "100 % coton",
    "entretien": "Lavage délicat à 30 °C, séchage à plat"
  },
  "polo-demi-zip": {
    "description": "Un polo à col demi-zip, beige et marron, à petits carreaux comme un pull de golf des années 70.",
    "matiere": "92 % polyester, 8 % élasthanne",
    "entretien": "Lavage à 30 °C"
  },
  "sandales-slingback": {
    "description": "Une sandale à bride arrière en cuir marron, bout ouvert, talon fin.",
    "matiere": "Dessus : cuir de veau. Semelle : cuir",
    "entretien": "Cirer avec un produit adapté"
  },
  "escarpins-bordeaux": {
    "description": "Un escarpin en vernis bordeaux, talon carré, orné d’une grosse boucle carrée rose et blanche : la chaussure de la fête de fin d’année.",
    "matiere": "Dessus : cuir de veau verni. Boucle : acétate. Semelle : cuir",
    "entretien": "Essuyer avec un chiffon doux"
  },
  "ballerines-satin": {
    "description": "Une ballerine en satin rosé, nœud sur le cou-de-pied, et un talon aiguille là où personne ne l’attend. Le cours de danse qui a mal tourné.",
    "matiere": "Dessus : satin de soie. Doublure et semelle : cuir",
    "entretien": "Nettoyage spécialisé uniquement"
  },
  "babies-vernies": {
    "description": "Une bride ronde fermée d’un bouton, un liseré blanc sur du vernis noir, un petit talon : la chaussure de la première du rang.",
    "matiere": "Dessus : cuir de veau verni. Semelle : cuir",
    "entretien": "Essuyer avec un chiffon doux"
  },
  "sandales-plateforme": {
    "description": "Une plateforme blanche et jaune, bride à la cheville : celle qu’on achète pour danser et qu’on porte pour tout le reste.",
    "matiere": "Dessus : cuir de veau métallisé. Semelle : caoutchouc",
    "entretien": "Cirer avec un produit adapté"
  },
  "babies-bicolores": {
    "description": "Deux brides, un bout noir, un argent qui brille : les babies de la fête de fin d’année.",
    "matiere": "Dessus : cuir de veau métallisé et verni. Semelle : cuir",
    "entretien": "Essuyer avec un chiffon doux"
  },
  "sac-croissant-rouge": {
    "description": "Un petit sac en cuir rouge cerise, qui tient dans la main. Pour les jours où l’on veut qu’on le regarde, juste un peu.",
    "matiere": "Cuir d’agneau nappa matelassé. Doublure : 100 % coton",
    "entretien": "Essuyer avec un chiffon doux et sec"
  },
  "sac-maille-gris": {
    "description": "Un sac en grosse maille grise, anse épaisse, plaque dorée. On le porte à l’épaule comme un pull qu’on aurait oublié sur une chaise.",
    "matiere": "Maille : 70 % laine, 30 % polyamide. Plaque : laiton doré",
    "entretien": "Brosser doucement, ne pas laver"
  },
  "sac-bowling-jaune": {
    "description": "Un sac jaune beurre, à habiller de tous les porte-clés rapportés de voyage. Le cartable de celle qui a oublié ses cahiers.",
    "matiere": "Cuir d’agneau nappa matelassé. Métal : laiton doré",
    "entretien": "Essuyer avec un chiffon doux et sec"
  },
  "sac-toile-beige": {
    "description": "Un sac de toile beige bordé de cuir marron, avec une anse unique qui se porte au creux du coude. Le sac de bibliothèque, version dimanche.",
    "matiere": "Toile : 100 % coton. Finitions : cuir de veau",
    "entretien": "Brosser doucement, ne pas laver"
  },
  "sac-verni-noir": {
    "description": "Du cuir verni noir, deux anses fines, un fermoir qui claque : le sac de la rentrée, en version soirée. Il accepte les breloques.",
    "matiere": "Cuir de veau verni. Métal : laiton doré",
    "entretien": "Essuyer avec un chiffon doux"
  },
  "sac-vert-eau": {
    "description": "Un sac vert d’eau, deux anses fines, aucune fioriture.",
    "matiere": "Cuir de veau grainé",
    "entretien": "Essuyer avec un chiffon doux et sec"
  },
  "robe-bretelles": {
    "description": "Une robe rose poudrée à fines bretelles, avec un petit nœud sur le buste : un nœud pour l’innocence, une coupe courte pour le reste.",
    "matiere": "100 % soie",
    "entretien": "Nettoyage à sec uniquement"
  },
  "robe-chemise-vichy": {
    "description": "Une robe-chemise à petits carreaux bleus, jupe plissée et ceinture noire.",
    "matiere": "100 % coton",
    "entretien": "Lavage à 30 °C, repassage doux"
  },
  "chaussettes-grises": {
    "description": "Des chaussettes hautes en côtes, gris flanelle, qui montent jusqu’au genou.",
    "matiere": "75 % coton, 23 % polyamide, 2 % élasthanne",
    "entretien": "Lavage à 30 °C, retourner avant lavage"
  },
  "serre-tete": {
    "description": "Un serre-tête large et rembourré, avec sa pince assortie en forme de goutte : crème, lettres dorées. Le genre de détail qui fait croire qu’on a pris son temps.",
    "matiere": "Cuir de veau. Lettres : laiton doré",
    "entretien": "Essuyer avec un chiffon doux et sec"
  },
  "chaussettes-olive": {
    "description": "Des chaussettes côtelées en maille fine, vert olive, qui montent sous le genou.",
    "matiere": "75 % coton, 23 % polyamide, 2 % élasthanne",
    "entretien": "Lavage délicat à 30 °C"
  },
  "lunettes-soleil": {
    "description": "Une monture en métal doré très fine, ovale, version bibliothécaire en vacances. À porter sur le bout du nez, pour avoir l’air de réfléchir.",
    "matiere": "Monture : métal doré. Verres : organiques teintés",
    "entretien": "Nettoyer avec un chiffon microfibre"
  },
  "pinces-cheveux": {
    "description": "Trois petites pinces dorées, émaillées de crème et de rose poudré. De quoi relever un chignon, ou fermer un cahier.",
    "matiere": "Laiton doré et émail",
    "entretien": "Essuyer avec un chiffon doux"
  },
  "robe-bleu-noeud": {
    "description": "Une robe bleu pastel, toute simple, et un nœud qui fait tout le travail.",
    "matiere": "Robe : 100 % coton. Nœud : 100 % soie",
    "entretien": "Nettoyage à sec recommandé"
  },
  "jupe-orange": {
    "description": "Une mini-jupe orange comme un jus d’automne, brodée de losanges perlés qui accrochent la lumière.",
    "matiere": "Extérieur : polyester brodé de perles et cristaux. Doublure : 100 % soie",
    "entretien": "Nettoyage à sec uniquement"
  },
  "short-moutarde": {
    "description": "Un short court en velours côtelé moutarde, taille basse. Le même jaune que les feuilles du parc, la même envie de traverser en courant.",
    "matiere": "100 % coton",
    "entretien": "Lavage à 30 °C, séchage à plat"
  },
  "jupe-blanche": {
    "description": "Une jupe plissée blanche à liserés marine, ceinture noire et petit écusson : la jupe de tennis de celle qui joue surtout dans les vestiaires.",
    "matiere": "98 % coton, 2 % élasthanne",
    "entretien": "Lavage à 30 °C, repassage doux"
  },
  "jupe-plissee-bleue": {
    "description": "Plissée, longue jusqu’aux mollets, à carreaux bleu-gris : la jupe de la prof de gym qui avait du goût.",
    "matiere": "100 % coton",
    "entretien": "Nettoyage à sec recommandé"
  }
};
Object.keys(DETAILS).forEach(function (id) { if (PRODUITS[id]) Object.assign(PRODUITS[id], DETAILS[id]); });

const SAC = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';

// ===== Favoris et panier : sauvegardés dans le navigateur =====
function lire(cle) { try { return JSON.parse(localStorage.getItem(cle)) || []; } catch (e) { return []; } }
function ecrire(cle, valeur) { try { localStorage.setItem(cle, JSON.stringify(valeur)); } catch (e) {} }
let favoris = lire('favoris-miumiu');
let panier = lire('panier-miumiu');
function basculer(liste, id) { return liste.includes(id) ? liste.filter(function (x) { return x !== id; }) : liste.concat(id); }

function carteProduit(id) {
  const p = PRODUITS[id];
  const visuel = p.image ? '<img src="images/' + p.image + '" alt="' + p.nom + '">' : '<div class="visuel">Photo</div>';
  return '<article class="produit vu"><a class="lien-produit" href="produit.html?id=' + id + '">' + visuel + '<h3>' + p.nom + '</h3></a>' +
    '<div class="ligne"><span>' + p.texte + '</span><span class="actions">' +
    '<button class="coeur" data-id="' + id + '" aria-pressed="false"></button>' +
    '<button class="sac-btn" data-id="' + id + '" aria-pressed="false">' + SAC + '</button></span></div></article>';
}

// Page produit : l'identifiant vient de l'adresse (produit.html?id=robe)
function idProduit() {
  if (location.hash.indexOf('#produit=') === 0) return decodeURIComponent(location.hash.slice(9));
  return new URLSearchParams(location.search).get('id');
}
const COULEURS = [['var(--bleu-gris)', 'var(--brun)'], ['var(--brun)', 'var(--creme)'], ['var(--caramel)', 'var(--creme)']];
const MATIERES = {"robes.html": ["100 % soie", "Nettoyage à sec uniquement"], "tops.html": ["100 % coton", "Lavage à 30 °C"], "ensembles.html": ["100 % coton", "Lavage à 30 °C"], "jupes.html": ["100 % coton", "Lavage à 30 °C"], "manteaux.html": ["70 % laine, 30 % polyamide", "Nettoyage à sec uniquement"], "sacs.html": ["Cuir de veau", "Essuyer avec un chiffon doux et sec"], "chaussures.html": ["Dessus : cuir de veau. Semelle : cuir", "Cirer avec un produit adapté"], "accessoires.html": ["Voir l’étiquette de chaque produit", "Voir l’étiquette de chaque produit"]};
function fiche(id, p) {
  const defaut = MATIERES[p.page] || ['', ''];
  const m = [p.matiere || defaut[0], p.entretien || defaut[1]];
  const ref = 'MM-' + String(Object.keys(PRODUITS).indexOf(id) + 1).padStart(3, '0');
  return '<div class="accordeon">' +
    '<details><summary>Détail du produit</summary><dl>' +
    '<div><dt>Matière</dt><dd>' + m[0] + '</dd></div><div><dt>Entretien</dt><dd>' + m[1] + '</dd></div><div><dt>Référence</dt><dd>' + ref + '</dd></div></dl></details>' +
    '<details><summary>Livraison et retours</summary><p>Livraison offerte, en 3 à 5 jours ouvrés. Expédition sous 48 h, avec un suivi par e‑mail.</p><p>Retours gratuits sous 30 jours, pour un article non porté, dans son emballage d’origine.</p></details>' +
    '</div>';
}
function rendreDetail() {
  const zone = document.getElementById('detail-produit');
  if (!zone) return;
  const id = idProduit();
  const p = PRODUITS[id];
  document.getElementById('introuvable').hidden = !!p;
  document.getElementById('aussi').hidden = !p;
  if (!p) { zone.innerHTML = ''; zone.dataset.id = ''; return; }
  if (zone.dataset.id === id && zone.innerHTML) return;  // même produit : on ne refait pas la fiche (les volets restent ouverts)
  zone.dataset.id = id;
  const freres = Object.keys(PRODUITS).filter(function (k) { return PRODUITS[k].page === p.page; });
  const c = COULEURS[freres.indexOf(id) % COULEURS.length];
  const visuel = p.image ? '<img src="images/' + p.image + '" alt="' + p.nom + '">' : 'Photo';
  zone.innerHTML = '<div class="detail-visuel" style="background:' + c[0] + ';color:' + c[1] + '">' + visuel + '</div>' +
    '<div class="detail-infos"><a class="retour" href="' + p.page + '">← Retour : ' + p.categorie + '</a>' +
    '<h1>' + p.nom + '</h1><p class="detail-prix">' + p.texte + '</p>' +
    '<div class="detail-actions"><button class="btn btn-panier" type="button" data-id="' + id + '"></button>' +
    '<button class="btn contour btn-fav" type="button" data-id="' + id + '"></button></div>' + fiche(id, p) + '</div>';
  document.getElementById('liste-aussi').innerHTML = freres.filter(function (k) { return k !== id; }).map(carteProduit).join('');
  if (location.hash.indexOf('#produit=') !== 0) document.title = p.nom + ' – Not your pretty little thing';
}


// Apparition douce des produits au défilement
const observateurCartes = 'IntersectionObserver' in window ? new IntersectionObserver(function (entrees) {
  entrees.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('vu'); observateurCartes.unobserve(e.target); }
  });
}, { threshold: 0.15 }) : null;
function surveillerCartes() {
  document.querySelectorAll('.produit:not(.vu)').forEach(function (carte) {
    if (observateurCartes) observateurCartes.observe(carte); else carte.classList.add('vu');
  });
}

function rendre() {
  rendreDetail();
  const listeF = document.getElementById('liste-favoris');
  if (listeF) {
    const ids = favoris.filter(function (id) { return PRODUITS[id]; });
    listeF.innerHTML = ids.map(carteProduit).join('');
    document.getElementById('vide-favoris').hidden = ids.length > 0;
  }
  const listeP = document.getElementById('liste-panier');
  if (listeP) {
    const ids = panier.filter(function (id) { return PRODUITS[id]; });
    listeP.innerHTML = ids.map(function (id) {
      const p = PRODUITS[id];
      const visuel = p.image ? '<img class="mini" src="images/' + p.image + '" alt="' + p.nom + '">' : '<div class="mini">Photo</div>';
      return '<li class="ligne-panier">' + visuel + '<a href="produit.html?id=' + id + '">' + p.nom + '</a><span>' + p.texte + '</span>' +
        '<button class="retirer" type="button" data-id="' + id + '" aria-label="Retirer ' + p.nom + ' du panier">Retirer</button></li>';
    }).join('');
    const total = ids.reduce(function (somme, id) { return somme + PRODUITS[id].prix; }, 0);
    document.getElementById('total-panier').textContent = total.toLocaleString('fr-FR') + ' €';
    document.getElementById('resume-panier').hidden = ids.length === 0;
    document.getElementById('vide-panier').hidden = ids.length > 0;
  }
  synchroniser();
  surveillerCartes();
}

// Met à jour tous les boutons cœur / sac et les petits points de l'en-tête
function synchroniser() {
  document.querySelectorAll('.coeur').forEach(function (b) {
    const actif = favoris.includes(b.dataset.id);
    const nom = PRODUITS[b.dataset.id] ? PRODUITS[b.dataset.id].nom : 'ce produit';
    b.setAttribute('aria-pressed', String(actif));
    b.textContent = actif ? '♥' : '♡';
    b.setAttribute('aria-label', (actif ? 'Retirer ' + nom + ' des favoris' : 'Ajouter ' + nom + ' aux favoris'));
  });
  document.querySelectorAll('.sac-btn').forEach(function (b) {
    const actif = panier.includes(b.dataset.id);
    const nom = PRODUITS[b.dataset.id] ? PRODUITS[b.dataset.id].nom : 'ce produit';
    b.setAttribute('aria-pressed', String(actif));
    b.setAttribute('aria-label', (actif ? 'Retirer ' + nom + ' du panier' : 'Ajouter ' + nom + ' au panier'));
  });
  document.querySelectorAll('.btn-panier').forEach(function (b) { b.textContent = panier.includes(b.dataset.id) ? 'Retirer du panier' : 'Ajouter au panier'; });
  document.querySelectorAll('.btn-fav').forEach(function (b) { b.textContent = favoris.includes(b.dataset.id) ? '♥ Retirer des favoris' : '♡ Ajouter aux favoris'; });
  const pf = document.querySelector('#compteur .point');
  const pp = document.querySelector('.panier .point');
  if (pf) pf.hidden = favoris.length === 0;
  if (pp) pp.hidden = panier.length === 0;
  const lf = document.getElementById('compteur');
  const lp = document.querySelector('.panier');
  if (lf) lf.setAttribute('aria-label', favoris.length ? 'Mes favoris (' + favoris.length + ')' : 'Mes favoris');
  if (lp) lp.setAttribute('aria-label', panier.length ? 'Panier (' + panier.length + ')' : 'Panier');
}

document.addEventListener('click', function (e) {
  const coeur = e.target.closest('.coeur');
  const sac = e.target.closest('.sac-btn');
  const retirer = e.target.closest('.retirer');
  const boutonPanier = e.target.closest('.btn-panier');
  const boutonFav = e.target.closest('.btn-fav');
  if (coeur) { favoris = basculer(favoris, coeur.dataset.id); ecrire('favoris-miumiu', favoris); rendre(); }
  if (sac) { panier = basculer(panier, sac.dataset.id); ecrire('panier-miumiu', panier); rendre(); }
  if (retirer) { panier = basculer(panier, retirer.dataset.id); ecrire('panier-miumiu', panier); rendre(); }
  if (boutonPanier) { panier = basculer(panier, boutonPanier.dataset.id); ecrire('panier-miumiu', panier); rendre(); }
  if (boutonFav) { favoris = basculer(favoris, boutonFav.dataset.id); ecrire('favoris-miumiu', favoris); rendre(); }
  if (e.target.id === 'commander') {
    document.getElementById('msg-commande').textContent = "Merci ! Ceci est un projet fictif : aucune commande n'a été passée.";
  }
});
window.addEventListener('hashchange', rendre);
rendre();

// Newsletter simulée (page d'accueil uniquement) : n'envoie rien
const form = document.getElementById('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.getElementById('confirmation').textContent = 'Merci ! Vous êtes inscrit·e.';
    form.reset();
  });
}

// Menu (3 barres) : s'ouvre à gauche avec les catégories
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const voile = document.querySelector('.voile');
const boutonVetements = menu.querySelector('.menu-lien');
const sousMenu = document.getElementById('sous-menu');

// Second panneau (à droite du menu) : les catégories du prêt-à-porter
function basculerSousMenu(ouvrir) {
  sousMenu.classList.toggle('ouvert', ouvrir);
  boutonVetements.setAttribute('aria-expanded', String(ouvrir));
}
function basculerMenu(ouvrir) {
  menu.classList.toggle('ouvert', ouvrir);
  voile.classList.toggle('ouvert', ouvrir);
  burger.setAttribute('aria-expanded', String(ouvrir));
  if (!ouvrir) basculerSousMenu(false);
}
burger.addEventListener('click', function () { basculerMenu(true); });
voile.addEventListener('click', function () { basculerMenu(false); });
menu.querySelector('.menu-fermer').addEventListener('click', function () { basculerMenu(false); });
boutonVetements.addEventListener('click', function () { basculerSousMenu(!sousMenu.classList.contains('ouvert')); });
sousMenu.querySelector('.sous-retour').addEventListener('click', function () { basculerSousMenu(false); });
menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { basculerMenu(false); }); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') basculerMenu(false); });
