const apiUrl = "https://akabab.github.io/superhero-api/api/all.json";
const generateBtn = document.getElementById("generate-btn");

// Переменная для хранения данных
let superheroes = [];

// Загружаем данные из API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    superheroes = data; // Сохраняем полученные данные
  })
  .catch((error) => {
    console.error("Error fetching superheroes:", error);
  });

// Функция для расчёта возраста
function calculateAge(birthDate) {
  if (!birthDate) return "Unknown";
  const birthYear = parseInt(birthDate.split("-")[0]);
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Функция для генерации прогресс-бара
function createSkillBar(skill, value) {
  return `
    <div class="skill">
      <span>${skill}</span>
      <div class="progress-bar">
        <div class="progress" style="width: ${value}%;"></div>
      </div>
    </div>
  `;
}

// Функция для генерации случайного героя
function generateRandomHero() {
  if (superheroes.length === 0) {
    alert("Superheroes are still loading. Please wait...");
    return;
  }

  const randomIndex = Math.floor(Math.random() * superheroes.length);
  const hero = superheroes[randomIndex];

  // Отображение данных героя
  document.getElementById("hero-name").textContent = hero.name;
  document.getElementById("hero-gender").textContent = `Gender: ${hero.appearance.gender || "Unknown"}`;
  document.getElementById("hero-age").textContent = `Age: ${calculateAge(hero.biography.birthDate)}`;
  document.getElementById("hero-image").src = hero.images.md;

  // Добавление прогресс-баров для навыков
  const skillsContainer = document.getElementById("hero-skills");
  skillsContainer.innerHTML = ""; // Очищаем предыдущие навыки
  const skills = hero.powerstats; // Навыки героя
  for (let skill in skills) {
    if (skills[skill] !== null) {
      skillsContainer.innerHTML += createSkillBar(skill, skills[skill]);
    }
  }
}

// Событие на кнопку
generateBtn.addEventListener("click", generateRandomHero);
