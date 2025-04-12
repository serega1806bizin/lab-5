function formatPhones() {
  const input = document.getElementById('phoneInput').value;
  const result = input.replace(/(\d{3})-(\d{2})-(\d{2})/g, (match, p1, p2, p3) => {
    return '8-' + p1 + p2 + p3;
  });
  document.getElementById('phoneResult').textContent = result;
}

function extractNames() {
  const text = document.getElementById('nameInput').value;
  const regex = /([А-ЯІЇЄҐ])\.([А-ЯІЇЄҐ])\.?\s*([А-Я][а-яіїєґ]+)/g;
  const list = document.getElementById('nameList');
  list.innerHTML = '';

  let match;
  let found = false;
  console.log("🔍 Починаємо пошук імен...");

  while ((match = regex.exec(text)) !== null) {
    found = true;
    const initial = match[1];
    const surname = match[3];
    const li = document.createElement('li');
    li.textContent = `${surname} ${initial}.`;
    list.appendChild(li);

    console.log(`✅ Знайдено: ${match[0]} → ${surname} ${initial}.`);
  }

  if (!found) {
    console.log("❌ Не знайдено жодного імені.");
    const li = document.createElement('li');
    li.textContent = "Не знайдено жодного імені у вказаному форматі.";
    li.style.color = "#ffaaaa";
    list.appendChild(li);
  }
}
