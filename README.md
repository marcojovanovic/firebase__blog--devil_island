## Dokumentacija



 ![alt text](https://images.pexels.com/photos/2125075/pexels-photo-2125075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 "Devil Island")




### Osnovne tehnologije projekta

```
 #authentication
 #firebase, 
 #push form data to firebase,
 #update, delete firebase information
 #firebase security
 #protected routes
 #styled components
 #local storage
 #context api 
 #notify
 #responsive
 #box-reflect
 #deployment


```

> Odmah da naglasim da projekat nije preuzet sa nekog YouTube tutorijala ili kursa. 
  Obicno se na nekog ko konkurise za praksu ili junior poslove donekle sumnja da je maznuo projekat sa nekog kursa i postavio kao svoj. Kandidat za posao slusa savet sa YouTuba i za dan copy/paste odradi nekoliko projekata i spreman je za posao !  



## Dokumentacija

[firebase auth](https://firebase.google.com/docs/auth/web/start)
[firebase manage users](https://firebase.google.com/docs/auth/web/manage-users)
[firebase user token](https://firebase.google.com/docs/auth/users)
[firebase auth email and password](https://firebase.google.com/docs/auth/web/email-link-auth)
[firebase auth sign out](https://firebase.google.com/docs/auth/web/custom-auth)
[firebase firestore basic](https://firebase.google.com/docs/firestore/data-model)
[Private routes](https://ui.dev/react-router-v5-protected-routes-authentication/)
[firebase firestore work with data](https://firebase.google.com/docs/firestore/query-data/get-data)
[firebase firestore order and limit ](https://firebase.google.com/docs/firestore/query-data/order-limit-data)
[firebase firstore data query](https://firebase.google.com/docs/firestore/query-data/queries)

[firebase firstore security](https://firebase.google.com/docs/firestore/security/rules-structure)

[css filters](https://firebase.google.com/docs/firestore/security/rules-structure)


[styled components](https://styled-components.com/)

[context api](https://reactjs.org/docs/context.html)

[css reflections](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect)




# Context API 

Ovo je jedan od mnogih projekata koje sam radio sam context api, i verovatno jedan od poslednjih, jer je vreme da predjem da radim stalno sa pattern useContext + useReducer a mozda i sa Redux, sve to zavisi od poslodavca i ustaljene prakse, verovatno sa Typscriptom koji nije tezak ali dosta usporava proces rada i resava problem bagova za samo 15%.

Navikao sam veoma na rad sa Context API, da provlaciti props iz komponente u komponentu dozivljavam kako maltretiranje


# Firebase 

Neko vreme radim male projekte sa Firebase i moram da priznam da mi se dopada i da sam je savladao, no moj utisak je da kada se radi veliki projekti jako je tesko uspostaviti relacione odnose izmedju tabela i podataka. Tehnicki firebase to moze, ali treba dosta akrobacija izvesti i malo nategnuti. Za potrebe Bloga, moze da bude odlicno iii Forme dakle za sve moje potrebe, ali mislim da na nekom industrijskom levelu, to treba raditi sa MongoDB ili SQL


# Folder order

Dosta sam naucio i kako da organizujem foldere, nadam se da bilo ko gleda projekat moze lako utvrditi gde se sta nalazi, gde je firebase, koje stranice su dostupne za routing, global styling from styled components, context kao i manje komponente. Od sada na ovaj nacin uvek cu raditi, naravno ako vec tezim ka nekom jos profesionalnijoj organizaciji tu bih dodao poseban folder za redux, es lint i neophodne typescript fajlove. 


# Nedostaci projekta (Kako bih ga unapredio)

1. Najpre u oci upada los editor, koji nema neka bolje mogucnosti kod pisanja teksta, naravno da sam se ja setio SK Editora, no njegova integracija sa kontrolisanim React Forms je bila neizvodljiva, to je postao problem urediti, ako i svaki drugi editor koji sam pokusao. Tako da sam uradio bez editora, no u medjuvremenu sam naucio da radim sa use-hook-forms i uvideo da je trebalo tim putem da krenem i da bih ga lako sa njim integrisoa SK Editor.No, vremena nema na pretek, tako da je ostalo kako sam krenuo po defaultu.

2. Onda svaki korisnik koji ima nalog treba da ima mogucnost da vidi sve postove, ali da menja samo one postove koje je on licno napisao. Imam i ideju sada kako to realizovati ali u momentu rada nisam jos znao za id koji mogu dobiti od svakog korisnika ponaosob i raditi sa njim

3. Postaviti kategorije: Recimo da klikom na polje se filtriraju blogovi, recimo vezano za nocenje na Djavoljem ostrvu lli za plaze i da obuhvata sve blogove koji su povezani sa plazama

4. Filter postaviti u Navbaru tako da korisnk filtira blogove prema naslovu

5. Pagination gde ce na svakoj strani biti prikazano 10 blogova

6. Framer Motion sa jednostavnim animacijama bi unapredio korisnicko iskustvo

7. Showcase neka vrsta headera nakon Navbara sa nekom animacijom


8. Optimizovati loading postova

