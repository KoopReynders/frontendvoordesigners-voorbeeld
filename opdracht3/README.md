# Complexe functionaliteit met externe data
Er moet een functionaliteit ontworpen worden met externe data. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers het ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

# 1e test - [functionaliteitmetexternedatatest01](https://joopakerboom.github.io/frontendvoordesigners/opdracht3/functionaliteitmetexternedatatest01/)

<img align="right" src="https://oege.ie.hva.nl/~akerboj001/githubimages/test09.png" width="200"> 

<em>De eerste versie heeft een focus op de gebruiker de feedback te geven dat er data wordt geladen. Dit gaat doormiddel van een load-animatie. Ik heb er voor gekozen om dit in een skeletvorm te doen, omdat de gebruiker dan een indruk geeft hoe het er ongeveer uit gaat zien. Hiernaast wordt de data weergegeven aan de hand van de Movie API. </em>

> Test persoon: Damayanti Blankestijn - Maandag 25 maart

1. Damayanti vindt de loading state tegen de stroom ingaan aangezien sommige animaties naar beneden gaan. Daarnaast vindt ze het skelet een fijne loading state, omdat ze nu ziet hoe het er ongeveer uit gaat zien als het laden af is.





# 2e test - [functionaliteitmetexternedatatest02](https://joopakerboom.github.io/frontendvoordesigners/opdracht3/functionaliteitmetexternedatatest02/)

<img align="right" src="https://oege.ie.hva.nl/~akerboj001/githubimages/test10.png" width="200"> 

<em>De tweede versie heeft een focus op een duidelijkere UI, hierbij is de loading animatie aangepast aan de hand van de feedback. Nu gaat de loading animatie van boven naar beneden, dit heb ik gedaan zodat het op één lijn zit met meerdere animaties op de overzichtspagina. </em>

> Test persoon: Damayanti Blankestijn - Maandag 2 april

1. Damayanti vindt de tekst moeilijk leestbaar op de detailpagina's, omdat op sommige pagina's dit wegvalt. Dit komt waarschijnlijk doordat de achtergrond afbeeldingen (posters) veel tekst bevat. Dit kan storen met de tekst van de UI.
2. Damayanti vindt de reviews een leuke toevoeging. De paarse kleur klikt erg goed bij haar, omdat zij nu een duidelijke verdeling ziet tussen de verschillende secties. Wat bij de film hoort en los van de film is.

# 3e test/ definitieve versie - [functionaliteitmetexternedatatest03](https://joopakerboom.github.io/frontendvoordesigners/opdracht3/functionaliteitmetexternedatatest03/)

<img align="right" src="https://oege.ie.hva.nl/~akerboj001/githubimages/test11.png" width="200"> 

<em>De derde en definitieve versie heeft een focus op de laatste dingen die de UI wat schoner maken aan de hand van de API. Daarnaast hebben de detailpagina's een overlay over de image gekregen, zodat de tekst die er voor staat beter leesbaar is. Iedere pagina kan nu toegevoegd worden aan "mijn lijst" en extra informatie worden bekeken. Dit was de laatste uitdaging van de UI en interactie, aangezien het eerst alleen bij de eerste film werkte.</em>

# De Principles of User Interface Design no. 04, 09 en 11 

> No. 04 - Keep users in control

In de verschillende testvarianten heb ik het "film-toevoegen" icoon rechtsboven geplaatst. Hierdoor is er een visuele hierarchie en verwacht de gebruiker ook iets in deze "area" terug te zien. In de verschillende versies wordt de system status terug gegeven als feedback dat de film is toegevoegd. Hierdoor krijgt de gebruiker het gevoel alsof zij in controle is. Daarnaast wordt er weergegeven in de "status/ home bar" dat er een film is toegevoegd in de vorm van een "1".

Als de gebruiker de film wil verwijderen dan had ik in de eerste 4 versies de zelfde opslaan knop gebruikt als verwijder knop. Dit kon zorgen voor verwarring en dat de gebruiker geen overzicht had waar deze verwijderd kon worden. Dit heb ik veranderd door een dragbar animerend in te laten komen waardoor de gebruiker dit opzij kan "draggen" om vervolgens op een verwijder knop te drukken. Hierdoor weet de gebruiker precies waar hij aan toe is.

Dit geld het zelfde voor de overzichts als de detail pagina.

> No. 09 - Appearance follows behavior

Op de detailpagina zijn er in de rechteronder hoek 2 pijltjes te vinden. Wanneer er op deze pijltjes geklikt wordt, komt er aan de hand van het gelkikte pijltje een nieuwe afbeelding van de tegengestelde richting in beeld. Wanneer de gebruiker ook swiped door deze images gebeurd het zelfde. Hierbij wordt de flow van de swipe nagebootst en gaat de image in de beweging van de swipe mee als deze in beeld komt.

Wanneer de gebruiker een tab aanklikt wat meer verdiepende informatie van de film bevat, zoals de "storyline". Licht deze titel op samen met een underline. De logisch volgende stap is om de "cast" tab aan te klikken en wanneer de gebruiker dit doet zal dit tab oplichten en de underline met een animatie mee bewegen. Dit motiveert de gebruiker om ook de laatste tab aan te klikken, omdat de underline steeds verder en mee gaat.

> No. 11 - Strong visual hierarchies work best

Door de afbeeldingen van de films centraal te stellen zijn de gebruikers op de hoogte over welke film het gaat los van de titel. Deze titel staat groot in beeld met daarboven een kleinere titel met de toegewezen genre.

Door middel van een icoon in de rechter boven en onder hoek kan de gebruiker interacteren. De icoon rechtsboven laat zien of de film is toegevoegd of niet, dit gebeurd doormiddel van een "plusje" en een "vinkje" die allebei een passende kleur hebben. Dit geeft de gebruiker in een oogopslag een overzicht van haar toegevoegde films. Het ronde icoon rechts onder, moet de gebruiker uitnodigen om ingedrukt te houden, dit rondje is daarom ook niet ingevuld van binnen. Dit maakt de interface ook minder druk en toegankelijker.

Op de detailpagina gelden deze zelfde beschrijvingen, daarbij toegevoegd is de reviewscore. Doormiddel van een andere kleur is het voor de gebruiker duidelijk, dat de aankomende sectie (de review sectie) los staat van de diepgaande informatie over de film zelf. In de review sectie zelf staat het cijfer centraal waar de gebruiker als eerst naar moet kijken, om meteen een indruk te krijgen hoe goed de film is. Hier hoeft dan niet naar gezocht worden.
