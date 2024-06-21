import { memo } from "react";
import tfcImage from "./assets/bandeau-tcf-canada.jpg";
const App = memo(() => {
  return (
    <div className="grid grid-flow-col mx-auto relative max-w-5xl  gap-10 justify-center items-start h-full my-16">
      <form action="#" className="">
        <div className="w-fit grid gap-6">
          <div>
            <label htmlFor="">email</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-3">
              <label className="-translate-y-2">
                <span>nom</span>
                <input type="text" name="" id="name" placeholder="doe" />
              </label>
              <label htmlFor="">
                <span>prenom</span>
                <input type="text" name="" id="firstname" placeholder="john" />
              </label>
            </div>
            <div className="order-first grid place-items-center border-dashed border-2 border-blue-300">
              <input type="file" name="kyc[avatar]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <label htmlFor="">
              mot de passe
              <input type="password" id="password" placeholder="****" />
            </label>
            <label htmlFor="">
              date naissance
              <input type="date" id="birthdate" placeholder="jj/mm/yyyy" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label>pays naissance</label>
              <select name="utilisateur[birthPlace]" required defaultValue={"Cameroun"}>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Afrique du Sud">Afrique du Sud</option>
                <option value="Albanie">Albanie</option>
                <option value="Algérie">Algérie</option>
                <option value="Allemagne">Allemagne</option>
                <option value="Andorre">Andorre</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctique">Antarctique</option>
                <option value="Antigua-et-Barbuda">Antigua-et-Barbuda</option>
                <option value="Antilles Néerlandaises">
                  Antilles Néerlandaises
                </option>
                <option value="Arabie Saoudite">Arabie Saoudite</option>
                <option value="Argentine">Argentine</option>
                <option value="Arménie">Arménie</option>
                <option value="Aruba">Aruba</option>
                <option value="Australie">Australie</option>
                <option value="Autriche">Autriche</option>
                <option value="Azerbaïdjan">Azerbaïdjan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahreïn">Bahreïn</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbade">Barbade</option>
                <option value="Bélarus">Bélarus</option>
                <option value="Belgique">Belgique</option>
                <option value="Belize">Belize</option>
                <option value="Bénin">Bénin</option>
                <option value="Bermudes">Bermudes</option>
                <option value="Bhoutan">Bhoutan</option>
                <option value="Bolivie">Bolivie</option>
                <option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
                <option value="Botswana">Botswana</option>
                <option value="Brésil">Brésil</option>
                <option value="Brunéi Darussalam">Brunéi Darussalam</option>
                <option value="Bulgarie">Bulgarie</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodge">Cambodge</option>
                <option value="Cameroun">
                  Cameroun
                </option>
                <option value="Canada">Canada</option>
                <option value="Cap-vert">Cap-vert</option>
                <option value="Chili">Chili</option>
                <option value="Chine">Chine</option>
                <option value="Chypre">Chypre</option>
                <option value="Colombie">Colombie</option>
                <option value="Comores">Comores</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Croatie">Croatie</option>
                <option value="Cuba">Cuba</option>
                <option value="Danemark">Danemark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominique">Dominique</option>
                <option value="Égypte">Égypte</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Émirats Arabes Unis">Émirats Arabes Unis</option>
                <option value="Équateur">Équateur</option>
                <option value="Érythrée">Érythrée</option>
                <option value="Espagne">Espagne</option>
                <option value="Estonie">Estonie</option>
                <option value="États Fédérés de Micronésie">
                  États Fédérés de Micronésie
                </option>
                <option value="États-Unis">États-Unis</option>
                <option value="Éthiopie">Éthiopie</option>
                <option value="Fédération de Russie">
                  Fédération de Russie
                </option>
                <option value="Fidji">Fidji</option>
                <option value="Finlande">Finlande</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambie">Gambie</option>
                <option value="Géorgie">Géorgie</option>
                <option value="Géorgie du Sud et les Îles Sandwich du Sud">
                  Géorgie du Sud et les Îles Sandwich du Sud
                </option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Grèce">Grèce</option>
                <option value="Grenade">Grenade</option>
                <option value="Groenland">Groenland</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinée">Guinée</option>
                <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                <option value="Guinée-Bissau">Guinée-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Guyane Française">Guyane Française</option>
                <option value="Haïti">Haïti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong-Kong">Hong-Kong</option>
                <option value="Hongrie">Hongrie</option>
                <option value="Île Bouvet">Île Bouvet</option>
                <option value="Île Christmas">Île Christmas</option>
                <option value="Île de Man">Île de Man</option>
                <option value="Île Norfolk">Île Norfolk</option>
                <option value="Îles (malvinas) Falkland">
                  Îles (malvinas) Falkland
                </option>
                <option value="Îles Åland">Îles Åland</option>
                <option value="Îles Caïmanes">Îles Caïmanes</option>
                <option value="Îles Cocos (Keeling)">
                  Îles Cocos (Keeling)
                </option>
                <option value="Îles Cook">Îles Cook</option>
                <option value="Îles Féroé">Îles Féroé</option>
                <option value="Îles Heard et Mcdonald">
                  Îles Heard et Mcdonald
                </option>
                <option value="Îles Mariannes du Nord">
                  Îles Mariannes du Nord
                </option>
                <option value="Îles Marshall">Îles Marshall</option>
                <option value="Îles Mineures Éloignées des États-Unis">
                  Îles Mineures Éloignées des États-Unis
                </option>
                <option value="Îles Salomon">Îles Salomon</option>
                <option value="Îles Turks et Caïques">
                  Îles Turks et Caïques
                </option>
                <option value="Îles Vierges Britanniques">
                  Îles Vierges Britanniques
                </option>
                <option value="Îles Vierges des États-Unis">
                  Îles Vierges des États-Unis
                </option>
                <option value="Inde">Inde</option>
                <option value="Indonésie">Indonésie</option>
                <option value="Iraq">Iraq</option>
                <option value="Irlande">Irlande</option>
                <option value="Islande">Islande</option>
                <option value="Israël">Israël</option>
                <option value="Italie">Italie</option>
                <option value="Jamahiriya Arabe Libyenne">
                  Jamahiriya Arabe Libyenne
                </option>
                <option value="Jamaïque">Jamaïque</option>
                <option value="Japon">Japon</option>
                <option value="Jordanie">Jordanie</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kirghizistan">Kirghizistan</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Koweït">Koweït</option>
                <option value="L'ex-République Yougoslave de Macédoine">
                  L'ex-République Yougoslave de Macédoine
                </option>
                <option value="Lesotho">Lesotho</option>
                <option value="Lettonie">Lettonie</option>
                <option value="Liban">Liban</option>
                <option value="Libéria">Libéria</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lituanie">Lituanie</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaisie">Malaisie</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malte">Malte</option>
                <option value="Maroc">Maroc</option>
                <option value="Martinique">Martinique</option>
                <option value="Maurice">Maurice</option>
                <option value="Mauritanie">Mauritanie</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexique">Mexique</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolie">Mongolie</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibie">Namibie</option>
                <option value="Nauru">Nauru</option>
                <option value="Népal">Népal</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigéria">Nigéria</option>
                <option value="Niué">Niué</option>
                <option value="Norvège">Norvège</option>
                <option value="Nouvelle-Calédonie">Nouvelle-Calédonie</option>
                <option value="Nouvelle-Zélande">Nouvelle-Zélande</option>
                <option value="Oman">Oman</option>
                <option value="Ouganda">Ouganda</option>
                <option value="Ouzbékistan">Ouzbékistan</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palaos">Palaos</option>
                <option value="Panama">Panama</option>
                <option value="Papouasie-Nouvelle-Guinée">
                  Papouasie-Nouvelle-Guinée
                </option>
                <option value="Paraguay">Paraguay</option>
                <option value="Pays-Bas">Pays-Bas</option>
                <option value="Pérou">Pérou</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Pologne">Pologne</option>
                <option value="Polynésie Française">Polynésie Française</option>
                <option value="Porto Rico">Porto Rico</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="République Arabe Syrienne">
                  République Arabe Syrienne
                </option>
                <option value="République Centrafricaine">
                  République Centrafricaine
                </option>
                <option value="République de Corée">République de Corée</option>
                <option value="République de Moldova">
                  République de Moldova
                </option>
                <option value="République Démocratique du Congo">
                  République Démocratique du Congo
                </option>
                <option value="République Démocratique Populaire Lao">
                  République Démocratique Populaire Lao
                </option>
                <option value="République Dominicaine">
                  République Dominicaine
                </option>
                <option value="République du Congo">République du Congo</option>
                <option value="République Islamique d'Iran">
                  République Islamique d'Iran
                </option>
                <option value="République Populaire Démocratique de Corée">
                  République Populaire Démocratique de Corée
                </option>
                <option value="République Tchèque">République Tchèque</option>
                <option value="République-Unie de Tanzanie">
                  République-Unie de Tanzanie
                </option>
                <option value="Réunion">Réunion</option>
                <option value="Roumanie">Roumanie</option>
                <option value="Royaume-Uni">Royaume-Uni</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Sahara Occidental">Sahara Occidental</option>
                <option value="Saint-Kitts-et-Nevis">
                  Saint-Kitts-et-Nevis
                </option>
                <option value="Saint-Marin">Saint-Marin</option>
                <option value="Saint-Pierre-et-Miquelon">
                  Saint-Pierre-et-Miquelon
                </option>
                <option value="Saint-Siège (état de la Cité du Vatican)">
                  Saint-Siège (état de la Cité du Vatican)
                </option>
                <option value="Saint-Vincent-et-les Grenadines">
                  Saint-Vincent-et-les Grenadines
                </option>
                <option value="Sainte-Hélène">Sainte-Hélène</option>
                <option value="Sainte-Lucie">Sainte-Lucie</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa Américaines">Samoa Américaines</option>
                <option value="Sao Tomé-et-Principe">
                  Sao Tomé-et-Principe
                </option>
                <option value="Sénégal">Sénégal</option>
                <option value="Serbie-et-Monténégro">
                  Serbie-et-Monténégro
                </option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapour">Singapour</option>
                <option value="Slovaquie">Slovaquie</option>
                <option value="Slovénie">Slovénie</option>
                <option value="Somalie">Somalie</option>
                <option value="Soudan">Soudan</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Suède">Suède</option>
                <option value="Suisse">Suisse</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard etÎle Jan Mayen">
                  Svalbard etÎle Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Tadjikistan">Tadjikistan</option>
                <option value="Taïwan">Taïwan</option>
                <option value="Tchad">Tchad</option>
                <option value="Terres Australes Françaises">
                  Terres Australes Françaises
                </option>
                <option value="Territoire Britannique de l'Océan Indien">
                  Territoire Britannique de l'Océan Indien
                </option>
                <option value="Territoire Palestinien Occupé">
                  Territoire Palestinien Occupé
                </option>
                <option value="Thaïlande">Thaïlande</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinité-et-Tobago">Trinité-et-Tobago</option>
                <option value="Tunisie">Tunisie</option>
                <option value="Turkménistan">Turkménistan</option>
                <option value="Turquie">Turquie</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Wallis et Futuna">Wallis et Futuna</option>
                <option value="Yémen">Yémen</option>
                <option value="Zambie">Zambie</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div>
              <label>sexe</label>
              <select name="utilisateur[sexe]" defaultValue={"masculin"}>
                <option value="masculin">homme</option>
                <option value="feminin">femme</option>
                <option value="non binaire">non binaire</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label>nationalite</label>
              <select name="utilisateur[nationalite]" required defaultValue={"Cameroun"}>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Afrique du Sud">Afrique du Sud</option>
                <option value="Albanie">Albanie</option>
                <option value="Algérie">Algérie</option>
                <option value="Allemagne">Allemagne</option>
                <option value="Andorre">Andorre</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctique">Antarctique</option>
                <option value="Antigua-et-Barbuda">Antigua-et-Barbuda</option>
                <option value="Antilles Néerlandaises">
                  Antilles Néerlandaises
                </option>
                <option value="Arabie Saoudite">Arabie Saoudite</option>
                <option value="Argentine">Argentine</option>
                <option value="Arménie">Arménie</option>
                <option value="Aruba">Aruba</option>
                <option value="Australie">Australie</option>
                <option value="Autriche">Autriche</option>
                <option value="Azerbaïdjan">Azerbaïdjan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahreïn">Bahreïn</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbade">Barbade</option>
                <option value="Bélarus">Bélarus</option>
                <option value="Belgique">Belgique</option>
                <option value="Belize">Belize</option>
                <option value="Bénin">Bénin</option>
                <option value="Bermudes">Bermudes</option>
                <option value="Bhoutan">Bhoutan</option>
                <option value="Bolivie">Bolivie</option>
                <option value="Bosnie-Herzégovine">Bosnie-Herzégovine</option>
                <option value="Botswana">Botswana</option>
                <option value="Brésil">Brésil</option>
                <option value="Brunéi Darussalam">Brunéi Darussalam</option>
                <option value="Bulgarie">Bulgarie</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodge">Cambodge</option>
                <option value="Cameroun" >
                  Cameroun
                </option>
                <option value="Canada">Canada</option>
                <option value="Cap-vert">Cap-vert</option>
                <option value="Chili">Chili</option>
                <option value="Chine">Chine</option>
                <option value="Chypre">Chypre</option>
                <option value="Colombie">Colombie</option>
                <option value="Comores">Comores</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                <option value="Croatie">Croatie</option>
                <option value="Cuba">Cuba</option>
                <option value="Danemark">Danemark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominique">Dominique</option>
                <option value="Égypte">Égypte</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Émirats Arabes Unis">Émirats Arabes Unis</option>
                <option value="Équateur">Équateur</option>
                <option value="Érythrée">Érythrée</option>
                <option value="Espagne">Espagne</option>
                <option value="Estonie">Estonie</option>
                <option value="États Fédérés de Micronésie">
                  États Fédérés de Micronésie
                </option>
                <option value="États-Unis">États-Unis</option>
                <option value="Éthiopie">Éthiopie</option>
                <option value="Fédération de Russie">
                  Fédération de Russie
                </option>
                <option value="Fidji">Fidji</option>
                <option value="Finlande">Finlande</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambie">Gambie</option>
                <option value="Géorgie">Géorgie</option>
                <option value="Géorgie du Sud et les Îles Sandwich du Sud">
                  Géorgie du Sud et les Îles Sandwich du Sud
                </option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Grèce">Grèce</option>
                <option value="Grenade">Grenade</option>
                <option value="Groenland">Groenland</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinée">Guinée</option>
                <option value="Guinée Équatoriale">Guinée Équatoriale</option>
                <option value="Guinée-Bissau">Guinée-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Guyane Française">Guyane Française</option>
                <option value="Haïti">Haïti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong-Kong">Hong-Kong</option>
                <option value="Hongrie">Hongrie</option>
                <option value="Île Bouvet">Île Bouvet</option>
                <option value="Île Christmas">Île Christmas</option>
                <option value="Île de Man">Île de Man</option>
                <option value="Île Norfolk">Île Norfolk</option>
                <option value="Îles (malvinas) Falkland">
                  Îles (malvinas) Falkland
                </option>
                <option value="Îles Åland">Îles Åland</option>
                <option value="Îles Caïmanes">Îles Caïmanes</option>
                <option value="Îles Cocos (Keeling)">
                  Îles Cocos (Keeling)
                </option>
                <option value="Îles Cook">Îles Cook</option>
                <option value="Îles Féroé">Îles Féroé</option>
                <option value="Îles Heard et Mcdonald">
                  Îles Heard et Mcdonald
                </option>
                <option value="Îles Mariannes du Nord">
                  Îles Mariannes du Nord
                </option>
                <option value="Îles Marshall">Îles Marshall</option>
                <option value="Îles Mineures Éloignées des États-Unis">
                  Îles Mineures Éloignées des États-Unis
                </option>
                <option value="Îles Salomon">Îles Salomon</option>
                <option value="Îles Turks et Caïques">
                  Îles Turks et Caïques
                </option>
                <option value="Îles Vierges Britanniques">
                  Îles Vierges Britanniques
                </option>
                <option value="Îles Vierges des États-Unis">
                  Îles Vierges des États-Unis
                </option>
                <option value="Inde">Inde</option>
                <option value="Indonésie">Indonésie</option>
                <option value="Iraq">Iraq</option>
                <option value="Irlande">Irlande</option>
                <option value="Islande">Islande</option>
                <option value="Israël">Israël</option>
                <option value="Italie">Italie</option>
                <option value="Jamahiriya Arabe Libyenne">
                  Jamahiriya Arabe Libyenne
                </option>
                <option value="Jamaïque">Jamaïque</option>
                <option value="Japon">Japon</option>
                <option value="Jordanie">Jordanie</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kirghizistan">Kirghizistan</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Koweït">Koweït</option>
                <option value="L'ex-République Yougoslave de Macédoine">
                  L'ex-République Yougoslave de Macédoine
                </option>
                <option value="Lesotho">Lesotho</option>
                <option value="Lettonie">Lettonie</option>
                <option value="Liban">Liban</option>
                <option value="Libéria">Libéria</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lituanie">Lituanie</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malaisie">Malaisie</option>
                <option value="Malawi">Malawi</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malte">Malte</option>
                <option value="Maroc">Maroc</option>
                <option value="Martinique">Martinique</option>
                <option value="Maurice">Maurice</option>
                <option value="Mauritanie">Mauritanie</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexique">Mexique</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolie">Mongolie</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibie">Namibie</option>
                <option value="Nauru">Nauru</option>
                <option value="Népal">Népal</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigéria">Nigéria</option>
                <option value="Niué">Niué</option>
                <option value="Norvège">Norvège</option>
                <option value="Nouvelle-Calédonie">Nouvelle-Calédonie</option>
                <option value="Nouvelle-Zélande">Nouvelle-Zélande</option>
                <option value="Oman">Oman</option>
                <option value="Ouganda">Ouganda</option>
                <option value="Ouzbékistan">Ouzbékistan</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palaos">Palaos</option>
                <option value="Panama">Panama</option>
                <option value="Papouasie-Nouvelle-Guinée">
                  Papouasie-Nouvelle-Guinée
                </option>
                <option value="Paraguay">Paraguay</option>
                <option value="Pays-Bas">Pays-Bas</option>
                <option value="Pérou">Pérou</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Pologne">Pologne</option>
                <option value="Polynésie Française">Polynésie Française</option>
                <option value="Porto Rico">Porto Rico</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="République Arabe Syrienne">
                  République Arabe Syrienne
                </option>
                <option value="République Centrafricaine">
                  République Centrafricaine
                </option>
                <option value="République de Corée">République de Corée</option>
                <option value="République de Moldova">
                  République de Moldova
                </option>
                <option value="République Démocratique du Congo">
                  République Démocratique du Congo
                </option>
                <option value="République Démocratique Populaire Lao">
                  République Démocratique Populaire Lao
                </option>
                <option value="République Dominicaine">
                  République Dominicaine
                </option>
                <option value="République du Congo">République du Congo</option>
                <option value="République Islamique d'Iran">
                  République Islamique d'Iran
                </option>
                <option value="République Populaire Démocratique de Corée">
                  République Populaire Démocratique de Corée
                </option>
                <option value="République Tchèque">République Tchèque</option>
                <option value="République-Unie de Tanzanie">
                  République-Unie de Tanzanie
                </option>
                <option value="Réunion">Réunion</option>
                <option value="Roumanie">Roumanie</option>
                <option value="Royaume-Uni">Royaume-Uni</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Sahara Occidental">Sahara Occidental</option>
                <option value="Saint-Kitts-et-Nevis">
                  Saint-Kitts-et-Nevis
                </option>
                <option value="Saint-Marin">Saint-Marin</option>
                <option value="Saint-Pierre-et-Miquelon">
                  Saint-Pierre-et-Miquelon
                </option>
                <option value="Saint-Siège (état de la Cité du Vatican)">
                  Saint-Siège (état de la Cité du Vatican)
                </option>
                <option value="Saint-Vincent-et-les Grenadines">
                  Saint-Vincent-et-les Grenadines
                </option>
                <option value="Sainte-Hélène">Sainte-Hélène</option>
                <option value="Sainte-Lucie">Sainte-Lucie</option>
                <option value="Samoa">Samoa</option>
                <option value="Samoa Américaines">Samoa Américaines</option>
                <option value="Sao Tomé-et-Principe">
                  Sao Tomé-et-Principe
                </option>
                <option value="Sénégal">Sénégal</option>
                <option value="Serbie-et-Monténégro">
                  Serbie-et-Monténégro
                </option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapour">Singapour</option>
                <option value="Slovaquie">Slovaquie</option>
                <option value="Slovénie">Slovénie</option>
                <option value="Somalie">Somalie</option>
                <option value="Soudan">Soudan</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Suède">Suède</option>
                <option value="Suisse">Suisse</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard etÎle Jan Mayen">
                  Svalbard etÎle Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Tadjikistan">Tadjikistan</option>
                <option value="Taïwan">Taïwan</option>
                <option value="Tchad">Tchad</option>
                <option value="Terres Australes Françaises">
                  Terres Australes Françaises
                </option>
                <option value="Territoire Britannique de l'Océan Indien">
                  Territoire Britannique de l'Océan Indien
                </option>
                <option value="Territoire Palestinien Occupé">
                  Territoire Palestinien Occupé
                </option>
                <option value="Thaïlande">Thaïlande</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinité-et-Tobago">Trinité-et-Tobago</option>
                <option value="Tunisie">Tunisie</option>
                <option value="Turkménistan">Turkménistan</option>
                <option value="Turquie">Turquie</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Wallis et Futuna">Wallis et Futuna</option>
                <option value="Yémen">Yémen</option>
                <option value="Zambie">Zambie</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <label htmlFor="">
              <span>telephone</span>
              <input
                type="text"
                name="utilisateur[phoneNumber]"
                placeholder="699999999"
              />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label>langue</label>
              <select name="utilisateur[langueUsuelle]" required defaultValue={"français"}>
                <option value="Ã©cossais">Ã©cossais</option>
                <option value="aÃ¯nou">aÃ¯nou</option>
                <option value="abkhaze">abkhaze</option>
                <option value="aceh">aceh</option>
                <option value="acoli">acoli</option>
                <option value="adangme">adangme</option>
                <option value="adyghé">adyghé</option>
                <option value="afar">afar</option>
                <option value="afrihili">afrihili</option>
                <option value="afrikaans">afrikaans</option>
                <option value="afro-asiatiques, langues">
                  afro-asiatiques, langues
                </option>
                <option value="akan">akan</option>
                <option value="akkadien">akkadien</option>
                <option value="albanais">albanais</option>
                <option value="aléoute">aléoute</option>
                <option value="algonquines, langues">
                  algonquines, langues
                </option>
                <option value="allemand">allemand</option>
                <option value="allemand, moyen haut (ca. 1050-1500)">
                  allemand, moyen haut (ca. 1050-1500)
                </option>
                <option value="allemand, vieux haut (ca. 750-1050)">
                  allemand, vieux haut (ca. 750-1050)
                </option>
                <option value="altaÃ¯ques, langues">altaÃ¯ques, langues</option>
                <option value="altai du Sud">altai du Sud</option>
                <option value="amérindiennes de l Amérique centrale, &nbsp;langues">
                  amérindiennes de l Amérique centrale, &nbsp;langues
                </option>
                <option value="amharique">amharique</option>
                <option value="angika">angika</option>
                <option value="anglais">anglais</option>
                <option value="anglais moyen (1100-1500)">
                  anglais moyen (1100-1500)
                </option>
                <option value="anglo-saxon (ca.450-1100)">
                  anglo-saxon (ca.450-1100)
                </option>
                <option value="apaches, langues">apaches, langues</option>
                <option value="arabe">arabe</option>
                <option value="aragonais">aragonais</option>
                <option value="araméen d empire (700-300 BCE)">
                  araméen d empire (700-300 BCE)
                </option>
                <option value="arapaho">arapaho</option>
                <option value="arawak">arawak</option>
                <option value="arménien">arménien</option>
                <option value="aroumain; macÃ©do-roumain">
                  aroumain; macÃ©do-roumain
                </option>
                <option value="artificielles, langues">
                  artificielles, langues
                </option>
                <option value="assamais">assamais</option>
                <option value="asturien; bable; léonais; asturoléonais">
                  asturien; bable; léonais; asturoléonais
                </option>
                <option value="athapascanes, langues">
                  athapascanes, langues
                </option>
                <option value="australiennes, langues">
                  australiennes, langues
                </option>
                <option value="austronésiennes, langues">
                  austronésiennes, langues
                </option>
                <option value="avar">avar</option>
                <option value="avestique">avestique</option>
                <option value="awadhi">awadhi</option>
                <option value="aymara">aymara</option>
                <option value="azéri">azéri</option>
                <option value="bachkir">bachkir</option>
                <option value="balinais">balinais</option>
                <option value="baloutchi">baloutchi</option>
                <option value="baltes, langues">baltes, langues</option>
                <option value="bambara">bambara</option>
                <option value="bamiléké, langues">bamiléké, langues</option>
                <option value="banda, langues">banda, langues</option>
                <option value="bantou, langues">bantou, langues</option>
                <option value="bas allemand; bas saxon; allemand, bas; saxon, bas">
                  bas allemand; bas saxon; allemand, bas; saxon, bas
                </option>
                <option value="bas-sorabe">bas-sorabe</option>
                <option value="basa">basa</option>
                <option value="basque">basque</option>
                <option value="batak, langues">batak, langues</option>
                <option value="bedja">bedja</option>
                <option value="bemba">bemba</option>
                <option value="bengali">bengali</option>
                <option value="berbères, langues">berbères, langues</option>
                <option value="bhojpuri">bhojpuri</option>
                <option value="bichlamar">bichlamar</option>
                <option value="biélorusse">biélorusse</option>
                <option value="bihari">bihari</option>
                <option value="bikol">bikol</option>
                <option value="bini; edo">bini; edo</option>
                <option value="birman">birman</option>
                <option value="blackfoot">blackfoot</option>
                <option value="blin; bilen">blin; bilen</option>
                <option value="bosniaque">bosniaque</option>
                <option value="bouriate">bouriate</option>
                <option value="braj">braj</option>
                <option value="breton">breton</option>
                <option value="bugi">bugi</option>
                <option value="bulgare">bulgare</option>
                <option value="caddo">caddo</option>
                <option value="carélien">carélien</option>
                <option value="catalan; valencien">catalan; valencien</option>
                <option value="caucasiennes, langues">
                  caucasiennes, langues
                </option>
                <option value="cebuano">cebuano</option>
                <option value="celtiques, langues; celtes, langues">
                  celtiques, langues; celtes, langues
                </option>
                <option value="chames, langues">chames, langues</option>
                <option value="chamorro">chamorro</option>
                <option value="chan">chan</option>
                <option value="cherokee">cherokee</option>
                <option value="cheyenne">cheyenne</option>
                <option value="chibcha">chibcha</option>
                <option value="chichewa; chewa; nyanja">
                  chichewa; chewa; nyanja
                </option>
                <option value="chinois">chinois</option>
                <option value="chinook, jargon">chinook, jargon</option>
                <option value="chipewyan">chipewyan</option>
                <option value="choctaw">choctaw</option>
                <option value="chuuk">chuuk</option>
                <option value="copte">copte</option>
                <option value="coréen">coréen</option>
                <option value="cornique">cornique</option>
                <option value="corse">corse</option>
                <option value="couchitiques,  langues">
                  couchitiques, langues
                </option>
                <option value="cree">cree</option>
                <option value="créoles et pidgins">créoles et pidgins</option>
                <option value="créoles et pidgins basés sur l anglais">
                  créoles et pidgins basés sur l anglais
                </option>
                <option value="créoles et pidgins basés sur le français">
                  créoles et pidgins basés sur le français
                </option>
                <option value="créoles et pidgins basés sur le portugais">
                  créoles et pidgins basés sur le portugais
                </option>
                <option value="croate">croate</option>
                <option value="dakota">dakota</option>
                <option value="danois">danois</option>
                <option value="dargwa">dargwa</option>
                <option value="dayak, langues">dayak, langues</option>
                <option value="delaware">delaware</option>
                <option value="dinka">dinka</option>
                <option value="dioula">dioula</option>
                <option value="djaghataÃ¯">djaghataÃ¯</option>
                <option value="dogri">dogri</option>
                <option value="dogrib">dogrib</option>
                <option value="douala">douala</option>
                <option value="dravidiennes,  langues">
                  dravidiennes, langues
                </option>
                <option value="dzongkha">dzongkha</option>
                <option value="efik">efik</option>
                <option value="égyptien">égyptien</option>
                <option value="ekajuk">ekajuk</option>
                <option value="élamite">élamite</option>
                <option value="erza">erza</option>
                <option value="esclave (athapascan)">
                  esclave (athapascan)
                </option>
                <option value="espagnol; castillan">espagnol; castillan</option>
                <option value="espéranto">espéranto</option>
                <option value="estonien">estonien</option>
                <option value="éwé">éwé</option>
                <option value="éwondo">éwondo</option>
                <option value="fang">fang</option>
                <option value="fanti">fanti</option>
                <option value="féroëen">féroëen</option>
                <option value="fidjien">fidjien</option>
                <option value="filipino; pilipino">filipino; pilipino</option>
                <option value="finno-ougriennes,  langues">
                  finno-ougriennes, langues
                </option>
                <option value="finnois">finnois</option>
                <option value="fon">fon</option>
                <option value="français">
                  français
                </option>
                <option value="français ancien (842-ca.1400)">
                  français ancien (842-ca.1400)
                </option>
                <option value="français moyen (1400-1600)">
                  français moyen (1400-1600)
                </option>
                <option value="frioulan">frioulan</option>
                <option value="frison occidental">frison occidental</option>
                <option value="frison oriental">frison oriental</option>
                <option value="frison septentrional">
                  frison septentrional
                </option>
                <option value="ga">ga</option>
                <option value="gaélique; gaélique écossais">
                  gaélique; gaélique écossais
                </option>
                <option value="galicien">galicien</option>
                <option value="galla">galla</option>
                <option value="gallois">gallois</option>
                <option value="ganda">ganda</option>
                <option value="gayo">gayo</option>
                <option value="gbaya">gbaya</option>
                <option value="géorgien">géorgien</option>
                <option value="germaniques, langues">
                  germaniques, langues
                </option>
                <option value="gond">gond</option>
                <option value="gorontalo">gorontalo</option>
                <option value="gothique">gothique</option>
                <option value="goudjrati">goudjrati</option>
                <option value="grebo">grebo</option>
                <option value="grec ancien (jusqu'à&nbsp; 1453)">
                  grec ancien (jusqu'à&nbsp; 1453)
                </option>
                <option value="grec moderne (après 1453)">
                  grec moderne (après 1453)
                </option>
                <option value="groenlandais">groenlandais</option>
                <option value="guarani">guarani</option>
                <option value="guèze">guèze</option>
                <option value="gwichin">gwichin</option>
                <option value="haÃ¯tien; crÃ©ole haÃ¯tien">
                  haÃ¯tien; crÃ©ole haÃ¯tien
                </option>
                <option value="haida">haida</option>
                <option value="haoussa">haoussa</option>
                <option value="haut-sorabe">haut-sorabe</option>
                <option value="hawaÃ¯en">hawaÃ¯en</option>
                <option value="hébreu">hébreu</option>
                <option value="herero">herero</option>
                <option value="hiligaynon">hiligaynon</option>
                <option value="himachali">himachali</option>
                <option value="hindi">hindi</option>
                <option value="hiri motu">hiri motu</option>
                <option value="hittite">hittite</option>
                <option value="hmong">hmong</option>
                <option value="hongrois">hongrois</option>
                <option value="hupa">hupa</option>
                <option value="iakoute">iakoute</option>
                <option value="iban">iban</option>
                <option value="ido">ido</option>
                <option value="igbo">igbo</option>
                <option value="ijo, langues">ijo, langues</option>
                <option value="ilocano">ilocano</option>
                <option value="indÃ©terminÃ©e">indÃ©terminÃ©e</option>
                <option value="indo-aryennes, langues">
                  indo-aryennes, langues
                </option>
                <option value="indo-européennes, langues">
                  indo-européennes, langues
                </option>
                <option value="indonésien">indonésien</option>
                <option value="ingouche">ingouche</option>
                <option value="interlingua (langue auxiliaire internationale)">
                  interlingua (langue auxiliaire internationale)
                </option>
                <option value="interlingue">interlingue</option>
                <option value="inuktitut">inuktitut</option>
                <option value="inupiaq">inupiaq</option>
                <option value="iraniennes, langues">iraniennes, langues</option>
                <option value="irlandais">irlandais</option>
                <option value="irlandais ancien (jusquÃ&nbsp; 900)">
                  irlandais ancien (jusquÃ&nbsp; 900)
                </option>
                <option value="irlandais moyen (900-1200)">
                  irlandais moyen (900-1200)
                </option>
                <option value="iroquoises, langues">iroquoises, langues</option>
                <option value="islandais">islandais</option>
                <option value="italien">italien</option>
                <option value="japonais">japonais</option>
                <option value="javanais">javanais</option>
                <option value="judéo-arabe">judéo-arabe</option>
                <option value="judéo-espagnol">judéo-espagnol</option>
                <option value="judéo-persan">judéo-persan</option>
                <option value="kabardien">kabardien</option>
                <option value="kabyle">kabyle</option>
                <option value="kachin; jingpho">kachin; jingpho</option>
                <option value="kachoube">kachoube</option>
                <option value="kalmouk; oÃ¯rat">kalmouk; oÃ¯rat</option>
                <option value="kamba">kamba</option>
                <option value="kannada">kannada</option>
                <option value="kanouri">kanouri</option>
                <option value="karakalpak">karakalpak</option>
                <option value="karatchai balkar">karatchai balkar</option>
                <option value="karen, langues">karen, langues</option>
                <option value="karib; galibi; carib">
                  karib; galibi; carib
                </option>
                <option value="kashmiri">kashmiri</option>
                <option value="kawi">kawi</option>
                <option value="kazakh">kazakh</option>
                <option value="khasi">khasi</option>
                <option value="khmer central">khmer central</option>
                <option value="khoÃ¯san, langues">khoÃ¯san, langues</option>
                <option value="khotanais; sakan">khotanais; sakan</option>
                <option value="kikuyu">kikuyu</option>
                <option value="kimbundu">kimbundu</option>
                <option value="kirghiz">kirghiz</option>
                <option value="kiribati">kiribati</option>
                <option value="klingon">klingon</option>
                <option value="kom">kom</option>
                <option value="kongo">kongo</option>
                <option value="konkani">konkani</option>
                <option value="kosrae">kosrae</option>
                <option value="koumyk">koumyk</option>
                <option value="kpellé">kpellé</option>
                <option value="krou, langues">krou, langues</option>
                <option value="kuanyama; kwanyama">kuanyama; kwanyama</option>
                <option value="kurde">kurde</option>
                <option value="kurukh">kurukh</option>
                <option value="kutenai">kutenai</option>
                <option value="lahnda">lahnda</option>
                <option value="lamba">lamba</option>
                <option value="langues des signes">langues des signes</option>
                <option value="langues non codées">langues non codées</option>
                <option value="lao">lao</option>
                <option value="latin">latin</option>
                <option value="letton">letton</option>
                <option value="lezghien">lezghien</option>
                <option value="limbourgeois">limbourgeois</option>
                <option value="lingala">lingala</option>
                <option value="lituanien">lituanien</option>
                <option value="lojban">lojban</option>
                <option value="lozi">lozi</option>
                <option value="luba-katanga">luba-katanga</option>
                <option value="luba-lulua">luba-lulua</option>
                <option value="luiseno">luiseno</option>
                <option value="lunda">lunda</option>
                <option value="luo (Kenya et Tanzanie)">
                  luo (Kenya et Tanzanie)
                </option>
                <option value="lushai">lushai</option>
                <option value="luxembourgeois">luxembourgeois</option>
                <option value="mÃ´n-khmer, langues">mÃ´n-khmer, langues</option>
                <option value="macédonien">macédonien</option>
                <option value="madourais">madourais</option>
                <option value="magahi">magahi</option>
                <option value="maithili">maithili</option>
                <option value="makassar">makassar</option>
                <option value="malais">malais</option>
                <option value="malayalam">malayalam</option>
                <option value="maldivien">maldivien</option>
                <option value="malgache">malgache</option>
                <option value="maltais">maltais</option>
                <option value="mandar">mandar</option>
                <option value="mandchou">mandchou</option>
                <option value="mandingue">mandingue</option>
                <option value="manipuri">manipuri</option>
                <option value="manobo, langues">manobo, langues</option>
                <option value="manx; mannois">manx; mannois</option>
                <option value="maori">maori</option>
                <option value="mapudungun; mapuche; mapuce">
                  mapudungun; mapuche; mapuce
                </option>
                <option value="marathe">marathe</option>
                <option value="mari">mari</option>
                <option value="marshall">marshall</option>
                <option value="marvari">marvari</option>
                <option value="massaÃ¯">massaÃ¯</option>
                <option value="maya, langues">maya, langues</option>
                <option value="mendé">mendé</option>
                <option value="mikmaq; micmac">mikmaq; micmac</option>
                <option value="minangkabau">minangkabau</option>
                <option value="mirandais">mirandais</option>
                <option value="mohawk">mohawk</option>
                <option value="moksa">moksa</option>
                <option value="mongo">mongo</option>
                <option value="mongol">mongol</option>
                <option value="moré">moré</option>
                <option value="mounda, langues">mounda, langues</option>
                <option value="multilingue">multilingue</option>
                <option value="muskogee">muskogee</option>
                <option value="nahuatl, langues">nahuatl, langues</option>
                <option value="napolitain">napolitain</option>
                <option value="nauruan">nauruan</option>
                <option value="navaho">navaho</option>
                <option value="ndébélé du Nord">ndébélé du Nord</option>
                <option value="ndébélé du Sud">ndébélé du Sud</option>
                <option value="ndonga">ndonga</option>
                <option value="néerlandais moyen (ca. 1050-1350)">
                  néerlandais moyen (ca. 1050-1350)
                </option>
                <option value="néerlandais; flamand">
                  néerlandais; flamand
                </option>
                <option value="nepal bhasa; newari">nepal bhasa; newari</option>
                <option value="népalais">népalais</option>
                <option value="newari classique">newari classique</option>
                <option value="nias">nias</option>
                <option value="nigéro-kordofaniennes, langues">
                  nigéro-kordofaniennes, langues
                </option>
                <option value="nilo-sahariennes, langues">
                  nilo-sahariennes, langues
                </option>
                <option value="niué">niué</option>
                <option value="nko">nko</option>
                <option value="nogaÃ¯; nogay">nogaÃ¯; nogay</option>
                <option value="nord-amérindiennes, langues">
                  nord-amérindiennes, langues
                </option>
                <option value="norrois, vieux">norrois, vieux</option>
                <option value="norvégien">norvégien</option>
                <option value="norvégien bokmÃ¥l">norvégien bokmÃ¥l</option>
                <option value="norvégien nynorsk; nynorsk, norvégien">
                  norvégien nynorsk; nynorsk, norvégien
                </option>
                <option value="nubiennes, langues">nubiennes, langues</option>
                <option value="nyamwezi">nyamwezi</option>
                <option value="nyankolÃ©">nyankolÃ©</option>
                <option value="nyoro">nyoro</option>
                <option value="nzema">nzema</option>
                <option value="occitan (aprÃ¨s 1500)">
                  occitan (aprÃ¨s 1500)
                </option>
                <option value="ojibwa">ojibwa</option>
                <option value="oriya">oriya</option>
                <option value="osage">osage</option>
                <option value="ossÃ¨te">ossÃ¨te</option>
                <option value="otomi, langues">otomi, langues</option>
                <option value="ouÃ¯gour">ouÃ¯gour</option>
                <option value="oudmourte">oudmourte</option>
                <option value="ougaritique">ougaritique</option>
                <option value="ourdou">ourdou</option>
                <option value="ouszbek">ouszbek</option>
                <option value="pachto">pachto</option>
                <option value="pahlavi">pahlavi</option>
                <option value="palau">palau</option>
                <option value="pali">pali</option>
                <option value="pampangan">pampangan</option>
                <option value="pangasinan">pangasinan</option>
                <option value="papiamento">papiamento</option>
                <option value="papoues, langues">papoues, langues</option>
                <option value="pas de contenu linguistique; non applicable">
                  pas de contenu linguistique; non applicable
                </option>
                <option value="pedi; sepedi; sotho du Nord">
                  pedi; sepedi; sotho du Nord
                </option>
                <option value="pendjabi">pendjabi</option>
                <option value="persan">persan</option>
                <option value="perse, vieux (ca. 600-400 av. J.-C.)">
                  perse, vieux (ca. 600-400 av. J.-C.)
                </option>
                <option value="peul">peul</option>
                <option value="phÃ©nicien">phÃ©nicien</option>
                <option value="philippines, langues">
                  philippines, langues
                </option>
                <option value="pohnpei">pohnpei</option>
                <option value="polonais">polonais</option>
                <option value="portugais">portugais</option>
                <option value="prÃ¢krit, langues">prÃ¢krit, langues</option>
                <option value="provenÃ§al ancien (jusquÃ&nbsp; 1500); occitan ancien (jusquÃ&nbsp; 1500)">
                  provenÃ§al ancien (jusquÃ&nbsp; 1500); occitan ancien
                  (jusquÃ&nbsp; 1500)
                </option>
                <option value="quechua">quechua</option>
                <option value="rajasthani">rajasthani</option>
                <option value="rapanui">rapanui</option>
                <option value="rarotonga; maori des Ã®les Cook">
                  rarotonga; maori des Ã®les Cook
                </option>
                <option value="romanche">romanche</option>
                <option value="romanes, langues">romanes, langues</option>
                <option value="roumain; moldave">roumain; moldave</option>
                <option value="rundi">rundi</option>
                <option value="russe">russe</option>
                <option value="rwanda">rwanda</option>
                <option value="sÃ©mitiques, langues">
                  sÃ©mitiques, langues
                </option>
                <option value="sÃ©rÃ¨re">sÃ©rÃ¨re</option>
                <option value="salishennes, langues">
                  salishennes, langues
                </option>
                <option value="samaritain">samaritain</option>
                <option value="sames, langues">sames, langues</option>
                <option value="sami de Lule">sami de Lule</option>
                <option value="sami dInari">sami dInari</option>
                <option value="sami du Nord">sami du Nord</option>
                <option value="sami du Sud">sami du Sud</option>
                <option value="sami skolt">sami skolt</option>
                <option value="samoan">samoan</option>
                <option value="sandawe">sandawe</option>
                <option value="sango">sango</option>
                <option value="sanskrit">sanskrit</option>
                <option value="santal">santal</option>
                <option value="sarde">sarde</option>
                <option value="sasak">sasak</option>
                <option value="selkoupe">selkoupe</option>
                <option value="serbe">serbe</option>
                <option value="shona">shona</option>
                <option value="sicilien">sicilien</option>
                <option value="sidamo">sidamo</option>
                <option value="sindhi">sindhi</option>
                <option value="singhalais">singhalais</option>
                <option value="sino-tibÃ©taines, langues">
                  sino-tibÃ©taines, langues
                </option>
                <option value="sioux, langues">sioux, langues</option>
                <option value="slaves, langues">slaves, langues</option>
                <option value="slavon d église; vieux slave; slavon liturgique; vieux bulgare">
                  slavon d église; vieux slave; slavon liturgique; vieux bulgare
                </option>
                <option value="slovÃ¨ne">slovÃ¨ne</option>
                <option value="slovaque">slovaque</option>
                <option value="sogdien">sogdien</option>
                <option value="somali">somali</option>
                <option value="songhai, langues">songhai, langues</option>
                <option value="soninkÃ©">soninkÃ©</option>
                <option value="sorabes, langues">sorabes, langues</option>
                <option value="sotho du Sud">sotho du Sud</option>
                <option value="soundanais">soundanais</option>
                <option value="soussou">soussou</option>
                <option value="sranan tongo">sranan tongo</option>
                <option value="suÃ©dois">suÃ©dois</option>
                <option value="sud-amÃ©rindiennes, langues">
                  sud-amÃ©rindiennes, langues
                </option>
                <option value="suisse alémanique; alémanique; alsacien">
                  suisse alémanique; alémanique; alsacien
                </option>
                <option value="sukuma">sukuma</option>
                <option value="sumÃ©rien">sumÃ©rien</option>
                <option value="swahili">swahili</option>
                <option value="swati">swati</option>
                <option value="symboles Bliss; Bliss">
                  symboles Bliss; Bliss
                </option>
                <option value="syriaque">syriaque</option>
                <option value="syriaque classique">syriaque classique</option>
                <option value="tÃ©lougou">tÃ©lougou</option>
                <option value="tadjik">tadjik</option>
                <option value="tagalog">tagalog</option>
                <option value="tahitien">tahitien</option>
                <option value="tai, langues">tai, langues</option>
                <option value="tamacheq">tamacheq</option>
                <option value="tamoul">tamoul</option>
                <option value="tatar">tatar</option>
                <option value="tatar de Crimé">tatar de Crimé</option>
                <option value="tchèque">tchèque</option>
                <option value="tchétchène">tchétchène</option>
                <option value="tchouvache">tchouvache</option>
                <option value="temne">temne</option>
                <option value="tereno">tereno</option>
                <option value="tetum">tetum</option>
                <option value="thaÃ¯">thaÃ¯</option>
                <option value="tibÃ©tain">tibÃ©tain</option>
                <option value="tigrÃ©">tigrÃ©</option>
                <option value="tigrigna">tigrigna</option>
                <option value="tiv">tiv</option>
                <option value="tlingit">tlingit</option>
                <option value="tok pisin">tok pisin</option>
                <option value="tokelau">tokelau</option>
                <option value="tonga (Nyasa)">tonga (Nyasa)</option>
                <option value="tongan (ÃŽles Tonga)">
                  tongan (ÃŽles Tonga)
                </option>
                <option value="touva">touva</option>
                <option value="tsigane">tsigane</option>
                <option value="tsimshian">tsimshian</option>
                <option value="tsonga">tsonga</option>
                <option value="tswana">tswana</option>
                <option value="tumbuka">tumbuka</option>
                <option value="tupi, langues">tupi, langues</option>
                <option value="turc">turc</option>
                <option value="turc ottoman (1500-1928)">
                  turc ottoman (1500-1928)
                </option>
                <option value="turkmÃ¨ne">turkmÃ¨ne</option>
                <option value="tuvalu">tuvalu</option>
                <option value="twi">twi</option>
                <option value="ukrainien">ukrainien</option>
                <option value="umbundu">umbundu</option>
                <option value="vaÃ¯">vaÃ¯</option>
                <option value="venda">venda</option>
                <option value="vietnamien">vietnamien</option>
                <option value="volapÃ¼k">volapÃ¼k</option>
                <option value="vote">vote</option>
                <option value="wakashanes, langues">wakashanes, langues</option>
                <option value="wallon">wallon</option>
                <option value="waray">waray</option>
                <option value="washo">washo</option>
                <option value="wolaitta; wolaytta">wolaitta; wolaytta</option>
                <option value="wolof">wolof</option>
                <option value="xhosa">xhosa</option>
                <option value="yao">yao</option>
                <option value="yapois">yapois</option>
                <option value="yi de Sichuan">yi de Sichuan</option>
                <option value="yiddish">yiddish</option>
                <option value="yoruba">yoruba</option>
                <option value="yupik, langues">yupik, langues</option>
                <option value="zandé, langues">zandé, langues</option>
                <option value="zapotÃ¨que">zapotÃ¨que</option>
                <option value="zaza; dimili; dimli; kirdki; kirmanjki; zazaki">
                  zaza; dimili; dimli; kirdki; kirmanjki; zazaki
                </option>
                <option value="zenaga">zenaga</option>
                <option value="zhuang; chuang">zhuang; chuang</option>
                <option value="zoulou">zoulou</option>
                <option value="zuni">zuni</option>
              </select>
            </div>
            <label htmlFor="">
              <span>code candidat</span>
              <input type="text" name="utilisateur[codeCandidat]" />
            </label>
          </div>
          <div>
            <label htmlFor="">motif d'inscription</label>
            <select name="motifQualification" required defaultValue={"F"}>
              <option value="A">Academique</option>
              <option value="C">Accès à la citoyenneté canadienne</option>
              <option value="D">Forces canadiennes</option>
              <option value="E">Etudes en France</option>
              <option value="F">Immigration au Canada</option>
              <option value="I">Intégration</option>
              <option value="N">Accès à la nationalité française</option>
              <option value="P">Professionnelle</option>
              <option value="Q">Immigration au québec</option>
              <option value="R">Carte de Résident</option>
              <option value="X">Individuelle</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label>type document</label>
              <select name="utilisateur[document]">
                <option value="cni">carte national</option>
                <option value="passeport">passeport</option>
              </select>
            </div>
            <label htmlFor="">
              <span>numero cni ou passeport</span>
              <input type="text" name="utilisateur[numeroDocument]" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <label htmlFor="" className="grid gap-2">
              <span>face avant</span>
              <input
                type="file"
                name="kyc[frontSidePhoto]"
                id="kyc[frontSidePhoto]"
              />
            </label>
            <label htmlFor="" className="grid gap-2">
              <span>face arriere</span>
              <input
                type="file"
                name="kyc[backSidePhoto]"
                id="kyc[backSidePhoto]"
              />
            </label>
          </div>
          <div className="capitalize">
            <ul>
              <div>telechargez</div>
              <li className="ml-4">
                ▪ photocopie recto/verso de la piece d'identite
              </li>
              <li className="ml-4">▪ 01 photo 4*4 couleur sur fond blanc</li>
            </ul>
          </div>
          <div>
            <label
              htmlFor="authorisationCandidat"
              className="flex gap-2 items-center cursor-pointer"
            >
              <input
                type="checkbox"
                defaultChecked
                name=""
                id="authorisationCandidat"
              />
              <span>
                j'autorise l'ifc à utiliser mes données pour besoin
                d'information
              </span>
            </label>
          </div>
        </div>
      </form>
      <div className="w-80 grid gap-2 aspect-square top-[80px] sticky text-center">
        <img src={tfcImage} alt="" />
        <p className="first-letter:uppercase">
          test de connaissance de langue pour le canada (TCF- CANADA)
        </p>
        <p className="flex justify-around border rounded-sm p-2">
          01 inscription 210 000 FCAFA <span>✔</span>
        </p>
        <p className="uppercase text-xl text-gray-400">
          total ttc 210 000 fcfa
        </p>
        <div></div>
        <button
          type="button"
          className="bg-purple-500 capitalize text-white p-2 rounded-sm shadow"
        >
          {" "}
          s'inscrire maintenant
        </button>
      </div>
    </div>
  );
});

export default App;
