const speakersDiv = document.querySelector('.speakers');
const footerSection = document.querySelector('.footer');
const partnerSection = document.querySelector('.partner');
// speakers data //
const speakersData = [{
  photo: 'images/ponente1.png', name: 'Teresa Núquez', position: 'Jueza Constitucional del Ecuador', backg: 'Caso Estrellita',
}, {
  photo: 'images/ponente2.png', name: 'Patrick Llored', position: 'Doctor en Ética Animal por la Universidad de Lyon-Francia', backg: 'Dominación y violencia desde una perspectiva interseccional',
}, {
  photo: 'images/ponente3.png', name: 'Celeste Jiménez', position: 'UNI Expert - Harmony with Natura AnimalNaturalis Chile / AnimalLibre', backg: 'La cosificación de los animales',
}, {
  photo: 'images/ponente4.png', name: 'Oscar Horta', position: 'Filósofo profesor Univerdiad Santiago de Compostela', backg: 'Ética de los derechos animales',
}, {
  photo: 'images/ponente5.png', name: 'Andrés Rieznik', position: 'Físico teórico', backg: 'Fundamentos del veganismo',
}, {
  photo: 'images/ponente6.png', name: 'Mauricio Serrano', position: 'Coordinador de AnimalLibre', backg: 'Mi menú vegano y Veganuary',
}];
// card ids //
const speakersCardsId = [];

const speakerTitle = document.createElement('h3');
speakerTitle.innerText = 'Ponentes Destacados';
const speakerSeparator = document.createElement('div');
speakerSeparator.className = 'speakers_separator';
const contentSpeakersDiv = document.createElement('div');
contentSpeakersDiv.className = 'content_speakers';
const contentSpeakersMob = document.createElement('div');
contentSpeakersMob.className = 'content_speakersMob';
speakersDiv.appendChild(speakerTitle);
speakersDiv.appendChild(speakerSeparator);
speakersDiv.appendChild(contentSpeakersDiv);
speakersDiv.appendChild(contentSpeakersMob);
for (let i = 0; i < speakersData.length; i += 1) {
  const speakerCardMob = document.createElement('div');
  speakerCardMob.className = 'speaker_cardMob';
  const speakerImgMob = document.createElement('img');
  speakerImgMob.className = 'speaker_imgMob';
  speakerImgMob.alt = 'speaker photoMob';
  speakerImgMob.src = speakersData[i].photo;
  const speakersCardRightDivMob = document.createElement('div');
  speakersCardRightDivMob.className = 'speakers_card_rightDivMob';
  const speakerNameMob = document.createElement('h4');
  speakerNameMob.className = 'speaker_nameMob';
  speakerNameMob.innerText = speakersData[i].name;
  const speakerPositionMob = document.createElement('span');
  speakerPositionMob.className = 'speaker_positionMob';
  speakerPositionMob.innerText = speakersData[i].position;
  const cardSeparatorMob = document.createElement('div');
  cardSeparatorMob.className = 'card_separatorMob';
  const speakerBackgMob = document.createElement('span');
  speakerBackgMob.className = 'speaker_backgMob';
  speakerBackgMob.innerText = speakersData[i].backg;
  contentSpeakersMob.appendChild(speakerCardMob);
  speakerCardMob.appendChild(speakerImgMob);
  speakerCardMob.appendChild(speakersCardRightDivMob);
  speakersCardRightDivMob.appendChild(speakerNameMob);
  speakersCardRightDivMob.appendChild(speakerPositionMob);
  speakersCardRightDivMob.appendChild(cardSeparatorMob);
  speakersCardRightDivMob.appendChild(speakerBackgMob);
  if (i > 1) {
    speakerCardMob.id = `card${i}`;
    speakerCardMob.style.display = 'none';
    speakersCardsId.push(`card${i}`);
  }
  const speakerCard = document.createElement('div');
  speakerCard.className = 'speaker_card';
  const speakerImg = document.createElement('img');
  speakerImg.className = 'speaker_img';
  speakerImg.alt = 'speaker photo';
  speakerImg.src = speakersData[i].photo;
  const speakersCardRightDiv = document.createElement('div');
  speakersCardRightDiv.className = 'speakers_card_rightDiv';
  const speakerName = document.createElement('h4');
  speakerName.className = 'speaker_name';
  speakerName.innerText = speakersData[i].name;
  const speakerPosition = document.createElement('span');
  speakerPosition.className = 'speaker_position';
  speakerPosition.innerText = speakersData[i].position;
  const cardSeparator = document.createElement('div');
  cardSeparator.className = 'card_separator';
  const speakerBackg = document.createElement('span');
  speakerBackg.className = 'speaker_backg';
  speakerBackg.innerText = speakersData[i].backg;
  contentSpeakersDiv.appendChild(speakerCard);
  speakerCard.appendChild(speakerImg);
  speakerCard.appendChild(speakersCardRightDiv);
  speakersCardRightDiv.appendChild(speakerName);
  speakersCardRightDiv.appendChild(speakerPosition);
  speakersCardRightDiv.appendChild(cardSeparator);
  speakersCardRightDiv.appendChild(speakerBackg);
}
const speakerBtnMob = document.createElement('a');
speakerBtnMob.className = 'speaker_btnMob';
speakerBtnMob.title = 'see more speakers';
const speakerBtnMore = document.createElement('span');
speakerBtnMore.className = 'speaker_btnMore';
speakerBtnMore.innerText = 'MORE';
const speakerBtnArrow = document.createElement('span');
speakerBtnArrow.className = 'speaker_btnArrow';
speakerBtnArrow.innerText = 'v';
let speakerCardElementId;
speakerBtnMob.addEventListener('click', () => {
  if (speakerBtnMore.innerText === 'MORE') {
    speakerBtnMore.innerText = 'LESS';
    speakerBtnMob.title = 'see less elements';
    speakerBtnArrow.innerText = '^';
    footerSection.style.display = 'flex';
    partnerSection.style.display = 'flex';
    for (let j = 0; j < speakersCardsId.length; j += 1) {
      speakerCardElementId = document.getElementById(speakersCardsId[j]);
      speakerCardElementId.style.display = 'flex';
    }
  } else {
    speakerBtnMore.innerText = 'MORE';
    speakerBtnArrow.innerText = 'v';
    speakerBtnMob.title = 'see more elements';
    footerSection.style.display = 'none';
    partnerSection.style.display = 'none';
    for (let j = 0; j < speakersCardsId.length; j += 1) {
      speakerCardElementId = document.getElementById(speakersCardsId[j]);
      speakerCardElementId.style.display = 'none';
    }
  }
});
speakersDiv.appendChild(speakerBtnMob);
speakerBtnMob.appendChild(speakerBtnMore);
speakerBtnMob.appendChild(speakerBtnArrow);